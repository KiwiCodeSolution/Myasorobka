import { observer } from "mobx-react-lite";

import productStore from "../store/products";
import ProductCard from "./prouctCard";
import AllProductSwiper from "./allProductSwiper";

const ProductList = observer(({ favourite }) => {
  return favourite ? (
    <ul className="w-screen py-4 flex justify-center gap-8">
      {productStore.products
        .filter((product) => product.favourite === true)
        .map((product) => (
          <li key={product.name}>
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  ) : (
    <AllProductSwiper viewGrid />
  );
});

export default ProductList;
