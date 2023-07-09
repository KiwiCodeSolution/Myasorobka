import PropTypes from "prop-types";

const buttonsStyle = {
  redSmall:
    "bg-bg-red w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)]",
  redMedium:
    "bg-bg-red w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)]",
  redLarge:
    "bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)] focus:shadow-md focus:shadow-[0_5px_30px_-5px_rgba(210,28,28,0.4)]",
  redChange:
    "bg-bg-red w-[176px] h-[28px] py-[6px] px-3 text-sm font-medium text-txt-main-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)] focus:shadow-md focus:shadow-[0_5px_30px_-5px_rgba(210,28,28,0.4)]",
  blackSmall:
    "bg-bg-black w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(40,40,40,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(40,40,40,0.4)]",
  blackMedium:
    "bg-bg-black w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(40,40,40,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(40,40,40,0.4)]",
  whiteSmall:
    "bg-bg-white w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-black border border-2 border-bg-black hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(255,245,218,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(255,245,218,0.4)]",
  redCustom:
    "bg-bg-red w-[240px] h-[38px] py-2 text-base font-medium text-txt-main-white hover:shadow-md hover:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)] focus:shadow-md focus:shadow-[0_0_14px_14px_rgba(210,28,28,0.4)]",
};

const ButtonMain = ({ children, style, btnType, clickFn, icon, btnClass }) => {
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
  clickFn: PropTypes.func.isRequired,
  icon: PropTypes.element,
  btnClass: PropTypes.string,
};

export default ButtonMain;
