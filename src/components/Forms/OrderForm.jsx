// import Proptypes from "prop-types";
import { useForm } from "react-hook-form";
import { toJS } from "mobx";

import orderStore from "../../store/orders";
import ButtonMain from "../UIKit/button";
import TextInput from "./TextInput";

const formFields = [
  { name: "customer_name", label: "Прiзвище та Iм'я" },
  { name: "phone_number", label: "Номер телефону одержувача" },
  { name: "delivery_address", label: "Адреса доставки вiддiлення Нової Пошти" },
];

const initialValues = {
  customer_name: "",
  phone_number: "",
  delivery_address: "",
};

const OrderForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: initialValues,
    mode: "onTouched",
  });

  const onFormSubmit = (fieldValues) => {
    const order = {
      ...fieldValues,
      total_amount: orderStore.totalPrice,
      products: toJS(orderStore.products),
    };

    console.log("order: ", order);
  };

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
                control={control}
              />
            </li>
          ))}
        </ul>
        <ButtonMain style="redLarge" btnType="submit">
          Замовити
        </ButtonMain>
      </form>
    </>
  );
};

OrderForm.propTypes = {};

export default OrderForm;
