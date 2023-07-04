import { makeAutoObservable } from "mobx";

class Counter {
  count = 3

  constructor () {
    makeAutoObservable(this)
  }

  inc() {
    this.count += 1
  }
  setCounter(arg) {
    this.count += arg
  }
}

export default new Counter;