import { useState, useEffect, useContext } from "react";

import { fetchGoals, createGoal, deleteGoal, updateGoal } from "../api/GoalApi";
import GoalList from "../components/GoalList";
import GoalCreate from "../components/GoalCreate";
import PointTracker from "../components/PointTracker";
import UrgencyField from "../components/UrgencyField";
import { ThemeContext } from "../contexts/ThemeContext";

import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

const titleStyles = twMerge(classNames("bg-blue-900 text-white text-4xl"));

const Home = () => {
  const [goals, setGoals] = useState([]);
  const [displayPriorityContent, setDisplayPriorityContent] = useState(false);
  const [displayPointTracker, setDisplayPointTracker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGoals();
      const goalData = response.data.map((goal) => goal);
      setGoals(goalData);
    };
    fetchData();
  }, []);

  const handleCreate = async (title, priority) => {
    const newGoal = await createGoal(title, priority);
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDelete = async (id) => {
    await deleteGoal(id);
    const updatedGoals = goals.filter((goal) => goal._id !== id);
    setGoals(updatedGoals);
  };

  const handleEdit = async (id, title, priority) => {
    try {
      await updateGoal(id, title, priority);
      const updatedGoal = goals.map((goal) =>
        goal._id === id ? { ...goal, title, priority } : goal
      );
      setGoals(updatedGoal);
    } catch (error) {
      console.log("Error updating goal...", error);
    }
  };

  const handleDisplayPriorityContent = () => {
    setDisplayPriorityContent(!displayPriorityContent);
  };

  let priorityContent = (
    <div>
      <FaCircleChevronUp />
      <UrgencyField goals={goals} />
    </div>
  );

  let renderedPriorityContent = displayPriorityContent ? (
    priorityContent
  ) : (
    <FaCircleChevronDown />
  );

  const handleDisplayPointTracker = () => {
    setDisplayPointTracker(!displayPointTracker);
  };

  const renderedPointTracker = displayPointTracker ? (
    <div>
      <FaCircleChevronUp />
      <PointTracker goals={goals} />
    </div>
  ) : (
    <FaCircleChevronDown />
  );

  const message = useContext(ThemeContext);

  return (
    <>
      <h1 className={titleStyles}>Todo Tracker</h1>
      <div>{message}</div>

      <div className="grid grid-cols-2">
        <div>
          <GoalList goals={goals} onDelete={handleDelete} onEdit={handleEdit} />
          <GoalCreate onCreate={handleCreate} />
        </div>
        <div>
          <h2>Goal Priority</h2>
          <button onClick={handleDisplayPriorityContent}>
            {renderedPriorityContent}
          </button>
          <h2>Point Tracker</h2>
          <button onClick={handleDisplayPointTracker}>
            {renderedPointTracker}
          </button>
        </div>
      </div>

      {JSON.stringify(goals)}
    </>
  );
};

export default Home;
