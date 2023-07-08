import { observer } from "mobx-react-lite";
import auth from "./store/auth";

const AdminLogin = observer(() => {
  console.log("isAuth:", auth.isAuth);

  const handleLogin = () => {
    console.log("handle login");
    auth.loginAction();
  }
  return (
    <>
      <h2 className="text-center p-4">Админ - форма авторизации</h2>
      <hr />
      <button className="w-full text-center py-4" type="button" onClick={handleLogin}>Login</button>
      <button className="w-full text-center" type="button" onClick={(() => auth.toggleIsAuth())}>Submit</button>
      {auth.isAuth && <h2 className="text-center p-4">Authorized</h2>}
    </>
  )
});
export default AdminLogin;
