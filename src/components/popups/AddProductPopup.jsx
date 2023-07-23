import PropTypes from "prop-types";
import BasePopup from "../UIKit/BasePopup";
import AddProductForm from "../Forms/AddProductForm";
import DropzoneExample from "../Dropzone";
import PreviewImgField from "../PreviewImgField";
const AddProductPopup = ({ onClose, editProduct }) => {

  return (
    <BasePopup
      title={editProduct ? "Редагувати товар" : "Додати товар"}
      onClose={onClose}
    > 
      <div className="flex gap-4">
        <DropzoneExample />
        <PreviewImgField />
      </div>
      <AddProductForm closePopup={onClose} editProduct={editProduct} />

    </BasePopup>
  )
};

export default AddProductPopup;

AddProductPopup.propTypes = ({
  onClose: PropTypes.func,
  editProduct: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    unit: PropTypes.string,
    discount_price: PropTypes.string,
    favourite: PropTypes.bool
  })
})