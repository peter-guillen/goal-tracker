// import { useState } from "react";
import PropTypes from "prop-types";

const PointTracker = ({ goals }) => {
  // const [pointsTotal, setPointsTotal] = useState([]);

  const total = goals.reduce((acc, goal) => {
    return acc + goal.points;
  }, 0);

  return (
    <section>
      <h3>Total points: {total}</h3>
      {goals.map((goal) => {
        return (
          <p key={goal._id}>
            {goal.points} points from goal - {goal.title}
          </p>
        );
      })}
    </section>
  );
};

PointTracker.propTypes = {
  goals: PropTypes.array,
};

export default PointTracker;
