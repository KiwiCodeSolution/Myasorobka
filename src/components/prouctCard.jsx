/* eslint-disable react/prop-types */
import testPicture from "../tempPicture/unsplash_6JQMjhqpVhE.jpg";
import * as icons from "../icons/iconComponent";
import RoundNumbers from "./roundNumbers";
import ButtonMain from "./UIKit/button";
import ordersStore from "../store/orders";

const ProductCard = ({ product }) => {
  console.log(product.img)

  const addToCart = () => {
    ordersStore.addToCart({ product }, 1);
  }

  return (
    <div className="h-[356px] w-[216px] rounded-3xl bg-bg-white">
      <img src={product.img || testPicture} alt={"product image"} className={"h-[168px] rounded-t-3xl"} />
      <p className="px-2 py-1 text-center font-bold">{product.name}</p>
      <icons.Line />
      <p className="px-2 py-1 text-center font-basic">{product.price} грн / {product.unit}</p>
      {product.discount_price ?
        <p className="px-2 py-1 text-center text-txt-grey font-basic">{product.discount_price} грн / {product.unit}</p> :
        <p className="px-2 py-1 text-center text-txt-grey font-basic">_________________</p>}
      <RoundNumbers />
      <div className="flex justify-center">
        <ButtonMain style={"addToCart"} clickFn={addToCart}>
          Додати у кошик
        </ButtonMain>
      </div>
    </div>
  )
}

export default ProductCard;