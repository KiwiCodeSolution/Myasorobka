import PropTypes from "prop-types";
import ButtonMain from "./UIKit/button";
import fbIcon from "../icons/facebook.svg";
import tgIcon from "../icons/telegram.svg";
import instaIcon from "../icons/instagram.svg";

const NAV_ELEMENTS = [
  { name: "Про нас", linkId: "about" },
  { name: "Магазин", linkId: "shop" },
  { name: "Контакти", linkId: "contacts" },
  // { name: "Оптовим покупцям", linkId: "wholesale" },
];
const SOC_ELEMENTS = [
  { key: "fb", imgSrc: fbIcon, alt: "facebook icon" },
  { key: "tg", imgSrc: tgIcon, alt: "telegram icon" },
  { key: "inst", imgSrc: instaIcon, alt: "instagram icon" }
]

const Header = ({ toggleModal }) => {
  return (
    <div>
      <div className="max-w-[1280px] h-20  mx-auto flex justify-between text-txt-main-white ">
        <img src="../../src/images/logo.png" alt="Logo" className="w-[76px] h-[76px] ml-20 mt-4" />
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
          <ButtonMain style="redCustom" clickFn={toggleModal}>
            Замовити смаколики
          </ButtonMain>
        </div>

        <ul className="absolute bottom-[85px] left-[10%] flex flex-col gap-y-6">
          {SOC_ELEMENTS.map(({ key, imgSrc, alt }) => (
            <li key={key} className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
              <a href="" className="">
                <img src={imgSrc} alt={alt} />
              </a>
            </li>
          ))}
          {/* <li className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
            <a href="" className="">
              <img src={fbIcon} alt="facebook icon" />
            </a>
          </li>
          <li className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
            <a href="">
              <img src="../../src/icons/telegram.svg" alt="telegram icon" />
            </a>
          </li>
          <li className="rounded-full hover:shadow-[0_5px_10px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
            <a href="">
              <img src="../../src/icons/instagram.svg" alt="instagram icon" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default Header;
