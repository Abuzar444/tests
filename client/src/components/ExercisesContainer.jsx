import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/ExerciseContainer";
import Exercise from "./Exercise";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
import { toast } from "react-toastify";
import { customFetch } from "../utils/util";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const ExercisesContainer = ({ data }) => {
  const { exercises, total, numOfPages } = data;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [exerciseId, setExerciseId] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setExerciseId(id);
    setShowDeleteModal(true);
  };

  const handleModalClose = () => {
    setExerciseId("");
    setShowDeleteModal(false);
  };

  const handleModalDelete = async (id) => {
    try {
      await customFetch.delete(`/exercise/${id}`);
      toast.success("Exercise deleted successfully.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
    setShowDeleteModal(false);
    setExerciseId("");
    navigate("/dashboard/all-exercises");
  };

  if (exercises.length === 0) {
    return (
      <Wrapper>
        <h2>No Exercises</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {total} exercise{exercises.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {exercises.map((exercise) => {
          return (
            <Exercise
              key={exercise._id}
              {...exercise}
              onDeleteClick={() => handleDeleteClick(exercise._id)}
            ></Exercise>
          );
        })}
      </div>
      {numOfPages > 1 && <Pagination data={data} />}
      {showDeleteModal && (
        <Modal
          exerciseId={exerciseId}
          onClose={handleModalClose}
          onDelete={() => handleModalDelete(exerciseId)}
          title="Are you sure you want to delete this exercise?"
          info="This will delete this exercise permanently. You cannot undo this
          action."
        />
      )}
    </Wrapper>
  );
};

ExercisesContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExercisesContainer;
