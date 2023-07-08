import PropTypes from "prop-types";
import { useEffect } from "react";

import Portal from "./Portal";

const PopupOverlay = ({
  closeByClickOnOverlay,
  closeByPressEsc,
  onClose,
  children,
}) => {
  const onOverlayClick = (e) => {
    if (!closeByClickOnOverlay) {
      return;
    }

    const isClickOnTheOverlay = e.target === e.currentTarget;

    if (isClickOnTheOverlay) {
      onClose();
    }
  };

  useEffect(() => {
    if (!closeByPressEsc) {
      return;
    }

    const onPressEsc = ({ code }) => {
      if (code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onPressEsc);

    return () => {
      window.removeEventListener("keydown", onPressEsc);
    };
  }, [closeByPressEsc, onClose]);

  return (
    <>
      <Portal>
        <div
          className="fixed inset-0 flex justify-center items-center bg-slate-400 cursor-pointer"
          onClick={onOverlayClick}
        >
          {children}
        </div>
      </Portal>
    </>
  );
};

PopupOverlay.propTypes = {
  isOpened: PropTypes.bool,
  closeByClickOnOverlay: PropTypes.bool,
  closeByPressEsc: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default PopupOverlay;
