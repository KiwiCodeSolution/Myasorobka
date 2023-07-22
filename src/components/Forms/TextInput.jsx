import PropTypes from "prop-types";
import { useController } from "react-hook-form";

import metaStore from "../../store/meta";

const IS_REQUIRED = "Обов'язкове поле!";

const TextInput = ({ name, label, placeholder, control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: IS_REQUIRED,
    },
  });

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    field.onChange(e);
    metaStore.setOrderFormField(name, value);
  };

  return (
    <div>
      <label className="flex flex-col">
        <span className="text-base font-medium text-txt-main-white">
          {label}
        </span>
        <div className="relative">
          <input
            {...{ ...field, onChange }}
            placeholder={placeholder}
            autoComplete="off"
            className="w-full h-8 px-4 text-base font-normal bg-bg-main outline-none  placeholder:text-bg-grey"
          />
          {error && (
            <p className="absolute text-xs font-bold text-[red]">
              {error.message}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.object,
};

export default TextInput;
