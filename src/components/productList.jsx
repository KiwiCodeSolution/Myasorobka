import { observer } from "mobx-react-lite";
import Proptypes from "prop-types";

import AllProductSwiper from "./allProductSwiper";
import FavouriteProductSwiper from "./favouriteProductSwiper";

const ProductList = observer(({ favourite }) => {
  return favourite ? (
    // <ul className="w-screen py-4 flex justify-center gap-8">
    //   {productStore.products
    //     .filter((product) => product.favourite === true)
    //     .map((product) => (
    //       <li key={product.name}>
    //         <ProductCard product={product} />
    //       </li>
    //     ))}
    // </ul>
    <FavouriteProductSwiper />
  ) : (
    <AllProductSwiper />
  );
});
ProductList.propTypes = {
  favourite: Proptypes.bool,
};

export default ProductList;
