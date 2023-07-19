/* eslint-disable react/prop-types */
import { useState } from "react";
import { format } from "date-fns";
import { ArrowDown } from "../icons/iconComponent";
import OrderItemProductList from "./OrderItemProductList";

const OrderItem = ({order: { order_number, order_date, customer_name, phone_number, total_amount, delivery_address, products }}) => {
  const [orderIsOpened, setOrderIsOpened] = useState(false);
      // console.log("products:", products)
  return (
    <>
      <div className="flex flex-row">
        <p className="w-[80px] text-center p-2">{order_number}</p>
        <p className="w-[175px] text-right p-2">{format(new Date(order_date), "dd-MM-yyyy HH-mm")}</p>
        <p className="w-[168px] text-center p-2">{customer_name}</p>
        <p className="w-[180px] text-right p-2">{phone_number}</p>
        <p className="w-[120px] text-right p-2">{total_amount}</p>
        <p className="w-[240px] text-center p-2">{delivery_address}</p>
        <p className="w-[40px] flex justify-center items-center">
          <button
            className={`w-8 h-8 rounded-full bg-bg-white flex justify-center items-center ${orderIsOpened && "animate-rotate"}`}
            onClick={() => setOrderIsOpened(!orderIsOpened)}>
            <ArrowDown />
          </button>
        </p>
      </div>

      {orderIsOpened && (
        <div className="py-4">
          <div className="flex pl-4 text-base font-normal"> {/*producl list header*/}
            <p className="w-[400px] text-base font-normal text-left">Наіменування</p>
            <p className="w-[120px] text-base font-normal text-center">Кількість</p>
            <p className="w-[120px] text-right">Сума</p>
          </div>
          <OrderItemProductList products={products} />
        </div>
      )}
    </>
  )
};

export default OrderItem;
