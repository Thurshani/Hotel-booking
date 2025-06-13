// components/StarRating.js
import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 5 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={rating > index ? assets.starIcon : assets.starIconOutlined}
            alt="star"
            className="w-4 h-4 object-contain"
          />
        ))}
    </>
  );
};

export default StarRating;

