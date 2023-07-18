import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import adminOrdersStore from "../store/adminOrders";
import adminState from "../store/adminState";
import { RingLoader } from "react-spinners";
import AlertPopup from "../components/UIKit/AlertPopup";
import OrdersTable from "../components/OrdersTable";
const Orders = observer(() => {

  useEffect(() => {
    // console.log("getting orders..");
    adminOrdersStore.getAdminOrdersAction();
    // return () => console.log("unMount admin Orders component")
  }, [])

  return (
    <div className="">
      <h2 className="w-[1080px] mx-auto my-8 text-center text-3xl text-txt-main-white font-medium">Список замовлень</h2>
      {adminState.isLoading ? (
        <div className="flex h-2/4 justify-center items-center">
          <RingLoader color="red" loading size={120} />
        </div>
        ) : (
          <>
          <OrdersTable orders={adminOrdersStore.orders}/>
          {adminState.error &&
            <AlertPopup onOk={() => adminState.setError("")}>
              <h1>{adminState.error}</h1>
            </AlertPopup>}
        </>
      )}
    </div>
  )
});

export default Orders;
