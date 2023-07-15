import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "./client";
import { getProducts } from "../API/productsAPI";

class Products {
  products = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "products", properties: ["products"], storage: window.localStorage });
  }

  getProductsAction = async () => {
    clientStore.setIsLoading(true);
    const result = await getProducts();

    runInAction(() => {
      clientStore.setIsLoading(false);
      if (result.error) {
        clientStore.setError(result.error);
        return;
      }
      this.products = result.data;
    })
  }
}
export default new Products();