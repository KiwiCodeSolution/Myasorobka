import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import IncDecBtn from "./buttons/IncDecBtn";

const COUNTER_STYLES = {
  s: "h-8 text-base font-medium",
  m: "h-12 text-2xl font-bold",
};

const CONTAINER_STYLES = {
  s: "gap-x-2",
  m: "gap-x-4",
};

const Counter = ({ initialValue, onChange, size, outlinedControls }) => {
  const [count, setCount] = useState(initialValue);

  // const [count, setCount] = useState(() => {
  //   const parsedValue = parseInt(initialValue);
  //   return isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue;
  // });

  const onInputChange = ({ currentTarget: { value } }) => {
    const parsedValue = Number(value);
    return setCount(() => (isNaN(parsedValue) ? 0 : parsedValue));
  };

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div className={`w-fit flex items-center ${CONTAINER_STYLES[size]}`}>
      <IncDecBtn
        size={size}
        type="dec"
        outlined={outlinedControls}
        onClick={() =>
          setCount((prevState) => {
            if (prevState < 1) {
              return 0;
            }

            return prevState - 1;
          })
        }
      />
      <input
        type="text"
        maxLength={7}
        size={3}
        value={count}
        onChange={onInputChange}
        className={`bg-transparent ${COUNTER_STYLES[size]} font-bold rounded-lg border border-transparent focus:border-white placeholder: text-center focus: outline-none`}
      />
      <IncDecBtn
        size={size}
        type="inc"
        outlined={outlinedControls}
        onClick={() => setCount((prevState) => prevState + 1)}
      />
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
  onChange: PropTypes.func.isRequired, //recieve one parametr(changed value)
  size: PropTypes.oneOf(["s", "m"]).isRequired, //s-small, m-medium
  outlinedControls: PropTypes.bool,
};

export default Counter;
