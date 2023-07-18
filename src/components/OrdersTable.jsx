/* eslint-disable react/prop-types */
import { PropTypes } from "prop-types";
import OrderItem from "./OrderItem";

  
const OrdersTable = ({ orders }) => {

  return (
    <div className="text-txt-main-white text-center w-full flex flex-col gap-4">
      <div className="flex text-lg bg-bg-grey">  {/*header*/} 
        <p className="w-[80px]">Номер</p>
        <p className="w-[175px]">Дата замовленя</p>
        <p className="w-[168px]">Замовник</p>
        <p className="w-[180px]">Номмер телефону</p>
        <p className="w-[120px]">Сума</p>
        <p className="w-[240px]">Адреса доставки</p>
        <p className="w-[40px]"></p>
      </div>
      {orders.length && orders.map(order => (
        <div key={order.order_number} className="flex flex-col bg-bg-grey">
          <OrderItem order={order} />
        </div>
      ))}
    </div>
  )
};
export default OrdersTable;

OrdersTable.propType = {
  orders: PropTypes.array
}