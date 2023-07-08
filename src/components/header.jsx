const NAVELEMENTS = [
  { name: "Про нас", linkId: "about" },
  { name: "Магазин", linkId: "shop" },
  { name: "Контакти", linkId: "contacts" },
  { name: "Оптовим покупцям", linkId: "wholesale" },
];

const Header = () => {
  return (
    <div>
      <div className="max-w-[1280px] h-20 py-5 mx-auto flex justify-between items-center text-txt-main-white ">
        <img src="../../src/images/logo.png" alt="Logo" className="w-[76px] h-[76px] ml-20 mt-4" />
        <nav className="">
          <ul className="ml-[412px] h-20 flex items-center gap-x-11 ">
            {NAVELEMENTS.map((el) => (
              <li
                key={el.name}
                className="cursor-pointer text-base hover:text-txt-main-yellow focus:text-txt-main-yellow"
              >
                {el.name}
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="ml-11">
          Замовити смаколики
        </button>
        <ul className="absolute bottom-[85px] left-[72px] flex flex-col gap-y-5">
          <li className="rounded-full hover:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)] focus:shadow-[0_5px_20px_-5px_rgba(251,221,61,1)]">
            <a href="" className="">
              <img src="../../src/icons/facebook.svg" alt="facebook icon" />
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
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
