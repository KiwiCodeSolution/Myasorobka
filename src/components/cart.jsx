import * as icons from "../icons/iconComponent";

const Cart = () => {
  return (
    <div className="absolute bottom-[60px] right-[60px]">
      <icons.Cart />
      <p className="absolute bottom-4 right-4 bg-bg-red w-8 h-8 rounded-full text-xl text-center">6</p>
    </div>
  )
}
export default Cart;