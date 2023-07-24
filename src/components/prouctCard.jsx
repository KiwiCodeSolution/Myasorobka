/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BlankImg from "../images/BlankPic.jpg";
import {Line, FavouriteIcon, Trash} from "../icons/iconComponent";
import RoundNumbers from "./roundNumbers";
import ButtonMain from "./UIKit/button";
import ordersStore from "../store/orders";
import productStore from "../store/products";
import { toJS } from "mobx";

const ProductCard = ({ product }) => {
  const [qttyBtn, setQttyBtn] = useState(1);
  const { pathname } = useLocation();
  const admin = pathname.endsWith("admin/authorized/products");

  const addToCart = () => {
    ordersStore.addToCart(product, qttyBtn);
  };
  const editProduct = () => {
    console.log("edit product");
    productStore.setEditProduct(product);
  };
  const deleteProduct = () => {
    console.log("delete product");
  };
  const addToFavourite = () => {
    console.log("addToFavourite");
    const newProduct = toJS(product);
    productStore.updateProductAction({...newProduct, favourite: !newProduct.favourite})
  }

  return (
    <div className={`${admin ? "h-[316px]" : "h-[356px]"} w-[216px] rounded-3xl bg-bg-white mx-auto`}>
      <img src={product.img || BlankImg} alt={"product image"} className={"h-[168px] w-full object-cover rounded-t-3xl"} />
      <p className="px-2 py-1 text-center font-bold">{product.name}</p>
      <Line active />
      <p className="px-2 py-1 text-center font-basic">
        {product.price} грн / {product.unit}
      </p>

      <p className="px-2 py-1 text-center text-txt-grey font-basic">
          {product.discount_price ? product.discount_price : "_____________"}
      </p>
      
      {admin ? (
        <>
          <div className="flex justify-center">
            <ButtonMain style={"whiteSmall"} clickFn={editProduct}>
              Редагувати
            </ButtonMain>
          </div>
          <button className="absolute top-[132px] right-6 w-6 h-6 bg-bg-black rounded" onClick={addToFavourite}><FavouriteIcon filled={product.favourite} /></button>
          <button className="absolute top-3 right-6 w-6 h-6 bg-bg-black rounded" onClick={deleteProduct}><Trash/></button>
        </>
      ) : (
        <>
          <RoundNumbers activeBtn={qttyBtn} setQtty={setQttyBtn} />
          <div className="flex justify-center">
            <ButtonMain style={"addToCart"} clickFn={addToCart}>
              Додати у кошик
            </ButtonMain>
          </div>
        </>
      )}
        
    </div>
    
  );
};

export default ProductCard;
