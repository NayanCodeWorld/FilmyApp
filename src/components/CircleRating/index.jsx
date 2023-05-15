import React from "react";
//Import Progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './index.scss'

const CircleRating = ({rating}) => {
  return (
    <div className="circleRating">
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        style={buildStyles({
            pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
        })}
    />
    </div>
  )
}

export default CircleRating