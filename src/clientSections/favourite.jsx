import ProductList from "../components/productList";
import hotPepper from "../images/hot-pepper.png";
import rosemary from "../images/rosemary.png";

const Favourite = () => {
  return (
    <div className="bg-bg-dark-grey relative pb-[134px] h-[600px]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-txt-main-white pt-12 pb-4">Найулюбленіші смаколики покупців</h2>
      </div>
      <img src={hotPepper} alt="hot pepper" className="absolute top-[-64px] z-0" />
      <img src={rosemary} alt="rosemary" className="absolute right-4 bottom-0" />
      <div className="absolute">
        <ProductList favourite />
      </div>
    </div>
  );
};
export default Favourite;
