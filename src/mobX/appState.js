import { makeAutoObservable } from "mobx"

class AppState {
  theme = "light"
  lang = "eng"
  showModal = false

  constructor() {
    makeAutoObservable(this)
  }
  toggleTheme = () => {
    this.theme === "light" ? this.theme = "dark" : this.theme = "light"
  }
  setLang = (str) => {
    this.lang = str
  }
  setShowModal = (bool) => {
    this.showModal = bool
  }
}

export default new AppState;
