const OrderItemProductList = ({ products }) => (
  products.map((prod, idx) => (
    <li className="flex pl-4" key={prod.product.name}>
      <p>{idx}) </p>
      <p className="w-[400px] text-left pl-2">{prod.product.name}</p>
      <p className="w-[120px] text-center">{prod.quantity}</p>
      <p className="w-[120px] text-right">{prod.quantity * prod.product.price}</p>
    </li>
  ))
)

export default OrderItemProductList;
