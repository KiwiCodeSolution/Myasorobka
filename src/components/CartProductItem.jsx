import Proptypes from "prop-types";

import Counter from "./UIKit/Counter";

function totalPrice(price, quantity) {
  return price * quantity;
}

const CartProductItem = ({ name }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full ">
        <h1>{name}</h1>
        <Counter
          initialValue={"0"}
          onChange={(value) => console.log(totalPrice(301, value))}
          outlinedControls
          size="s"
        />
      </div>
    </>
  );
};

CartProductItem.propTypes = {
  name: Proptypes.string.isRequired,
};

export default CartProductItem;
