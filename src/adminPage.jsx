import auth from "./store/auth";

const AdminPage = () => {
  return (
    <>
      <h2 className="text-center p-4">Админ страничка</h2>
      <hr/>
      <button className="w-full text-center" type="button" onClick={(() => auth.toggleIsAuth())}>Выход</button>
    </>
  )
};
export default AdminPage;
