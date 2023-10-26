import ProductList from "../components/productList";
import hotPepper from "../images/hot-pepper.png";
import rosemary from "../images/rosemary.png";
import Title from "../components/Title";

const Favourite = () => {
  return (
    <div className="bg-bg-black relative pb-[58px] min-h-[600px]">
      <img src={hotPepper} alt="hot pepper" className="absolute top-[-64px]" />
      <img src={rosemary} alt="rosemary" className="absolute right-4 bottom-0" />
      <div className="max-w-[1440px] mx-auto max-px-[120px] pt-12">
        <Title style={"z-10 relative mb-8"} type="white">
          Найулюбленіші смаколики покупців
        </Title>

        <ProductList favourite />
      </div>
    </div>
  );
};
export default Favourite;
