import About from "./clientSections/about";
import Discount from "./clientSections/discount";
import Favourite from "./clientSections/favourite";
import Footer from "./clientSections/footer";
import HeaderHero from "./clientSections/headerHero";
import Products from "./clientSections/products";
import Review from "./clientSections/review";

import { observer } from "mobx-react-lite";

import AlertPopup from "./components/UIKit/AlertPopup";
import auth from "./store/auth";
import Cart from "./components/cart";
import CartPopup from "./components/popups/CartPopup";
// import ConfirmPopup from "./components/UIKit/ConfirmPopup";
// import BasePopup from "./components/UIKit/BasePopup";

const ClientPage = observer(() => {
  return (
    <>
      <Cart />
      <HeaderHero />
      <Products />
      <Favourite />
      <About />
      <Review />
      <Discount />
      {/* <CartPopup /> */}
      <Footer />
      {/* <ConfirmPopup
        primaryBtnText="Выдалити"
        secondaryBtnText="Скасувати"
        onPrimaryBtnClick={() => console.log("confirm")}
        onSecondaryBtnClick={() => console.log("cancel")}
      >
        <h1>Hello world</h1>
      </ConfirmPopup> */}

      {auth.error && (
        <AlertPopup onOk={() => auth.setError("")}>
          <h1>{auth.error}</h1>
        </AlertPopup>
      )}

      {/* <BasePopup
        onClose={() => console.log("close")}
        onPrevBtnClick={() => console.log("back to the previus page")}
        closeByClickOnOverlay
        title="Кошик"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        placeat, velit delectus ab ipsam minima temporibus nam, quam
        necessitatibus tenetur, quo fugit voluptates impedit ipsum deserunt
        maiores? Aliquid vero alias sapiente earum, qui at repellat, quasi fugit
        ullam ab omnis quaerat nulla id aliquam neque dicta laudantium maxime
        unde? Rerum quod, neque exercitationem alias dignissimos praesentium
        quia ut voluptates. Iure vero asperiores aliquid dicta, architecto amet
        odit nesciunt veritatis reprehenderit eveniet impedit laudantium beatae,
        quos porro ipsam sunt sequi. Ullam quasi repudiandae maxime beatae iste
        odio est libero placeat quia deserunt officiis voluptate eveniet
        quisquam, labore aliquam, repellendus vitae! Magni!
      </BasePopup> */}
    </>
  );
});
export default ClientPage;
