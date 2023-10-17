import * as icons from "../icons/iconComponent";
import PropTypes from "prop-types";

const SOC_ELEMENTS = [
  { key: "fb", Icon: icons.Fb, link: "https://www.facebook.com/profile.php?id=61551225297005" },
  { key: "tg", Icon: icons.Tg, link: "https://t.me/Rick_oss" },
  { key: "inst", Icon: icons.Insta, link: "https://www.instagram.com/myasorobka.meals/" },
];

export const SocialLinksBlock = ({ section }) => (
  <ul
    className={`flex ${
      section === "header"
        ? "absolute flex-row gap-x-5 bottom-[25px] lg:flex-col lg:gap-y-6 md:bottom-[65px] lg:bottom-[85px] left-[70px]"
        : "flex-row gap-x-5 justify-between"
    } `}
  >
    {SOC_ELEMENTS.map(({ key, Icon, link }) => (
      <li key={key} className="rounded-full hover:shadow-soc focus:shadow-soc">
        <a href={link} className="" target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

SocialLinksBlock.propTypes = {
  section: PropTypes.oneOf(["header", "footer"]),
};
