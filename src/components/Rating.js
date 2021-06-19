import { FaStar } from "react-icons/fa";

const Rating = (props) => {
  let count = 0;
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return index < props.rating ? (
          <FaStar key={count++} size={20} color="gold" />
        ) : (
          <FaStar key={count++} size={20} color="grey" />
        );
      })}
    </div>
  );
};

export default Rating;
