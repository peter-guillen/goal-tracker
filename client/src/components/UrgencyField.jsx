import {
  FaBullhorn,
  FaCalendarCheck,
  FaRightLeft,
  FaTrashCan,
} from "react-icons/fa6";
import PropTypes from "prop-types";

const UrgencyField = ({ goals }) => {
  const urgentImportantGoals = goals
    .filter((goal) => goal.priority === 1)
    .map((filteredGoals) => (
      <p key={filteredGoals._id}>{filteredGoals.title}</p>
    ));
  const importantGoals = goals
    .filter((goal) => goal.priority === 2)
    .map((filteredGoals) => (
      <p key={filteredGoals._id}>{filteredGoals.title}</p>
    ));
  const urgentGoals = goals
    .filter((goal) => goal.priority === 3)
    .map((filteredGoals) => (
      <p key={filteredGoals._id}>{filteredGoals.title}</p>
    ));
  const notUrgentImportantGoals = goals
    .filter((goal) => goal.priority === 4)
    .map((filteredGoals) => (
      <p key={filteredGoals._id}>{filteredGoals.title}</p>
    ));

  return (
    <>
      <section className="place-self-center">
        <div className="bg-gray-300">
          <h2>Goals</h2>
        </div>
        <div className="grid grid-rows-2 grid-cols-2">
          <div className="bg-red-500">
            <h3>
              Urgent and Important <FaBullhorn />
            </h3>
            {urgentImportantGoals}
          </div>
          <div className="bg-yellow-400">
            <h3>
              Important <FaCalendarCheck />
            </h3>
            {importantGoals}
          </div>
          <div className="bg-green-500">
            <h3>
              Urgent <FaRightLeft />
            </h3>
            {urgentGoals}
          </div>
          <div className="bg-blue-500">
            <h3>
              Not Urgent or Important <FaTrashCan />
            </h3>
            {notUrgentImportantGoals}
          </div>
        </div>
      </section>
    </>
  );
};

UrgencyField.propTypes = {
  goals: PropTypes.array,
};

export default UrgencyField;
