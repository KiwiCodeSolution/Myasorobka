import Proptypes from "prop-types";

import { Close } from "../../../icons/iconComponent";

const ClosePopupBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group  w-8 h-8  flex justify-center items-center "
    >
      <Close className=" w-12 h-12 group-hover:fill-bg-red group-focus:fill-bg-red transition-colors duration-[250ms]" />
    </button>
  );
};

ClosePopupBtn.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default ClosePopupBtn;
