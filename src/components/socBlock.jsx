import * as icons from "../icons/iconComponent";
import PropTypes from "prop-types";

const SOC_ELEMENTS = [
  { key: "fb", Icon: icons.Fb },
  { key: "tg", Icon: icons.Tg },
  { key: "inst", Icon: icons.Insta }
]

export const SocialLinksBlock = ({ flexDirection, left = "10%", bottom = "85px" }) => (
  <ul className={`absolute bottom-[${bottom}] left-${left} flex ${flexDirection === "col" ? "flex-col" : "flex-row"} gap-y-6`}>
    {SOC_ELEMENTS.map(({ key, Icon }) => (
      <li key={key} className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
        <a href="" className=""><Icon /></a>
      </li>
    ))}
  </ul>
);

SocialLinksBlock.propTypes = {
  flexDirection: PropTypes.oneOf(["col", "row"]),
  left: PropTypes.string,
  bottom: PropTypes.string,
}