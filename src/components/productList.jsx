import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import ProductCard from "./prouctCard";

const ProductList = observer(() => {

  return (
    <ul className="h-[780px] w-[1012px] px-[150px] py-4 m-auto flex flex-row flex-wrap gap-8">
      {productStore.products.map(product => (
        <li key={product.name}><ProductCard product={product} /></li>
      ))}
    </ul>
  )
})

export default ProductList;