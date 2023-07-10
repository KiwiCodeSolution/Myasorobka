import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import auth from "./auth";
import { getProducts } from "../API/productsAPI";

class Products {
  products = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "products", properties: ["products"], storage: window.localStorage });
  }

  getProductsAction = async () => {
    auth.setIsLoading(true);
    const result = await getProducts();

    runInAction(() => {
      auth.setIsLoading(false);
      if (result.error) {
        auth.setError = result.error;
        return;
      }
      this.products = result.data;
    })
  }
}
export default new Products();