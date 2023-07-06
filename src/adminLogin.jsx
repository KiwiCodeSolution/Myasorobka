import auth from "./store/auth";

const AdminLogin = () => {

  return (
    <>
      <h2 className="text-center p-4">Админ - форма авторизации</h2>
      <hr/>
      <button className="w-full text-center" type="button" onClick={(() => auth.toggleIsAuth())}>Submit</button>
    </>
  )
};
export default AdminLogin;
