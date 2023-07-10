import PropTypes from "prop-types";
import PopupOverlay from "../UIKit/PopupOverlay";

const BasePopup = ({
  title,
  onClose,
  prevFn,
  closeByClickOnOverlay,
  closeByPressEsc,
  children,
}) => {
  return (
    <PopupOverlay
      onClose={onClose}
      closeByClickOnOverlay={closeByClickOnOverlay}
      closeByPressEsc={closeByPressEsc}
    >
      <div className="w-[600px] h-[500px] rounded-3xl overflow-hidden bg-bg-dark-grey">
        {/* ------------------------POPUP HEADER------------------------ */}

        <div className="relative w-full h-[74px] ">
          {prevFn && (
            <button
              type="button"
              onClick={prevFn}
              className="absolute left-8 bottom-[40%] translate-y-1/2 px-1 h-[40px] bg-slate-100"
            >
              prev
            </button>
          )}
          {title ? (
            <h1 className="absolute left-1/2 bottom-[40%] -translate-x-1/2 translate-y-1/2 text-3xl font-medium text-white">
              {title}
            </h1>
          ) : (
            <img
              src="../../images/logo.png"
              alt="app logo"
              className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[60px] h-[60px] bg-slate-100 rounded-full"
            />
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-8  bottom-[40%] translate-y-1/2 w-8 h-8 bg-white flex justify-center items-center rounded-full"
          >
            x
          </button>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ACACAC00] via-[#EB1A1A] to-[#ACACAC00]"></div>
        </div>
        {/* ------------------------POPUP BODY------------------------ */}
        <div className="px-8 py-6 text-white">{children}</div>
      </div>
    </PopupOverlay>
  );
};

BasePopup.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  prevFn: PropTypes.func,
  closeByClickOnOverlay: PropTypes.bool,
  closeByPressEsc: PropTypes.bool,
  children: PropTypes.node,
};

export default BasePopup;
