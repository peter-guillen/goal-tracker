import { useState } from "react";
import PropTypes from "prop-types";

const GoalEdit = ({ goal, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(goal.title);
  const [priority, setPriority] = useState(goal.priority);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(goal._id, title, priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-white">Title:</label>
      <input
        type="text"
        onChange={handleTitleChange}
        value={title}
        className="outline ml-1 mr-3 rounded"
        placeholder="title"
      />
      <label htmlFor="" className="text-white">
        Priority:
      </label>
      <input
        type="number"
        onChange={handlePriorityChange}
        value={priority}
        className="outline ml-1 mr-3 rounded"
        placeholder="priority"
      />
      <button className="rounded-md bg-white p-2 m-2 px-3">Save</button>
      <button className="rounded-md bg-white p-2 m-2 px-3" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

GoalEdit.propTypes = {
  goal: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default GoalEdit;
