import ButtonMain from "../components/UIKit/button";
import { useState, useEffect } from "react";
import AddProductPopup from "../components/popups/AddProductPopup";
import productStore from "../store/products";
import { observer } from "mobx-react-lite";

const AdminProducts = observer(() => {
  const [addProductPopup, setAddProductPopup] = useState(false);

  useEffect(() => {
    productStore.getProductsAction();
  }, []);

  return (
    <>
      {addProductPopup ?
      <AddProductPopup onClose={() => setAddProductPopup(false)} /> : (
      <>
        <div className="w-[240px]"></div>
          <h2 className="mx-auto mt-8 text-3xl text-txt-main-white font-medium">Каталог Товарів</h2>
        <ButtonMain style="redMedium" btnClass={"mt-6 mx-0"} clickFn={() => setAddProductPopup(true)}>Додати товар</ButtonMain>
      </>
      )}

    </>
  )
});

export default AdminProducts;