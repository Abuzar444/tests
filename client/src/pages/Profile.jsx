
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {
  Form,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { customFetch } from "../utils/util";
import { useRef, useState } from "react";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export const loader = async () => {
  try {
    const {
      data: { user, quote, author },
    } = await customFetch.get("/user");
    return { user, quote, author };
  } catch (error) {
    console.log(error.response.data.msg)
    toast.error(error.response.data.msg);
    return error;
  }
};

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    delete data.oldPassword;
    delete data.newPassword;
    await customFetch.patch("/user", data);
    toast.success("Profile updated successfully.");
    return redirect("/dashboard");
  } catch (err) {
    const errors = err?.response?.data?.msg;
    if (errors) {
      const errorList = errors.split(",");
      errorList.forEach((error) => toast.error(error));
      return err;
    }
    toast.error(err.msg);
    console.log(err.msg)
    return err;
  }
};

const Profile = () => {
  const { user, quote, author } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const oldPassRef = useRef(null);
  const newPassRef = useRef(null);
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await customFetch.delete("/user");
      toast.success("Account deleted successfully.");
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleResetPassword = async () => {
    try {
      await customFetch.patch("/user/reset-password", {
        oldPassword: oldPassRef.current.value,
        newPassword: newPassRef.current.value,
      });
      toast.success("Password reset successfully.");
      oldPassRef.current.value = "";
      newPassRef.current.value = "";
    } catch (err) {
      const errors = err?.response?.data?.msg;
      if (errors) {
        const errorList = errors.split(",");
        errorList.forEach((error) => toast.error(error));
        return err;
      }
      toast.error("Something went wrong. Please try again.");
      return err;
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Welcome!</h4>
        <div className="profile-form-center">
          <div className="quote-container">
            <p className="quote">{quote}</p>
            <p className="author">{"- " + author}</p>
          </div>
          <div className="info-container">
            <div className="info">
              <FormRow
                type="text"
                name="name"
                labelText="Name"
                defaultValue={user.name}
                readOnly={true}
              />
              <FormRow
                type="text"
                name="email"
                labelText="Email"
                defaultValue={user.email}
                readOnly={true}
              />
              <FormRow
                type="text"
                name="height"
                labelText="Height (cm)"
                defaultValue={user.height}
              />
              <div className="btn-container">
                <button
                  className="btn btn-block"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </button>
                <button
                  className="btn-block delete-btn"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="info">
              <FormRow
                type="password"
                name="oldPassword"
                labelText="Old Password"
                required={false}
                ref={oldPassRef}
              />
              <FormRow
                type="password"
                name="newPassword"
                labelText="New Password"
                required={false}
                ref={newPassRef}
              />
              <div className="btn-container">
                <button
                  className="btn btn-block"
                  type="button"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onDelete={handleDelete}
          title={"Are you sure you want to delete your account?"}
          info={
            "This will delete your account permanently. You cannot undo this action."
          }
        ></Modal>
      )}
    </Wrapper>
  );
};

export default Profile;
