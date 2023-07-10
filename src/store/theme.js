import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Theme {
  bg = "black"

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'ThemeStore', properties: ['bg'], storage: window.localStorage })
      .then(({ isHydrated }) => console.log("is hydrated:", isHydrated));
  }

  toggleTheme = () => {
    this.bg = this.bg === "black" ? "white" : "black"
  }
}
export default new Theme();
