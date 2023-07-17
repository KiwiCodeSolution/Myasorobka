import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AdminState {
  isLoading = false;
  error = "";
  message = "";
  // language = "";
  // theme = "";
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "adminState",
      properties: ["isLoading", "error", "message"],
      storage: window.localStorage,
    })
  }
  setIsLoading = (bool) => {
    this.isLoading = bool;
  }
  setError = (errMessage) => {
    this.error = errMessage;
  }
  setMessage = (message) => {
    this.message = message;
  }
}
export default new AdminState();