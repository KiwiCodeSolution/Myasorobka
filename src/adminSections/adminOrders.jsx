import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import adminOrdersStore from "../store/adminOrders";
import adminState from "../store/adminState";
import { RingLoader } from "react-spinners";
import AlertPopup from "../components/UIKit/AlertPopup";
import OrdersTable from "../components/OrdersTable";
import ButtonMain from "../components/UIKit/button";
import * as icons from "../icons/iconComponent";
const Orders = observer(() => {
  useEffect(() => {
    // console.log("getting orders..");
    adminOrdersStore.getAdminOrdersAction();
    // return () => console.log("unMount admin Orders component")
  }, []);

  return (
    <div className="">
      <div className="w-[1080px] flex items-center">
        <div className="w-[240px]"></div>
        <h2 className="my-8 text-center text-3xl text-txt-main-white font-medium mx-auto mr-[77px]">
          Список замовлень
        </h2>
        <ButtonMain
          style={"blackMedium"}
          icon={<icons.Trash />}
          btnClass={"flex flex-row-reverse justify-center gap-x-2 items-center"}
        >
          Архів замовлень
        </ButtonMain>
      </div>
      {adminState.isLoading ? (
        <div className="flex h-2/4 justify-center items-center">
          <RingLoader color="red" loading size={120} />
        </div>
      ) : (
        <>
          <OrdersTable orders={adminOrdersStore.orders} />
          {adminState.error && (
            <AlertPopup onOk={() => adminState.setError("")}>
              <h1>{adminState.error}</h1>
            </AlertPopup>
          )}
        </>
      )}
    </div>
  );
});

export default Orders;
