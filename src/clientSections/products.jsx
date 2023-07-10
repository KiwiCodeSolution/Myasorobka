import { observer } from "mobx-react-lite";
import products from "../store/products";
import { useEffect } from "react";
import auth from "../store/auth";
import ButtonMain from "../components/UIKit/button";
import orders from "../store/orders";

const Products = observer(() => {
  console.log(products.products);

  const addToCart = () => {
    orders.addToCart({ product: products.products[1] }, 2);
  }

  useEffect(() => {
    products.getProductsAction()
  }, [])

  return (
    <>
      <h2>Products section</h2>
      <ButtonMain style={"addToCart"} clickFn={addToCart}>
        Додати у кошик
      </ButtonMain>
      {auth.isLoading && <p>is loading ...</p>}
    </>
  )
});

export default Products;
