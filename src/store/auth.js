import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { login, logout, getCurrent } from "../API/authOperations";

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

  loginAction = async (credentials) => {
    try {
      this.isLoading = true;
      const { message, token } = await login(credentials);
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
      await logout();
      runInAction(() => {
        this.isLoading = false;
        this.isAuth = false;
        this.token = "";
      })
    } catch (error) {
      this.isLoading = false;
      if (error.response) { // server error
        this.error = error.response.data.message;
        this.isAuth = false;
        this.token = "";
      } else {
        this.error = error.message;   // no internet connection
      }
    }
  }

  getCurrentAction = async () => {
    try {
      console.log("getCurrentAction - token:", this.token);
      if (this.token) await getCurrent(this.token);

    } catch (error) {
      this.isLoading = false;
      if (error.response) { // server error
        this.error = error.response.data.message;
        this.isAuth = false;
        this.token = "";
      } else {
        this.error = error.message;   // no internet connection
      }
    }
  }
}

export default new Auth();