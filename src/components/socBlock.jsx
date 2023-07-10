import * as icons from "../icons/iconComponent";
// import { ReactPropTypes } from "react";

const SOC_ELEMENTS = [
  { key: "fb", Icon: icons.Fb },
  { key: "tg", Icon: icons.Tg },
  { key: "inst", Icon: icons.Insta }
]

// eslint-disable-next-line react/prop-types
export const SocialLinksBlock = ({ direction }) => (
  <ul className={`absolute bottom-[85px] left-[10%] flex ${direction === "col" ? "flex-col" : "flex-raw"} gap-y-6`}>
  {SOC_ELEMENTS.map(({ key, Icon }) => (
    <li key={key} className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
      <a href="" className=""><Icon /></a>
    </li>
  ))}
</ul>
) 