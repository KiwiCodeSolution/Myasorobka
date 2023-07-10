import PropTypes from "prop-types";
import { useEffect } from "react";

import Portal from "./Portal";
import useScrollBlock from "../../hooks/useScrollBlock";

const PopupOverlay = ({
  closeByClickOnOverlay, // true if you need it
  closeByPressEsc, // true if you need it
  onClose, // fn changing state - show modal
  children,
}) => {
  const [blockScroll, unblockScroll] = useScrollBlock();

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
    blockScroll();

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
      unblockScroll();
      window.removeEventListener("keydown", onPressEsc);
    };
  }, [closeByPressEsc, onClose, blockScroll, unblockScroll]);

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
  closeByClickOnOverlay: PropTypes.bool,
  closeByPressEsc: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PopupOverlay;
