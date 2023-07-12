import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { login, logout } from "../API/authOperations";

class Auth {
  isAuth = false;
  token = "";
  isLoading = false;
  error = "";

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {name: "auth", properties: ["isAuth", "token", "error"], storage: window.localStorage})
  }

  toggleIsAuth = () => {
    this.isAuth = !this.isAuth
  }
  setError = (errMessage) => {
    this.error = errMessage;
  }
  setIsLoading = (bool) => {
    this.isLoading = bool;
  }

  loginAction = async () => {
    try {
      this.isLoading = true;
      const { message, token } = await login();
      runInAction(() => {
        this.isLoading = false;

        if (token) {
          this.token = token;
          this.isAuth = true;
          this.error = "";

        } else {
          this.token = "";
          this.error = message;
        }
      })
    }
    catch (error) {
      this.isLoading = false;
      error.response ?  
      this.error = error.response.data.message : // server error
      this.error = error.message;   // no internet connection
    }
  }
  logoutAction = async () => {
    try {
      this.isLoading = true;
      const result = await logout();
      runInAction(() => {
        this.isLoading = false;

        if (result.status === 200) {
          this.isAuth = false;
          this.token = "";
        } else {
          this.error = "";
        }
      })
    } catch (error) {
      this.isLoading = false;
      error.response ?  
      this.error = error.response.data.message : // server error
      this.error = error.message;   // no internet connection
    }
  }
}

export default new Auth();