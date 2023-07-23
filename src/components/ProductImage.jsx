import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import tempPicture from "../tempPicture/unsplash_6JQMjhqpVhE.jpg"

const ProductImage = observer(() => {
  const { editProduct } = productStore;

  return editProduct &&
      <img src={editProduct.img || tempPicture} alt="product image" className={"border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-contain rounded-3xl"}/>
});

export default ProductImage;
