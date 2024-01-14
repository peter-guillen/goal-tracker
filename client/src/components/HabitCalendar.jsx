import { useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const HabitCalendar = ({ value }) => {
  const [toggle, setToggle] = useState([]);
  const { id } = useParams();

  const numOfButtons = Array.from({ length: value }, (_, index) => {
    return index + 1;
  });

  const handleClick = (buttonIndex) => {
    const newToggle = [...toggle];
    newToggle[buttonIndex] = !newToggle[buttonIndex];
    setToggle(newToggle);
  };

  return (
    <>
      <div className="grid grid-cols-7 place-content-center">
        {numOfButtons.map((btn, index) => {
          const buttonClasses = twMerge(
            classNames("bg-purple-500 m-2 p-2 rounded-md text-center", {
              "bg-green-500": toggle[index],
              "bg-purple-500": !toggle[index],
            })
          );
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={buttonClasses}
            >
              {btn}
            </div>
          );
        })}
      </div>
      <div>{id}</div>
    </>
  );
};

HabitCalendar.propTypes = {
  value: PropTypes.number,
  goals: PropTypes.array,
};

export default HabitCalendar;
