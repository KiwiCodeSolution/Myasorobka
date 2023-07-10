import { observer } from "mobx-react-lite";
import auth from "./store/auth";
import PopupOverlay from "./components/UIKit/PopupOverlay";
import RingLoader from "react-spinners/RingLoader";

const AdminLogin = observer(() => {
  console.log("isAuth:", auth.isAuth);

  const handleLogin = () => {
    console.log("handle login");
    auth.loginAction();
  }

  return (
    <>
      {auth.isLoading ?
        (<div className="flex justify-center items-center">
          <RingLoader color="red" loading={auth.isloading} size={120} />
        </div>) :
        (<>
          <h2 className="text-center p-4">Админ - форма авторизации</h2>
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
          </button>
          {auth.error && <PopupOverlay closeByClickOnOverlay closeByPressEsc onClose={() => auth.clearError()}>
            <h2 className="p-20 bg-bg-orange text-2xl rounded-full">{auth.error}</h2>
          </PopupOverlay>
          }
        </>)
      }
    </>
  )
});
export default AdminLogin;
