import { Outlet } from "react-router-dom";
import SideBar from "./adminSections/sideBar";
import { observer } from "mobx-react-lite";
import auth from "./store/auth";
import AlertPopup from "./components/UIKit/AlertPopup";
import RingLoader from "react-spinners/RingLoader";

const AdminPage = observer(() => {

  return (
      auth.isLoading ?
        (<div className="flex justify-center items-center">
          <RingLoader color="red" loading size={120} />
        </div>) :
        (<>
        <h2 className="text-center p-4">Админ страничка</h2>
        <hr />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
        {auth.error &&
        <AlertPopup onOk={() => auth.setError("")}>
          <h1>{auth.error}</h1>
        </AlertPopup>}
      </>)
  );
})
  
export default AdminPage;
