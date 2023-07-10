import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import login from "../API/login";

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
      this.error = error.message;
      this.isLoading = false;
    }
  }
  
}

export default new Auth();