import { useNavigate } from "react-router";
import auth from "../store/auth";

const SideBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    // запрос на сервер, если токен ок, то логаут
    auth.logoutAction();
    // auth.toggleIsAuth();
      
  }
  return (
    <div className="flex flex-col w-96">
      <h2>Sidebar</h2>
      <button type="button" onClick={() => navigate("products")}>Каталог Товарів</button><hr/>
      <button type="button" onClick={() => navigate("orders")}>Список Замовлень</button><hr/>
      <button type="button" onClick={logOut}>Вихід</button><hr/>
    </div>
  )
};

export default SideBar;
