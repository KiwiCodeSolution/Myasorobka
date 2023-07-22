import { makeAutoObservable, toJS } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Meta {
  _orderFormFieldValues = {
    customer_name: "",
    phone_number: "",
    delivery_address: "",
  };

  _isOrderPopupShown = false;
  _isCartPopupShown = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "meta",
      properties: [
        "_orderFormFieldValues",
        "_isOrderPopupShown",
        "_isCartPopupShown",
      ],
      storage: window.localStorage,
    });
  }

  resetFormFieldValues() {
    this._orderFormFieldValues = {
      customer_name: "",
      phone_number: "",
      delivery_address: "",
    };
  }

  toggleOrderPopupShown() {
    this._isOrderPopupShown = !this._isOrderPopupShown;
  }

  toggleCartPopupShown() {
    this._isCartPopupShown = !this._isCartPopupShown;
  }

  get orderFormFieldValues() {
    return toJS(this._orderFormFieldValues);
  }

  set orderFormFieldValues(updatedFormValues) {
    this._orderFormFieldValues = updatedFormValues;
  }
}

export default new Meta();
