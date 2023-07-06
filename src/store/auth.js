import { makeAutoObservable } from "mobx"

class Auth {
  isAuth = false;
  token = "";

  constructor() {
    makeAutoObservable(this)
  }

  toggleIsAuth = () => {
    this.isAuth = !this.isAuth
  }
  setToken = (string) => {
    this.token = string
  }
}

export default new Auth();