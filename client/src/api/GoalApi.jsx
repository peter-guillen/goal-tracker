import axios from "axios";
const API_URL = "http://localhost:6060/api/goals";

const fetchGoals = async () => {
  const response = axios.get(API_URL);
  return response;
};

const createGoal = async (title, priority, points) => {
  const response = await axios.post(API_URL, { title, priority, points });
  console.log(response);
  return response;
};

const updateGoal = async (id, title, priority, points) => {
  const response = await axios.put(`API_URL/${id}`, {
    title,
    priority,
    points,
  });
  console.log(updateGoal);
  return response;
};

const deleteGoal = async (id) => {
  const response = await axios.delete(`API_URL/${id}`);
  return response;
};

export { fetchGoals, createGoal, updateGoal, deleteGoal };
