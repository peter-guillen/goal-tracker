import GoalShow from "./GoalShow";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import GoalDetails from "./GoalDetails";

const GoalList = ({ goals, onDelete, onEdit }) => {
  // const goalId = goals.map((goal) => goal._id);
  // const renderedGoals = goals.map((goal) => (
  //   <GoalShow goal={goal} key={goal._id} onDelete={onDelete} onEdit={onEdit} />
  // ));

  // <Routes>
  //   <Route path={"/:id"} element={<GoalDetails goals={goals} />} />
  // </Routes>;

  // return <div key={goalId}>{renderedGoals}</div>;

  return (
    <>
      {goals.map((goal) => (
        <GoalShow
          key={goal._id}
          goal={goal}
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
