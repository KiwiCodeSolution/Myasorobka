import { observer } from "mobx-react-lite";
import auth from "./store/auth";
import AlertPopup from "./components/UIKit/AlertPopup";
import RingLoader from "react-spinners/RingLoader";
import LoginForm from "./components/loginForm";
import logo from "./images/logo.png";

const AdminLogin = observer(() => {
  console.log("isAuth:", auth.isAuth);

  const handleLogin = () => {
    // console.log("handle login");
    auth.loginAction();
  }

  return (
    <div className="flex justify-center items-center h-full">
      {auth.isLoading ?
        (<div className="">
          <RingLoader color="red" loading size={120} />
        </div>) :
        (<div className="mx-auto my-auto w-[640px] h-[480px] bg-bg-black">
          <div className="pt-8 pb-4">
            <img src={logo} alt="Logo" className="w-[108px] h-[108px] mx-auto" />
          </div>
          <LoginForm />
          {/* <h2 className="text-center p-4">Админ - форма авторизации</h2>
        <hr />
        <button
          className="w-full text-center py-4"
          type="button"
          onClick={handleLogin}
        >
          Login with server (localhost)
        </button>
        <button
          className="w-full text-center"
          type="button"
          onClick={() => auth.toggleIsAuth()}
        >
          enter without server
        </button> */}
          {auth.error && <AlertPopup onOk={() => auth.setError("")}>
            <h1>{auth.error}</h1>
          </AlertPopup>}
        
        </div>)}
    </div>
  )
});
export default AdminLogin;
