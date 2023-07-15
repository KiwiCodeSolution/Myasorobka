import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import products from "../store/products";
import { useEffect } from "react";
import auth from "../store/auth";
import ButtonMain from "../components/UIKit/button";
import orders from "../store/orders";
import ProductList from "../components/productList";

const Products = observer(() => {
  console.log(toJS(products.products));

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
      
      <div className="flex justify-center">
        <ProductList />
      </div>
      {auth.isLoading && <p>is loading ...</p>}
    </>
  )
});

export default Products;
