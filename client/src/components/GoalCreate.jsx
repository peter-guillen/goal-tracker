import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";

const GoalCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onCreate(title, priority);
    setTitle("");
    setPriority("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-300">
      <label>Title:</label>
      <input
        className="outline ml-1 mr-3 rounded"
        type="text"
        onChange={handleTitleChange}
        value={title}
      />
      <label>Priority:</label>
      <input
        className="outline ml-1 mr-3 rounded"
        type="number"
        onChange={handlePriorityChange}
        value={priority}
      />

      <button className="rounded-md bg-white p-2 m-2 px-3">Add Goal</button>
    </form>
  );
};

GoalCreate.propTypes = {
  onCreate: PropTypes.func,
};

export default GoalCreate;
