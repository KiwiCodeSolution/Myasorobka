import PropTypes from "prop-types";

const buttonsStyle = {
  redSmall:
    "bg-bg-red w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white hover:shadow-btnRedS focus:shadow-btnRedS mx-auto",
  redMedium:
    "bg-bg-red w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto",
  redLarge:
    "bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto",
  addToCart:
    "bg-bg-red w-[176px] h-[28px] py-1 px-3 text-sm font-medium text-txt-main-white hover:shadow-btnRedS focus:shadow-btnRedS mx-auto",
  blackSmall:
    "bg-bg-black w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-btnBlack focus:shadow-btnBlack mx-auto",
  blackMedium:
    "bg-bg-black w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-btnBlack focus:shadow-btnBlack mx-auto",
  categoriesBtn:
    "bg-bg-white w-[162px] h-[56px] py-3 text-base font-semibold text-txt-main-black hover:shadow-btnWhite focus:shadow-btnWhite",
  whiteSmall:
    "bg-bg-white w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-black border border-2 border-bg-black hover:shadow-btnWhite focus:shadow-btnWhite mx-auto",
  redCustom:
    "bg-bg-red w-[240px] h-[38px] py-2 text-base font-medium text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto",
};

const ButtonMain = ({ children, style, btnType, icon, clickFn, btnClass, btnValue }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick} value={btnValue || ""}>
      {icon}
      {children}
    </button>
  );
};

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf([
    "redLarge",
    "redMedium",
    "redSmall",
    "addToCart",
    "blackSmall",
    "blackMedium",
    "whiteSmall",
    "redCustom",
    "categoriesBtn",
  ]).isRequired,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  btnValue: PropTypes.string,
};

export default ButtonMain;
