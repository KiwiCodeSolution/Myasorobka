import { observer } from "mobx-react-lite";
import products from "../store/products";
import { useEffect } from "react";
import auth from "../store/auth";
// import ButtonMain from "../components/UIKit/button";
// import orders from "../store/orders";
import ProductList from "../components/productList";
import Categories from "../components/categories";

const Products = observer(() => {
  // const addToCart = () => {
  //   orders.addToCart({ product: products.products[1] }, 2);
  // };

  useEffect(() => {
    products.getProductsAction();
  }, []);

  return (
    <>
      <div className="pt-8 bg-bg-dark-grey">
        {auth.isLoading && <p>is loading ...</p>}
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl font-bold text-txt-main-white mb-4">Категорії товарів</h2>
          <Categories products={products.products} />
          <h2 className="text-4xl font-bold text-txt-main-white mt-[72px]">Всі категорії</h2>
        </div>
      </div>
      <div className="bg-bg-dark-grey bg-products bg-no-repeat bg-cover relative">
        <div className="max-w-[1280px] mx-auto min-h-[908px]">
          <img src="/src/images/meat.png" alt="meat" className="absolute top-14 left-0" />
          <img src="/src/images/meat-small.png" alt="meat" className="absolute top-40 right-0" />
          <img src="/src/images/meat_1.png" alt="meat" className="absolute top-[637px] right-0 z-10" />
          <ProductList />
        </div>
      </div>
    </>
  );
});

export default Products;
