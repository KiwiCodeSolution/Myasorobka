import { makeAutoObservable, runInAction, toJS } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "../store/client";
import meta from "./meta";
// import auth from "./auth";
import { placeOrder } from "../API/ordersAPI";

class Orders {
  order = {
    products: [], // { product, quantity }
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "order",
      properties: ["order"],
      storage: window.localStorage,
    });
  }

  addToCart = (productToAdd, quantity) => {
    const foundProduct = this.order.products.find(
      ({ product }) => product.name === productToAdd.name
    );

    if (foundProduct) {
      console.log("Такой товар уже в корзине");
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
      (acc, { product, quantity }) => acc + product.price * quantity,
      0
    );
  }

  deleteProduct(productName) {
    const productIndex = this.order.products.findIndex(
      ({ product }) => product.name === productName
    );

    if (productIndex === -1) {
      return;
    }

    this.order.products.splice(productIndex, 1);
  }

  changeProductQuantity(productName, newQuantity) {
    const productIndex = this.order.products.findIndex(({ product }) => {
      return product.name === productName;
    });

    if (productIndex === -1) {
      return;
    }

    this.products[productIndex].quantity = newQuantity;
  }

  placeOrderAction = async (customerData) => {
    clientStore.setIsLoading(true);
    const order = {
      ...customerData,
      total_amount: this.totalPrice,
      ...toJS(this.order),
    };

    try {
      const result = await placeOrder(order);
      meta.resetFormFieldValues();
      runInAction(() => {
        this.order = { products: [] };
      });
      clientStore.setMessage(result.data.order_number);
    } catch (err) {
      clientStore.setError(err.message);
      throw new Error(err.message);
    } finally {
      clientStore.setIsLoading(false);
    }
  };

  // placeOrderAction = async (customerData) => {
  //   clientStore.setIsLoading(true);
  //   // временное .. начало
  //   const order = {
  //     ...customerData,
  //     total_amount: this.totalPrice,
  //     ...toJS(this.order),
  //   };
  //   console.log("placingOrder:", order);
  //   const result = await placeOrder(order);
  //   //  временное .. стоп

  //   // const result = await placeOrder(toJS(this.order));

  //   runInAction(() => {
  //     clientStore.setIsLoading(false);
  //     if (result.error) {
  //       clientStore.setError(result.error);
  //       return;
  //     }
  //     this.order = { products: [] };
  //     clientStore.setMessage(result.data.order_number);
  //   });
  // };
}
export default new Orders();
