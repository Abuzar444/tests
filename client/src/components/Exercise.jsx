import React from "react";
import Wrapper from "../assets/wrappers/Exercise";
import { FaWeightHanging, FaDumbbell } from "react-icons/fa";
import { IoMdRepeat } from "react-icons/io";
import ExerciseInfo from "./ExerciseInfo";
import { Link, Form } from "react-router-dom";
import { useState } from "react";

const Exercise = ({ _id, exerciseName, set, reps, weight, onDeleteClick }) => {
  return (
    <Wrapper>
      <header>
        <h5>{exerciseName}</h5>
      </header>
      <div className="content">
        <div className="content-center">
          <ExerciseInfo icon={<FaWeightHanging />} text={weight + " lbs"} />
          <ExerciseInfo icon={<IoMdRepeat />} text={reps + " reps"} />
          <ExerciseInfo icon={<FaDumbbell />} text={set + " sets"} />
        </div>
        <footer className="actions">
          <Link className="btn edit-btn" to={`../edit-exercise/${_id}`}>
            Edit
          </Link>
          <button
            className="btn delete-btn"
            type="button"
            onClick={onDeleteClick}
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Exercise;
