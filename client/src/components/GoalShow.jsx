import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

import GoalDetails from "./GoalDetails";
import GoalEdit from "./GoalEdit";

import { FaPencil, FaCircleXmark, FaBell } from "react-icons/fa6";

const GoalShow = ({ goal, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(goal._id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = async (id, newTitle, newPriority, newPoints) => {
    await onEdit(id, newTitle, newPriority, newPoints);
    setShowEdit(false);
  };

  const handleCancelEdit = () => {
    setShowEdit(false);
  };

  let content = (
    <>
      <div className="text-white flex">
        <p className="m-2 p-2">{goal.title}</p>
      </div>
      <div className="ml-auto">
        <Link to={`/calendar/${goal._id}`}>
          <button className="rounded-md bg-white p-2 m-2 px-3">
            <FaBell />
          </button>
        </Link>
        <button
          className="rounded-md bg-white p-2 m-2 px-3"
          onClick={handleEditClick}
        >
          <FaPencil />
        </button>
        <button
          className="rounded-md bg-white p-2 m-2 px-3"
          onClick={handleDeleteClick}
        >
          <FaCircleXmark />
        </button>
      </div>
    </>
  );

  let editContentForm = (
    <GoalEdit
      goal={goal}
      onSubmit={handleEditSubmit}
      onCancel={handleCancelEdit}
    />
  );

  let displayContent = showEdit ? editContentForm : content;

  const getGoalPoints = goal.priority * 5;
  goal.points = getGoalPoints;

  return (
    <>
      <div className="bg-gray-600 flex px-3 px1.5 border">{displayContent}</div>
    </>
  );
};

GoalShow.propTypes = {
  goal: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default GoalShow;
