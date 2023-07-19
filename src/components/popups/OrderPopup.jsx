import Proptypes from "prop-types";
import { useState } from "react";

import BasePopup from "../UIKit/BasePopup";
import OrderForm from "../Forms/OrderForm";

const OrderPopup = ({ onClose, onBackToTheCart }) => {
  useState(false);

  return (
    <BasePopup onClose={onClose} onPrevBtnClick={onBackToTheCart}>
      <div className="flex flex-col items-center">
        <OrderForm />
      </div>
    </BasePopup>
  );
};

OrderPopup.propTypes = {
  onClose: Proptypes.func.isRequired,
  onBackToTheCart: Proptypes.func.isRequired,
};

export default OrderPopup;
