import BasePopup from "../UIKit/BasePopup";
import ButtonMain from "../UIKit/button";
import CartProductList from "../CartProductList";

const CartPopup = () => {
  return (
    <BasePopup
      title="Кошик"
      closeByPressEsc
      closeByClickOnOverlay
      onClose={() => console.log("cart popup was closeds")}
      onPrevBtnClick={() => console.log("return to preview stage")}
    >
      <div className="flex flex-col  items-center text-txt-main-white">
        <CartProductList />

        <ButtonMain style="redLarge">Перейти до замовлення</ButtonMain>
        <p className="mt-4 text-white text-sm">
          * Товар ваговий. Вказано середню вагу упаковки продукту. Можливе
          відхилення у більшу чи меншу сторону. Про точну суму та вагу ми
          повідомимо вам напередодні доставки після збирання продукції на нашому
          складі.
        </p>
      </div>
    </BasePopup>
  );
};

export default CartPopup;
