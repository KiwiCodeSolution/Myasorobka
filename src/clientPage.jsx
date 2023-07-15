import About from "./clientSections/about";
import Discount from "./clientSections/discount";
import Favourite from "./clientSections/favourite";
import Footer from "./clientSections/footer";
import HeaderHero from "./clientSections/headerHero";
import Products from "./clientSections/products";
import Review from "./clientSections/review";

import { observer } from "mobx-react-lite";
import { useState } from "react";

import AlertPopup from "./components/UIKit/AlertPopup";
import clientStore from "./store/client";
import Cart from "./components/cart";
import CartPopup from "./components/popups/CartPopup";
import OrderPopup from "./components/popups/OrderPopup";

const ClientPage = observer(() => {
  const [isCartPopupShown, setIsCartPopupShown] = useState(false);
  const [isOrderPopupShown, setIsOrderPopupShown] = useState(false);

  const goToTheOrder = () => {
    setIsOrderPopupShown(true);
    setIsCartPopupShown(false);
  };

  const backToTheCart = () => {
    setIsCartPopupShown(true);
    setIsOrderPopupShown(false);
  };

  return (
    <>
      <Cart onClick={() => setIsCartPopupShown(true)} />
      <HeaderHero />
      <Products />
      <Favourite />
      <About />
      <Review />
      <Discount />
      {isCartPopupShown && (
        <CartPopup
          onClose={() => setIsCartPopupShown(false)}
          onGoToTheOrder={goToTheOrder}
        />
      )}
      {isOrderPopupShown && (
        <OrderPopup
          onClose={() => setIsOrderPopupShown(false)}
          onBackToTheCart={backToTheCart}
        />
      )}
      <Footer />
      {clientStore.error && (
        <AlertPopup onOk={() => clientStore.setError("")}>
          <h1>{clientStore.error}</h1>
        </AlertPopup>
      )}
    </>
  );
});
export default ClientPage;
