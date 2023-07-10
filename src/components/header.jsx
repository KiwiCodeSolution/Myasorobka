// import PropTypes from "prop-types";
import ButtonMain from "./UIKit/button";
import logo from "../images/logo.png";

const NAV_ELEMENTS = [
  { name: "Про нас", linkId: "about" },
  { name: "Магазин", linkId: "shop" },
  { name: "Контакти", linkId: "contacts" },
  // { name: "Оптовим покупцям", linkId: "wholesale" },
]

const Header = () => {
  return (
    <div className="max-w-[1280px] h-20 mx-auto flex justify-between text-txt-main-white pt-2">
      <img src={logo} alt="Logo" className="w-[76px] h-[76px] ml-20" />
      <div className="flex py-5 items-center">
        <nav className="mr-11">
          <ul className="h-20 flex items-center gap-x-11 ">
            {NAV_ELEMENTS.map((el) => (
              <li
                key={el.name}
                className="cursor-pointer text-xl hover:text-txt-main-yellow focus:text-txt-main-yellow"
              >
                {el.name}
              </li>
            ))}
          </ul>
        </nav>
        <ButtonMain style="redCustom">
          Замовити смаколики
        </ButtonMain>
      </div>
    </div>
  );
};

// Header.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
// };
export default Header;
