import Proptypes from "prop-types";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="w-[120px] h-[120px] rounded-full">
        <img src={review.photo} alt={`відгук ${review.name}`} className="w-[120px] h-[120px] bg-contain" />
      </div>

      <p>{review.name}</p>
      <p>{review.text}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: Proptypes.shape({
    name: Proptypes.string,
    photo: Proptypes.string,
    text: Proptypes.string,
  }),
};

export default ReviewCard;
