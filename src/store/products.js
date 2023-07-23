import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "./client";
import adminState from "./adminState";
import { getProducts, createProduct, updateProduct } from "../API/productsAPI";

class Products {
  products = [];
  editProduct = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "products", properties: ["products", "editProduct"], storage: window.localStorage });
  }

  setEditProduct = product => this.editProduct = product;
  unsetEditProduct = () => this.editProduct = null;

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
    adminState.setIsLoading(true);
    const result = await createProduct(product);

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
    })
    this.getProductsAction();
    adminState.setMessage("Продукт додан успішно")
    return;
  }

  updateProductAction = async (product) => {
    adminState.setIsLoading(true);
    const result = await updateProduct(product);

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
    })
    this.getProductsAction();
    adminState.setMessage("Продукт змінен успішно")
    return true;
  }
}
export default new Products();