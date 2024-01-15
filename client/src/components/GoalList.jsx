import GoalShow from "./GoalShow";
import PropTypes from "prop-types";

const GoalList = ({ goals, onDelete, onEdit }) => {
  const goalId = goals.map((goal) => goal._id);
  const renderedGoals = goals.map((goal) => (
    <GoalShow goal={goal} key={goal._id} onDelete={onDelete} onEdit={onEdit} />
  ));

  return <div key={goalId}>{renderedGoals}</div>;
};

GoalList.propTypes = {
  goals: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default GoalList;
