import { makeAutoObservable, runInAction, toJS } from "mobx";
import { makePersistable } from "mobx-persist-store";
import clientStore from "../store/client";
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
    const foundProduct = this.order.products.find(({ product }) => product.name === productToAdd.name);

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

  placeOrderAction = async () => {
    clientStore.setIsLoading(true);
    // временное .. начало
    const order = {
      "customer_name": "Test_name",
      "phone_number": "+123456789",
      "delivery_address": "34 Fullton Street",
      "total_amount": 5555,
      ...toJS(this.order)
    }
    console.log("placingOrder:", order);
    const result = await placeOrder(order);
    //  временное .. стоп

    // const result = await placeOrder(toJS(this.order));

    runInAction(() => {
      clientStore.setIsLoading(false);
      if (result.error) {
        clientStore.setError(result.error);
        return;
      }
      this.order = { products: [] };
      clientStore.setMessage(result.data.order_number)
    })
  }
}
export default new Orders();
