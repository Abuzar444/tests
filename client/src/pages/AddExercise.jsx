
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";
import { customFetch } from "../utils/util";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    await customFetch.post("/exercise", data);
    toast.success("Exercise added successfully.");
    return redirect("/dashboard/all-exercises");
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

const AddExercise = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Exercise</h4>
        <div className="form-center">
          <FormRow type="text" name="exerciseName" labelText="Excercise Name" />
          <FormRow type="text" name="set" labelText="Sets" />
          <FormRow type="text" name="reps" labelText="Reps" />
          <FormRow type="text" name="weight" labelText="Weight (lbs)" />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddExercise;
