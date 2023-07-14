import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Client {
  isLoading = false;
  error = "";
  // language = "";
  // theme = "";
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {name: "client", properties: ["isLoading", "error"], storage: window.localStorage})
  }
  setIsLoading = (bool) => {
    this.isLoading = bool;
  }
  setError = (errMessage) => {
    this.error = errMessage;
  }
}
export default new Client();