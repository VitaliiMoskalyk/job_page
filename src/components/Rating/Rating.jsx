import { RatingStar } from "rating-star";
import { useState } from "react";

const Rating = ({ id }) => {
  const [rating, setRating] = useState(80);

  const onRatingChange = (score) => {
    setRating(score);
  };

  return (
    <div style={{ padding: 0 }}>
      <RatingStar
        style={{ margin: "5px" }}
        clickable
        maxScore={100}
        size={12}
        id={id}
        colors={{ mask: "#384564" }}
        noBorder
        rating={rating}
        onRatingChange={onRatingChange}
        class
      />
    </div>
  );
};

export default Rating;
