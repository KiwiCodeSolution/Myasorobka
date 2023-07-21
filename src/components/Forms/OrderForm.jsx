// import Proptypes from "prop-types";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import orderStore from "../../store/orders";
import client from "../../store/client";
import { useEffect } from "react";

import ButtonMain from "../UIKit/button";
import TextInput from "./TextInput";
import meta from "../../store/meta";

const formFields = [
  { name: "customer_name", label: "Прiзвище та Iм'я" },
  { name: "phone_number", label: "Номер телефону одержувача" },
  { name: "delivery_address", label: "Адреса доставки вiддiлення Нової Пошти" },
];

const OrderForm = observer(() => {
  const { handleSubmit, control, getValues, reset } = useForm({
    defaultValues: meta.orderFormFieldValues,
    mode: "onTouched",
  });

  const onFormSubmit = (fieldValues) => {
    orderStore
      .placeOrderAction(fieldValues)
      .then(() => {
        reset();
      })
      .catch(() => {});
  };

  useEffect(() => {
    return () => {
      meta.orderFormFieldValues = getValues();
    };
  }, [getValues]);

  return (
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
              control={control}
            />
          </li>
        ))}
      </ul>
      <ButtonMain style="redLarge" btnType="submit">
        {client.isLoading ? "В обробцi..." : "Замовити"}
      </ButtonMain>
    </form>
  );
});

OrderForm.propTypes = {};

export default OrderForm;
