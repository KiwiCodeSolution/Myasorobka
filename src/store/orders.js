import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
// import auth from "./auth";
// import { placeOrder } from "../API/ordersAPI";

class Orders {
  order = {
    products: [], // { product, quantity }
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "orders",
      properties: ["order"],
      storage: window.localStorage,
    });
  }

  addToCart = (productToAdd, quantity) => {
    const foundProduct = this.order.products.find(({ product }) => {
      return product.product.name === productToAdd.product.name;
    });

    if (foundProduct) {
      // this.changeProductQuantity(
      //   productToAdd.product.name,
      //   quantity + foundProduct.quantity
      // );
      return;
    }

    this.order.products.push({ product: productToAdd, quantity });
  };

  get products() {
    return this.order.products;
  }

  get totalQuantity() {
    return this.order.products.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
  }

  get totalPrice() {
    return this.order.products.reduce(
      (acc, { product, quantity }) => acc + product.product.price * quantity,
      0
    );
  }

  deleteProduct(productName) {
    const productIndex = this.order.products.findIndex(
      ({ product }) => product.product.name === productName
    );

    if (productIndex === -1) {
      return;
    }

    this.order.products.splice(productIndex, 1);
  }

  changeProductQuantity(productName, newQuantity) {
    const productIndex = this.order.products.findIndex(({ product }) => {
      return product.product.name === productName;
    });

    if (productIndex === -1) {
      return;
    }

    this.products[productIndex].quantity = newQuantity;
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
