import React from "react";
import {
  Form,
  Link,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../assets/images/favicon.ico";
import FormRow from "../components/FormRow";
import { customFetch } from "../utils/util";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful. Please login to continue.");
    return redirect("/login");
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

const Register = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post">
        <img
          src={Logo}
          alt="FitTrack "
          className="logo"
          onClick={() => navigate("/")}
        />
        <FormRow type="text" name="name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <FormRow type="text" name="height" labelText="height (cm)" />
        <FormRow type="text" name="weight" labelText="weight (lbs)" />
        <button type="submit" className="btn btn-block">
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
