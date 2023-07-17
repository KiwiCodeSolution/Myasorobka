import PropTypes from "prop-types";
import BasePopup from "../UIKit/BasePopup";
import AddProductForm from "../Forms/AddProductForm";
import AddImage from "../AddImage";

const AddProductPopup = ({ onClose }) => {

  return (
    <BasePopup
      title="Додати товар"
      onClose={onClose}
    >
      <AddImage />
      <AddProductForm />

    </BasePopup>
  )
};

export default AddProductPopup;

AddProductPopup.propTypes = ({
  onClose: PropTypes.func
})