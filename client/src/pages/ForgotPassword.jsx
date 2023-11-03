import React from "react";
import Logo from "../assets/images/favicon.ico";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { customFetch } from "../utils/util";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    await customFetch.post("/auth/forgot-password", data);
    toast.success(
      "Password Reset. Please check your email for your new password."
    );
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

const Login = () => {
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
        <FormRow type="email" name="email" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Resetting..." : "Reset"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default Login;
