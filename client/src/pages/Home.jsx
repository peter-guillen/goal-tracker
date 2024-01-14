import { useState, useEffect, useContext } from "react";
import axios from "axios";
import GoalList from "../components/GoalList";
import GoalCreate from "../components/GoalCreate";
import PointTracker from "../components/PointTracker";
import UrgencyField from "../components/UrgencyField";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchGoals, createGoal, deleteGoal, updateGoal } from "../api/GoalApi";

const titleStyles = twMerge(classNames("bg-blue-900 text-white text-4xl"));

const Home = () => {
  const url = "http://localhost:6060/api/goals";
  const [goals, setGoals] = useState([]);
  const [displayPriorityContent, setDisplayPriorityContent] = useState(false);
  const [displayPointTracker, setDisplayPointTracker] = useState(false);

  // promises version -------------------------------------------------------------------------
  //   const fetchGoals = () => {
  //     fetch("http://localhost:6060/api/goals/")
  //       .then((response) => response.json())
  //       .then((goals) => {
  //         setGoals(goals);
  //       });
  //   };

  // async await version -------------------------------------------------------------------------
  //   const fetchGoals = async () => {
  //     const response = await fetch("http://localhost:6060/api/goals/");
  //     const jsonResponse = await response.json();
  //     setGoals(jsonResponse);
  //   };

  // axios version -------------------------------------------------------------------------
  const fetchGoals = async () => {
    const response = await axios.get("http://localhost:6060/api/goals");
    // setGoals(response.data);
    setGoals(response.data.map((goal) => ({ ...goal, id: goal._id })));
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const createGoal = async (title, priority, points) => {
    const response = await axios.post(url, { title, priority, points });
    const updatedGoals = [...goals, response.data];
    setGoals(updatedGoals);
  };

  const deleteGoal = async (id) => {
    axios.delete(`http://localhost:6060/api/goals/${id}`);
    const updatedGoals = goals.filter((goal) => {
      return goal.id !== id;
    });
    setGoals(updatedGoals);
  };

  const editGoal = async (id, newTitle, newPriority, newPoints) => {
    await axios.put(`http://localhost:6060/api/goals/${id}`, {
      title: newTitle,
      priority: newPriority,
      points: newPoints,
    });

    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal._id === id) {
          return {
            ...goal,
            title: newTitle,
            priority: newPriority,
            points: newPoints,
          };
        }
        return goal;
      });
    });
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
          <GoalList goals={goals} onDelete={deleteGoal} onEdit={editGoal} />
          <GoalCreate onCreate={createGoal} />
        </div>
        <div>
          <Outlet />
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
      {/* <Routes>
        <Route
          path="/:id"
          element={<HabitCalendar value={numOfDays} goals={goals} />}
        />
      </Routes> */}
      {JSON.stringify(goals)}
    </>
  );
};

export default Home;
