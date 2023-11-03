
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { customFetch } from "../utils/util";
import { toast } from "react-toastify";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";
import Loader from "../components/Loader";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/exercise/${params.id}`);
    return data;
  } catch (error) {
    toast.error("Something went wrong.");
    return redirect("/dashboard/all-exercises");
  }
};
export const action = async ({ request, params }) => {
  const data = Object.fromEntries(await request.formData());
  try {
    await customFetch.patch(`/exercise/${params.id}`, data);
    toast.success("Exercise updated successfully.");
    return redirect("/dashboard/all-exercises");
  } catch (error) {
    const errors = error?.response?.data?.msg;
    if (errors) {
      const errorList = errors.split(",");
      errorList.forEach((error) => toast.error(error));
      return error;
    }
    toast.error("Something went wrong. Please try again.");
    return error;
  }
};

const EditExercise = () => {
  const { exercise } = useLoaderData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">{exercise.exerciseName}</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="set"
            labelText="Set"
            defaultValue={exercise.set}
          />
          <FormRow
            type="text"
            name="reps"
            labelText="Reps"
            defaultValue={exercise.reps}
          />
          <FormRow
            type="text"
            name="weight"
            labelText="Weight (lbs)"
            defaultValue={exercise.weight}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditExercise;
