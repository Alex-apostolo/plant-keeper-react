import { FaStar } from "react-icons/fa";

const Rating = (props) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return index < props.rating ? (
          <FaStar size={20} color="gold" />
        ) : (
          <FaStar size={20} color="grey" />
        );
      })}
    </div>
  );
};

export default Rating;
