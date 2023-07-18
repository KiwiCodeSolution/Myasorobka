import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { getOrders } from "../API/ordersAPI";
import adminState from "./adminState";

class AdminOrders {

  orders = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "adminOrders",
      properties: ["orders"],
      storage: window.localStorage,
    })
  }

  getAdminOrdersAction = async() => {
    adminState.setIsLoading(true);
    const result = await getOrders();

    runInAction(() => {
      adminState.setIsLoading(false);
      if (result.error) {
        adminState.setError(result.error);
        return;
      }
      this.orders = result.data;
    })
  }
}

export default new AdminOrders();
