import ButtonMain from "../components/UIKit/button";
import { useState, useEffect } from "react";
import AddProductPopup from "../components/popups/AddProductPopup";
import productStore from "../store/products";
import { observer } from "mobx-react-lite";
import ProductList from "../components/productList";

const AdminProducts = observer(() => {
  const [addProductPopup, setAddProductPopup] = useState(false);

  useEffect(() => {
    // console.log("getting products ..")
    productStore.getProductsAction();
  }, []);

  return (
    <>
      {addProductPopup ?
      <AddProductPopup onClose={() => setAddProductPopup(false)} /> :
      <div className="flex flex-col">
        <div className="flex mb-7">
          <div className="w-[240px]"></div>
          <h2 className="mx-auto mt-8 text-3xl text-txt-main-white font-medium">Каталог Товарів</h2>
          <ButtonMain style="redMedium" btnClass={"mt-6 mx-0"} clickFn={() => setAddProductPopup(true)}>Додати товар</ButtonMain>
        </div>
        {/* <div className="max-w-[1280px] mx-auto min-h-[858px]">
          <ProductList />
        </div> */}
      </div>
      }
    </>
  )
});

export default AdminProducts;