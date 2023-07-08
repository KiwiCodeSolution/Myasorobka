import Header from "../components/header";

const HeaderHero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover min-h-[764px] text-txt-main-white relative">
      <div className="max-w-[1280px]">
        <Header />
        <p className="mt-[122px] ml-[192px] w-[822px] text-[56px] font-bold leading-tight ">
          МясорОбка - це завжди{" "}
          <span className="text-txt-main-yellow">
            свіже <span className="text-txt-main-white">та</span> корисне м’ясо
          </span>
        </p>
        <p className="mt-[32px] ml-[258px] w-[640px] text-[32px] font-bold leading-snug ">
          Доставка по місту Запоріжжя бескоштовна при замовленні від 3000грн
        </p>
        <button type="button" className="mt-[78px]">
          Замовити смаколики
        </button>
      </div>
    </div>
  );
};
export default HeaderHero;
