import { NAV_ELEMENTS } from "../components/header";

const Footer = () => {
  return (
    <div className="bg-bg-black min-h-[453px] pt-8 pb-5 text-txt-main-white relative">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <img src="/src/images/tomatoes.png" alt="tomatoes" className="absolute left-0 top-[-182px]" />
        <ul className="flex gap-x-[50px]">
          <li>
            <ul className="flex flex-col gap-y-2 w-[188px] mt-[143px]">
              {NAV_ELEMENTS.map((el) => (
                <li
                  key={el.name}
                  className="cursor-pointer text-xl hover:text-txt-main-yellow focus:text-txt-main-yellow"
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <img src="/src/images/logo.png" alt="Logo" className="w-[199px] h-[199px]" />
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li className="w-[560px]">
            <p className="text-5xl font-bold mb-2 leading-[1.4]">
              М&apos;ясорОбка - це завжди <span className="text-txt-main-yellow">свіже</span> та{" "}
              <span className="text-txt-main-yellow">корисне м&apos;ясо</span>
            </p>
            <ul className="flex gap-x-8">
              <li className="text-2xl text-txt-main-yellow leading-[1.6] mb-2">
                Телефон
                <p className="text-base text-txt-main-white opacity-[0.6] mb-2">(406) 555-0120</p>
                <p className="text-base text-txt-main-white opacity-[0.6] mb-2">(480) 555-0103</p>
                <p className="text-base text-txt-main-white opacity-[0.6]">(239) 555-0108</p>
              </li>
              <li className="text-2xl text-txt-main-yellow leading-[1.6] mb-2">Адреса</li>
              <li className="text-2xl text-txt-main-yellow leading-[1.6] mb-2">Імейл</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
