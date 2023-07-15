import Proptypes from "prop-types";
import { useState } from "react";

import BasePopup from "../UIKit/BasePopup";
import ButtonMain from "../UIKit/button";
import CompleteOrderPopup from "../popups/CompleteOrderPopup";

const OrderPopup = ({ onClose, onBackToTheCart }) => {
  const [isCompleteOrderPopupShown, setIsCompleteOrderPopupShown] =
    useState(false);

  return (
    <>
      <BasePopup onClose={onClose} onPrevBtnClick={onBackToTheCart}>
        <div className="flex flex-col items-center">
          <h1>Order</h1>
          <ButtonMain
            style="redLarge"
            btnType="button"
            clickFn={() => setIsCompleteOrderPopupShown(true)}
          >
            Замовити
          </ButtonMain>
        </div>
      </BasePopup>
      {isCompleteOrderPopupShown && <CompleteOrderPopup onOk={onClose} />}
    </>
  );
};

OrderPopup.propTypes = {
  onClose: Proptypes.func.isRequired,
  onBackToTheCart: Proptypes.func.isRequired,
};

export default OrderPopup;
