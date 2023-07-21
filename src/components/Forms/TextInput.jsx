import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const IS_REQUIRED = "Обов'язкове поле!";

const TextInput = ({ name, label, control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      // required: IS_REQUIRED,
    },
  });

  return (
    <div>
      <label className="flex flex-col">
        <span className="text-base font-medium text-txt-main-white">
          {label}
        </span>
        <div className="relative">
          <input
            {...field}
            autoComplete="off"
            className="w-full h-8 px-4 bg-bg-main outline-none "
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
  control: PropTypes.object,
};

export default TextInput;
