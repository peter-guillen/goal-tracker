import { useParams } from "react-router-dom";
import HabitCalendar from "./HabitCalendar";

const GoalDetails = () => {
  const { id } = useParams();

  const numOfDays = 30;
  return (
    <>
      <HabitCalendar value={numOfDays} />
      <div>{id}</div>
    </>
  );
};

export default GoalDetails;
