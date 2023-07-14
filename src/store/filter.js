import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Filter {
  category = "Всі продукти";

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: "filter", properties: ["category"] });
  }

  setText = (text) => {
    this.category = text;
    // console.log(this.category);
  };
}

export default new Filter();
