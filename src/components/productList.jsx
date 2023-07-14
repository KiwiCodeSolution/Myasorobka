import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import ProductCard from "./prouctCard";

const ProductList = observer(({ favourite }) => {

  return favourite ? 
    (<ul className="w-screen py-4 flex justify-center gap-8">
      {productStore.products
        .filter(product => product.favourite === true)
        .map(product => <li key={product.name}><ProductCard product={product} /></li>)}
    </ul>) :
    (<ul className="h-[780px] max-w-[960px] py-4 flex flex-wrap justify-left gap-8">
      {productStore.products
        .map(product => <li key={product.name}><ProductCard product={product} /></li>)}
    </ul>)
})

export default ProductList;