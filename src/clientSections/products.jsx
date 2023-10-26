import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import ProductList from "../components/productList";
import Categories from "../components/categories";
import meat from "../images/meat.png";
import meatSm from "../images/meat-small.png";
import meatNext from "../images/meat_1.png";
import Title from "../components/Title";

const Products = observer(() => {
  useEffect(() => {
    productStore.getProductsAction();
  }, []);

  return (
    <>
      <div className="pt-8 bg-bg-black" id="shop">
        <div className="max-w-[1440px] mx-auto px-[10px] pt-5">
          <Title style={"mb-5"} type="white">
            Категорії товарів
          </Title>

          <Categories products={productStore.products} section={"client"} />
          <Title type="white">Всі категорії</Title>
        </div>
      </div>
      <div className="bg-bg-black bg-products bg-no-repeat bg-cover bg-top relative">
        <div className="max-w-[1440px] mx-auto min-h-[858px] max-px-[120px] pt-8">
          <img src={meat} alt="meat" className="absolute top-14 left-0" />
          <img src={meatSm} alt="meat" className="absolute top-40 right-0" />
          <img src={meatNext} alt="meat" className="absolute top-[637px] right-0 z-[5]" />

          <ProductList />
        </div>
      </div>
    </>
  );
});

export default Products;
