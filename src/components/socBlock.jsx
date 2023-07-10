import * as icons from "../icons/iconComponent";
import PropTypes from "prop-types";

const SOC_ELEMENTS = [
  { key: "fb", Icon: icons.Fb },
  { key: "tg", Icon: icons.Tg },
  { key: "inst", Icon: icons.Insta }
]

export const SocialLinksBlock = ({ flexDirection = "col" }) => (
  <ul className={`absolute flex ${flexDirection === "col" ? "flex-col gap-y-6 bottom-[85px] left-[70px]" : "flex-row gap-x-5"} `}>
    {SOC_ELEMENTS.map(({ key, Icon }) => (
      <li key={key} className="rounded-full hover:shadow-soc focus:shadow-soc">
        <a href="" className=""><Icon /></a>
      </li>
    ))}
  </ul>
)

SocialLinksBlock.propTypes = {
  flexDirection: PropTypes.oneOf(["col", "row"]),
}