import Proptypes from "prop-types";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-[380px] h-[464px] px-4">
      <div className="w-full">
        <img
          src={review.photo}
          alt={`відгук ${review.name}`}
          className="w-[120px] h-[120px] rounded-full mx-auto mb-3"
        />
      </div>

      <p className="text-center text-xl font-semibold mb-3">{review.name}</p>
      <p className="text-center text-xl font-review">{review.text}</p>
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
