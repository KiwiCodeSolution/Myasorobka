import ButtonMain from "../components/UIKit/button";
import { useState } from "react";
import AddProductPopup from "../components/popups/AddProductPopup";

const AdminProducts = () => {
  const [addProductPopup, setAddProductPopup] = useState(false);

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
};

export default AdminProducts;