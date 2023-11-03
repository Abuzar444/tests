import { useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { customFetch } from "../utils/util";
import { useLoaderData, useNavigation } from "react-router-dom";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

export const loader = async () => {
  console.log('data')
  try {
    const {
      data: {
        user: { weights },
      },
    } = await customFetch.get("/user");

    const dates = Object.keys(weights);
    const data = dates.map((weight) => {
      return {
        date: weight,
        value: weights[weight],
      };
    });
    data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    return { data, dates };
  } catch (error) {
    console.log(error.response.data.msg + 'error')
    toast.error(error.response.data.msg);
    return error;
  }
};

const WeightTracker = () => {
  const currentDate = new Date();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { data: loaderData, dates } = useLoaderData();
  const dateRef = useRef();
  const weightRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(loaderData);
  const originalData = loaderData;
  const minWeight = Math.max(
    Math.min(...data.map((weight) => weight.value)) - 5,
    0
  );
  const maxWeight = Math.max(...data.map((weight) => weight.value)) + 5;

  const handleClick = () => {
    const enteredDate = dateRef.current.value;
    const enteredWeight = weightRef.current.value;
    if (enteredDate === "" || enteredWeight === "") {
      toast.error("Please fill out all fields.");
      return;
    }
    if (enteredWeight < 0) {
      toast.error("Weight cannot be negative.");
      return;
    }
    if (dates.includes(enteredDate)) {
      setShowModal(true);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const enteredDate = dateRef.current.value;
    const enteredWeight = weightRef.current.value;
    const body = {
      date: enteredDate,
      weight: enteredWeight,
    };
    try {
      await customFetch.patch("/user/update-weights", body);
      location.reload();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleSelect = () => {
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    if (startDate === "" || endDate === "") {
      toast.error("Please fill out all fields.");
      return;
    }
    if (startDate > endDate) {
      toast.error("Start date cannot be after end date.");
      return;
    }
    const filteredData = originalData.filter((weight) => {
      return weight.date >= startDate && weight.date <= endDate;
    });
    setData(filteredData);
  };

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <div className="grid-container">
        <ResponsiveContainer width="100%" height={450}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis domain={[minWeight, maxWeight]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#daa520"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="weight-container">
          <FormRow
            type="date"
            name="date"
            defaultValue={currentDate.toISOString().slice(0, 10)}
            ref={dateRef}
          />
          <FormRow
            type="number"
            name="weight"
            labelText="Weight (lbs)"
            ref={weightRef}
          />
          <button
            type="button"
            className="btn btn-primary btn-weight"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
        <div className="range-container">
          <FormRow
            type="date"
            name="startDate"
            ref={startDateRef}
            labelText="Start Range"
          />
          <FormRow
            type="date"
            name="endDate"
            ref={endDateRef}
            labelText="End Range"
          />
          <button
            type="button"
            className="btn btn-primary btn-weight"
            onClick={handleSelect}
          >
            Select
          </button>
          <button
            type="button"
            className="btn btn-primary btn-weight"
            onClick={() => setData(originalData)}
          >
            Reset
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onDelete={() => {
            setShowModal(false);
            handleSubmit();
          }}
          title="You already have a weight for this date."
          info="Are you sure you want to update your weight? This cannot be undone."
        />
      )}
    </Wrapper>
  );
};

export default WeightTracker;
