import PropTypes from "prop-types";

const buttonsStyle = {
  redSmall:
    "bg-bg-red w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white hover:shadow-md hover:shadow-btnRed focus:shadow-md focus:shadow-btnRed",
  redMedium:
    "bg-bg-red w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-md hover:shadow-btnRed focus:shadow-md focus:shadow-btnRed",
  redLarge:
    "bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-md hover:shadow-btnRed focus:shadow-md focus:shadow-btnRed",
  redChange:
    "bg-bg-red w-[176px] h-[28px] py-[6px] px-3 text-sm font-medium text-txt-main-white hover:shadow-md hover:shadow-btnRed focus:shadow-md focus:shadow-btnRed",
  blackSmall:
    "bg-bg-black w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-md hover:shadow-btnBlack focus:shadow-md focus:shadow-btnBlack",
  blackMedium:
    "bg-bg-black w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-md hover:shadow-btnBlack focus:shadow-md focus:shadow-btnBlack",
  whiteSmall:
    "bg-bg-white w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-black border border-2 border-bg-black hover:shadow-md hover:shadow-btnWhite focus:shadow-md focus:shadow-btnWhite",
  redCustom:
    "bg-bg-red w-[240px] h-[38px] py-2 text-base font-medium text-txt-main-white hover:shadow-md hover:shadow-btnRed focus:shadow-md focus:shadow-btnRed",
};

const ButtonMain = ({ children, style, btnType, icon, clickFn, btnClass }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full mx-auto ${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick}>
      {icon}
      {children}
    </button>
  );
};

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
};

export default ButtonMain;
