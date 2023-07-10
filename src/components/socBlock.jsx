import * as icons from "../icons/iconComponent";
import PropTypes from "prop-types";

const SOC_ELEMENTS = [
  { key: "fb", Icon: icons.Fb },
  { key: "tg", Icon: icons.Tg },
  { key: "inst", Icon: icons.Insta }
]

export const SocialLinksBlock = ({ flexDirection = "col" }) => {
  const shadow = "shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]";
  return (
    <ul className={`absolute flex ${flexDirection === "col" ? "flex-col gap-y-6 bottom-[85px] left-[70px]" : "flex-row gap-x-5"} `}>
      {SOC_ELEMENTS.map(({ key, Icon }) => (
        <li key={key} className={`rounded-full hover:${shadow} focus:${shadow}`}>
          <a href="" className=""><Icon /></a>
        </li>
      ))}
    </ul>
  )
};

SocialLinksBlock.propTypes = {
  flexDirection: PropTypes.oneOf(["col", "row"]),
  left: PropTypes.string,
  bottom: PropTypes.string,
}