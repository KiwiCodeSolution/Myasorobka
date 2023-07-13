import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import ProductCard from "./prouctCard";

const ProductList = observer(({ favourite }) => {

  return favourite ? 
    (<ul className="w-screen px-[30px] py-4 flex justify-center gap-8">
      {productStore.products
        .filter(product => product.favourite === true)
        .map(product => <li key={product.name}><ProductCard product={product} /></li>)}
    </ul>) :
    (<ul className="h-[780px] w-full px-[30px] py-4 flex flex-wrap justify-center gap-8">
      {productStore.products
        .map(product => <li key={product.name}><ProductCard product={product} /></li>)}
    </ul>)
})

export default ProductList;