import Proptypes from "prop-types";

import * as icons from "../icons/iconComponent";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import ordersStore from "../store/orders";
import Portal from "./UIKit/Portal";

const Cart = observer(({ onClick }) => {
  console.log("Orders store:", toJS(ordersStore.order))
  const cartProductsNum = ordersStore.order.products.length;
  const isCartEmpty = cartProductsNum === 0;

  return (
    <Portal>
      <button
        type="button"
        onClick={onClick}
        className="fixed bottom-[60px] right-[60px] z-1"
      >
        <icons.Cart />
        {!isCartEmpty && (
          <p
            className="absolute bottom-4 right-4 bg-bg-red w-8 h-8 py-[2px] 
      rounded-full text-xl text-center text-txt-main-white"
          >
            {cartProductsNum}
          </p>
        )}
      </button>
    </Portal>
  );
});

Cart.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default Cart;
