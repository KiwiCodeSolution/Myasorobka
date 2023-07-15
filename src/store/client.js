import { makeAutoObservable } from "mobx";

class Client {
  isLoading = false;
  error = "";
  message = "";
  // language = "";
  // theme = "";
  constructor() {
    makeAutoObservable(this);
  }
  setIsLoading = (bool) => {
    this.isLoading = bool;
  }
  setError = (errMessage) => {
    this.error = errMessage;
  }
}
export default new Client();