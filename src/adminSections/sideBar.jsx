import { useNavigate, useLocation } from "react-router";
import auth from "../store/auth";
import logo from "../images/logo.png";
import * as icon from "../icons/iconComponent";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname.endsWith("products"));
  console.log(pathname.endsWith("orders"));

  return (
    <div className="flex flex-col w-[356px] h-screen text-txt-main-white text-center font font-medium">
      <img src={logo} alt="logo" className="px-24 py-8" />
      <p className="text-4xl text-txt-main-yellow font-semibold pb-8">Hello Eugenii</p>
      <button type="button" className="text-3xl" onClick={() => navigate("products")}>
        Каталог Товарів
      </button>
      <div className="py-2">
        <icon.Line active={pathname.endsWith("products")} long/>
      </div>
      <button type="button" className="text-3xl" onClick={() => navigate("orders")}>
        Список Замовлень
      </button>
      <div className="py-2">
        <icon.Line active={pathname.endsWith("orders")} long/>
      </div>
      <button type="button" className="w-[240px] mx-auto mt-auto mb-8 text-xl border rounded-full px-[90px] py-[14px]" onClick={() => auth.logoutAction()}>
        Вийти
      </button><hr />
    </div>
  )
};

export default SideBar;
