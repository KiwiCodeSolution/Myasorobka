import ButtonMain from "../components/UIKit/button";
import Header from "../components/header";

const HeaderHero = () => {
  function toggleModal() {
    console.log("toggleModal");
  }

  return (
    <div className="bg-hero bg-no-repeat bg-cover min-h-[764px] text-txt-main-white relative">
      <div className="max-w-[1280px] mx-auto">
        <Header toggleModal={toggleModal} />
        <p className="mt-[122px] ml-[192px] w-[822px] text-[56px] font-bold leading-tight ">
          МясорОбка - це завжди{" "}
          <span className="text-txt-main-yellow">
            свіже <span className="text-txt-main-white">та</span> корисне м’ясо
          </span>
        </p>
        <p className="mt-[32px] ml-[258px] w-[640px] text-[32px] font-bold leading-snug">
          Доставка по місту Запоріжжя бескоштовна при замовленні від 3000грн
        </p>
        <ButtonMain style="redLarge" btnClass="ml-[424px] mt-[72px]" clickFn={toggleModal}>
          Замовити смаколики
        </ButtonMain>
      </div>
    </div>
  );
};
export default HeaderHero;
