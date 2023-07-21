import Proptypes from "prop-types";
import { observer } from "mobx-react-lite";

import BasePopup from "../UIKit/BasePopup";
import OrderForm from "../Forms/OrderForm";
import CompleteOrderPopup from "./CompleteOrderPopup";
import client from "../../store/client";

const OrderPopup = observer(({ onClose, onBackToTheCart }) => {
  const onOrderComplete = () => {
    client.setMessage("");
    onClose();
  };

  return (
    <>
      <BasePopup onClose={onClose} onPrevBtnClick={onBackToTheCart}>
        <div className="flex flex-col items-center">
          <OrderForm />
        </div>
      </BasePopup>
      {client.message && (
        <CompleteOrderPopup
          onComplete={onOrderComplete}
          orderNumber={client.message}
        />
      )}
    </>
  );
});

OrderPopup.propTypes = {
  onClose: Proptypes.func.isRequired,
  onBackToTheCart: Proptypes.func.isRequired,
};

export default OrderPopup;
