import GoalShow from "./GoalShow";
import PropTypes from "prop-types";

const GoalList = ({ goals, onDelete, onEdit }) => {
  return (
    <>
      {goals.map((goal) => (
        <GoalShow
          goal={goal}
          key={goal.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

GoalList.propTypes = {
  goals: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default GoalList;
