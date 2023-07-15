import PropTypes from "prop-types";

import AlertPopup from "../UIKit/AlertPopup";

const CompleteOrderPopup = ({ onOk }) => {
  return (
    <AlertPopup onOk={onOk}>
      <div className="w-full h-full flex flex-col items-center justify-end">
        <p className="text-3xl font-medium">Дякуемо!</p>
        <p className="mt-4 text-2xl font-medium">Ваше замовлення прийнято!</p>
        <p className="text-2xl font-medium">
          Очiкуйте двiнок вiд нашого менеджера.
        </p>
      </div>
    </AlertPopup>
  );
};

CompleteOrderPopup.propTypes = {
  onOk: PropTypes.func.isRequired,
};

export default CompleteOrderPopup;
