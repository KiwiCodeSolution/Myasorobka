import * as icons from "../icons/iconComponent";
import { observer } from "mobx-react-lite";
import ordersStore from "../store/orders";

const Cart = observer(() => {
  // console.log(orders.order.products.length)

  return (
    <div className="absolute bottom-[60px] right-[60px]">
      <icons.Cart />
      <p className="absolute bottom-4 right-4 bg-bg-red w-8 h-8 py-[2px] rounded-full text-xl text-center">{ordersStore.order.products.length}</p>
    </div>
  )
})

export default Cart;
