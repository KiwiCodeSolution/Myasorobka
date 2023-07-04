import { makeAutoObservable } from "mobx"

class AppState {
  theme = "light"

  constructor() {
    makeAutoObservable(this)
  }

  // setDarkTheme() {
  //   console.log("Theme:", this.theme + " settig the dark theme");
  //   this.theme = "dark"
  // }
  // setLightTheme() {
  //   console.log("Theme:", this.theme + " settig the light theme");
  //   this.theme = "light"
  // }
  toggleTheme() {
    this.theme === "light" ? this.theme = "dark" : this.theme = "light"
  }
}

export default new AppState;
