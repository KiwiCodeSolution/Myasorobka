import Proptypes from "prop-types";
import { motion } from "framer-motion";

const ReviewCard = ({ review }) => {
  const blocAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (custom) => ({ scale: 1, opacity: 1, transition: { delay: custom * 0.3, duration: 0.5 } }),
  };
  return (
    <motion.div
      className="max-w-[380px] min-h-[464px] px-4 mx-auto"
      initial="hidden"
      whileInView="visible"
      custom={review.id}
      variants={blocAnimation}
    >
      <div className="w-[120px] mx-auto mb-3">
        <img
          src={review.photo}
          alt={`відгук ${review.name}`}
          className="object-cover w-[120px] h-[120px] rounded-full"
        />
      </div>

      <p className="text-center text-xl font-semibold mb-3">{review.name}</p>
      <p className="text-center text-xl font-review">{review.text}</p>
    </motion.div>
  );
};

ReviewCard.propTypes = {
  review: Proptypes.shape({
    name: Proptypes.string,
    photo: Proptypes.string,
    text: Proptypes.string,
    id: Proptypes.number,
  }),
};

export default ReviewCard;
