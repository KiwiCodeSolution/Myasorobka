import About from "./clientSections/about";
import Discount from "./clientSections/discount";
import Favourite from "./clientSections/favourite";
import Footer from "./clientSections/footer";
import HeaderHero from "./clientSections/headerHero";
import Products from "./clientSections/products";
import Review from "./clientSections/review";

const ClientPage = () => {
  return (
    <>
      <h2 className="text-center text-2xl">Cтраничка магазина</h2>
      <hr />
      <HeaderHero />
      <Products />
      <Favourite />
      <About />
      <Review />
      <Discount />
      <Footer />
    </>
  )
};
export default ClientPage;
