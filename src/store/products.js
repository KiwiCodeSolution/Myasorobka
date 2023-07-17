import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "./client";
import authStore from "./auth";
import { getProducts, createProduct } from "../API/productsAPI";

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
  createProductAction = async (product) => {
    authStore.setIsLoading(true);
    const result = await createProduct(product);

    runInAction(() => {
      authStore.setIsLoading(false);
      if (result.error) {
        authStore.setError(result.error);
        return;
      }
    })
    this.getProductsAction();
    // authStore.setMessage("Продукт додан успішно")
    return "success";
  }
}
export default new Products();