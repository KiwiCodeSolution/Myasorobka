import { makeAutoObservable } from "mobx"

class Theme {
  bg = "black"

  constructor() {
  makeAutoObservable(this)
  }

  toggleTheme = () => {
    this.bg = this.bg === "black" ? "white" : "black"
  }
}
export default new Theme();
