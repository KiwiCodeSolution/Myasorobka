import UpBtn from "../components/UIKit/buttons/upBtn";
import ContactList from "../components/contactsList";
import Menu from "../components/menu";
import { SocialLinksBlock } from "../components/socBlock";

const Footer = () => {
  return (
    <div className="bg-bg-black min-h-[453px] pt-8 pb-5 text-txt-main-white relative">
      <div className="max-w-[1440px] mx-auto px-[120px] ">
        <img src="/src/images/tomatoes.png" alt="tomatoes" className="absolute left-0 top-[-182px]" />
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-x-[50px]">
          <Menu section={"footer"} styles={"w-[188px] mt-[143px]"} />
          <div>
            <img src="/src/images/logo.png" alt="Logo" className="w-[199px] h-[199px] mb-4" />
            <div className="w-40 mx-auto mb-4">
              <SocialLinksBlock flexDirection="row" />
            </div>
          </div>
          <div className="w-[300px] md:w-[450px] lg:w-[600px]">
            <p className="text-5xl font-bold mb-2 leading-[1.4]">
              М&apos;ясорОбка - це завжди <span className="text-txt-main-yellow">свіже</span> та{" "}
              <span className="text-txt-main-yellow">корисне м&apos;ясо</span>
            </p>
            <ContactList />
          </div>
        </div>
        <p className="text-xs leading-[1.5] text-txt-light-grey text-center mt-[98px]">
          Використовуючи цей сайт Ви погоджуєтесь з{" "}
          <a href="#" className="underline ">
            Правилами Користування
          </a>
        </p>
        <div className="flex gap-x-4 h-[55px] items-center absolute bottom-2 right-20">
          <p className="text-base text-txt-main-white opacity-[0.6]">Designed and Development by</p>
          <a href="#">
            <img src="/src/images/kiwicode.png" alt="" />
          </a>
        </div>
        <UpBtn />
      </div>
    </div>
  );
};
export default Footer;
