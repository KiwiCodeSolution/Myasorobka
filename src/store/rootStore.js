import { create } from "mobx-persist";
import auth from "./auth";
import theme from "./theme";

const hydrate = create({
  storage: localStorage,
  jsonify: false
})

class RootStore {
  AuthStore = auth
  ThemeStore = theme
  constructor() {
    Promise.all([
      hydrate('auth', this.AuthStore),
      hydrate('theme', this.ThemeStore),
    ])
  }
}

export default new RootStore;