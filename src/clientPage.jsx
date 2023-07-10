import About from "./clientSections/about";
import Discount from "./clientSections/discount";
import Favourite from "./clientSections/favourite";
import Footer from "./clientSections/footer";
import HeaderHero from "./clientSections/headerHero";
import Products from "./clientSections/products";
import Review from "./clientSections/review";

import { observer } from "mobx-react-lite";
import theme from "./store/theme";

const ClientPage = observer(() => {
  console.log("theme backgroung:", theme.bg)
  return (
    <>
      <HeaderHero />
      <Products />
      <Favourite />
      <About />
      <Review />
      <Discount />
      <Footer />
    </>
  )
});
export default ClientPage;
