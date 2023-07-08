import { Outlet } from "react-router-dom";
import SideBar from "./adminSections/sideBar";


const AdminPage = () => {



  return (
    <>
      <h2 className="text-center p-4">Админ страничка</h2>
      <hr />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  )
};
export default AdminPage;
