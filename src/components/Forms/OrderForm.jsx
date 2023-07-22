import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import orderStore from "../../store/orders";

import CompleteOrderPopup from "../popups/CompleteOrderPopup";
import AlertPopup from "../UIKit/AlertPopup";
import ButtonMain from "../UIKit/button";
import TextInput from "./TextInput";
import metaStore from "../../store/meta";

const formFields = [
  {
    name: "customer_name",
    label: "Прiзвище та Iм'я",
    placeholder: "приклад: Гайденко Тарас Бульбович",
  },
  {
    name: "phone_number",
    label: "Номер телефону одержувача",
    placeholder: "приклад: +38066-135-12-24",
  },
  {
    name: "delivery_address",
    label: "Адреса доставки вiддiлення Нової Пошти",
    placeholder:
      "приклад: м. Харків вул.Пушкінська 79б відділення нової почти №135",
  },
];

const resetValues = {
  customer_name: "",
  phone_number: "",
  delivery_address: "",
};

const OrderForm = observer(() => {
  const { handleSubmit, control, getValues, reset } = useForm({
    defaultValues: metaStore._orderFormFieldValues,
  });

  const onFormSubmit = async (fieldValues) => {
    await orderStore.placeOrderAction(fieldValues);
    if (orderStore.error) {
      return;
    }

    reset(resetValues);
  };

  const onOrderComplete = () => {
    orderStore.setOrderNumber(null);
    metaStore.toggleOrderPopupShown();
  };

  useEffect(() => {
    return () => {
      metaStore.orderFormFieldValues = getValues();
    };
  }, [getValues]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full flex flex-col gap-y-8"
      >
        <ul className="flex flex-col gap-y-4 text-txt-main-white">
          {formFields.map((field) => (
            <li key={field.name} className="">
              <TextInput
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                control={control}
              />
            </li>
          ))}
        </ul>
        <ButtonMain style="redLarge" btnType="submit">
          {orderStore.isOrderProcessing ? "В обробцi..." : "Замовити"}
        </ButtonMain>
      </form>
      {orderStore.order_number && (
        <CompleteOrderPopup
          orderNumber={orderStore.order_number}
          onComplete={onOrderComplete}
        />
      )}
      {orderStore.error && (
        <AlertPopup onOk={() => orderStore.setError(null)}>
          <h1 className="text-2xl">{orderStore.error}</h1>
        </AlertPopup>
      )}
    </>
  );
});

export default OrderForm;
