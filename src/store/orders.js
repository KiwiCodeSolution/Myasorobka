import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
// import auth from "./auth";
// import { placeOrder } from "../API/ordersAPI";

class Orders {
  order = {
    products: [] // { product, quantity }
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "orders", properties: ["order"], storage: window.localStorage });
  }

  addToCart = (product, quantity) => {
    this.order.products.push({ product, quantity });
    console.dir("order:", this.order);
  }
  // getProductsAction = async () => {
  //   auth.setIsLoading(true);
  //   const result = await getProducts();

  //   runInAction(() => {
  //     auth.setIsLoading(false);
  //     if (result.error) {
  //       auth.setError = result.error;
  //       return;
  //     }
  //     this.products = result.data;
  //   })
  // }
}
export default new Orders();