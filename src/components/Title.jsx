import PropTypes from "prop-types";

const Title = ({ type, children, style }) => {
  return (
    <h2 className={`text-4xl font-bold ${type === "white" ? "text-txt-main-white" : "text-txt-main-black"} ${style}`}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  type: PropTypes.oneOf(["white", "black"]).isRequired,
};

export default Title;
