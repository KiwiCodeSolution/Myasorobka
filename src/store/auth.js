import { makeAutoObservable, runInAction } from "mobx"
import login from "../API/login";

class Auth {
  isAuth = false;
  token = "";
  isLoading = false;
  message = "";

  constructor() {
    makeAutoObservable(this)
  }

  toggleIsAuth = () => {
    this.isAuth = !this.isAuth
  }
  loginAction = async () => {
    this.isLoading = true;
    const { message, token } = await login();
    runInAction(() => {
      this.isLoading = false;

      if (token) {
        this.token = token;
        this.isAuth = true;
        this.message = "";

      } else {
        this.token = "";
        this.message = message;
      }
    })
    
  }
  
}

export default new Auth();