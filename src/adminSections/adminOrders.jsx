import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import adminOrdersStore from "../store/adminOrders";

const Orders = observer(() => {

  useEffect(() => {
    console.log("getting orders..");
    adminOrdersStore.getAdminOrdersAction();
    return () => console.log("unMount admin Orders component")
  }, [])

  return (
    <h2 className="mx-auto mt-8 text-3xl text-txt-main-white font-medium">Список замовлень</h2>
  )
});

export default Orders;
