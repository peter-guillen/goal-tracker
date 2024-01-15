import axios from "axios";
const API_URL = "http://localhost:6060/api/goals";

const fetchGoals = async () => {
  try {
    const response = axios.get(API_URL);
    return response;
  } catch (error) {
    console.log("Error FETCHING goals:", error);
  }
};

const createGoal = async (title, priority) => {
  try {
    const response = await axios.post(API_URL, { title, priority });
    return response.data;
  } catch (error) {
    console.log("Error CREATING goals:", error);
  }
};

const updateGoal = async (id, title, priority) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      title: title,
      priority: priority,
    });
    return response;
  } catch (error) {
    console.log("Error UPDATING goals:", error);
  }
};

const deleteGoal = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.log("Error DELETING goals:", error);
  }
};

export { fetchGoals, createGoal, updateGoal, deleteGoal };
