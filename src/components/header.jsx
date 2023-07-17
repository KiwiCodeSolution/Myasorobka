import ButtonMain from "./UIKit/button";
import logo from "../images/logo.png";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="max-w-[1440px] h-20 mx-auto flex justify-between text-txt-main-white pt-2">
      <img src={logo} alt="Logo" className="w-[76px] h-[76px] ml-20" />
      <div className="flex py-5 items-center">
        <nav className="mr-11">
          <Menu section={"header"} styles={"h-20"} />
        </nav>
        <ButtonMain style="redCustom">Замовити смаколики</ButtonMain>
      </div>
    </div>
  );
};

export default Header;
