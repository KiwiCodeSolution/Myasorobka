import ButtonMain from "../components/UIKit/button";
import Header from "../components/header";
import { SocialLinksBlock } from "../components/socBlock";
import { scrollToTProducts } from "../helpers/scrollFunctions";

const HeaderHero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover min-h-[764px] text-txt-main-white relative">
      <div className="max-w-[1440px] mx-auto px-[10px]">
        <Header />
        <p className="mt-[50px] ml-0 lg:ml-[142px] max-w-[950px] text-[46px] lg:text-[56px] font-bold leading-tight">
          М&apos;ясорОбка: про смак та якість{" "}
          <span className="text-txt-main-yellow">
            ми подбали, <span className="text-txt-main-white">а </span> Ви - придбали!
          </span>
        </p>
        <p className="mt-10 ml-0 lg:ml-[142px] max-w-[950px] text-[46px] lg:text-[56px] font-bold leading-tight">
          З турботою про тебе у <span className="text-txt-main-yellow">кожному шматочку!</span>
        </p>

        <p className="mt-14 ml-0 lg:ml-[238px] max-w-[840px] text-[32px] font-bold leading-snug">
          Доставка до кожного куточку України <span className="text-txt-main-yellow">вже зараз!</span>
        </p>
        <ButtonMain
          style="redOrder"
          btnClass="ml-[10px] mt-[32px] mb-[82px] lg:ml-[424px] lg:mt-[72px] lg:mb-0"
          clickFn={scrollToTProducts}
        >
          Замовити зараз
        </ButtonMain>
      </div>
      <SocialLinksBlock section={"header"} />
    </div>
  );
};
export default HeaderHero;
