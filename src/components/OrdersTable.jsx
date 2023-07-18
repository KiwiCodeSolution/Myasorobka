/* eslint-disable react/prop-types */
import { PropTypes } from "prop-types";
import { format } from "date-fns";
import { ArrowDown } from "../icons/iconComponent";

const btnDown = () => (
  <button className="w-8 h-8 rounded-full bg-bg-white flex justify-center items-center"><ArrowDown /></button>
)
  
const OrdersTable = ({ orders }) => {
  // console.log("date-format", format(new Date("2023-07-17T21:23:05.428Z"), "dd-MM-yyyy"));
  // console.log("new Date:", new Date());
  // console.log("orders_date", orders[0].order_date);
  return (
    <table className="bg-bg-grey text-txt-main-white text-lg table-fixed">
      <tr className="border border-spacing-y-2">
        <th className="w-[40px]">Номер</th>
        <th className="w-[175px]">Дата замовленя</th>
        <th className="w-[168px]">Замовник</th>
        <th className="w-[180px]">Номмер телефону</th>
        <th className="w-[120px]">Сума</th>
        <th className="w-[300px]">Адреса доставки</th>
        <th className="w-[40px]"></th>
      </tr>

      {orders.map(({order_number, order_date, customer_name, phone_number, total_amount, delivery_address}) => (
        <tr key={order_number} className="h-8">
          <td className="text-center p-2">{order_number}</td>
          <td className="text-right p-2">{format(new Date(order_date), "dd-MM-yyyy HH-mm")}</td>
          <td className="text-center p-2">{customer_name}</td>
          <td className="text-right p-2">{phone_number}</td>
          <td className="text-right p-2">{total_amount}</td>
          <td className="text-center p-2">{delivery_address}</td>
          <td className="flex justify-center items-center">{btnDown()}</td>
        </tr>
      ))}
      
    </table>
  )
};
export default OrdersTable;

OrdersTable.propType = {
  orders: PropTypes.array
}