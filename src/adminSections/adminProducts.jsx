import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AddProductPopup from "../components/popups/AddProductPopup";
import ProductList from "../components/productList";
import ButtonMain from "../components/UIKit/button";
import productStore from "../store/products";

const AdminProducts = observer(() => {
  const [addProductPopup, setAddProductPopup] = useState(false);

  useEffect(() => {
    setAddProductPopup(productStore.editProduct ? true : false);
  }, [productStore.editProduct]);

  useEffect(() => {
    // console.log("getting products ..")
    productStore.getProductsAction();
  }, []);

  const closePopup = () => {
    productStore.unsetEditProduct();
    setAddProductPopup(false);
  }

  return (
    <>
      {addProductPopup ?
      <AddProductPopup onClose={closePopup} editProduct={productStore.editProduct} /> :
      <div>
        <div className="flex mb-7">
          <div className="mx-auto w-[240px]"></div>
          <h2 className="mt-8 text-3xl text-txt-main-white text-center font-medium">Каталог Товарів</h2>
          <ButtonMain style="redMedium" btnClass={"mt-6 mx-0"}
            clickFn={() => setAddProductPopup(true)}>Додати товар</ButtonMain>
        </div>
          
        <div className="max-w-[1080px] mx-auto min-h-[858px]">
          <ProductList />
        </div>
      </div>
      }
    </>
  )
});

export default AdminProducts;