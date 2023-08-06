/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import { useController } from "react-hook-form";

const FileInput = ({ name, control, onInputChange }) => {
  const {
    field: { value, ...field },
    fieldState,
  } = useController({ name, control });

  // DROP ZONE
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDropAccepted: (values) => onInputChange(values[0]),
    onFileDialogCancel: () => onInputChange(""),
    multiple: false,
  });

  // console.log("img error: ", fieldState.error);

  return (
    <>
      <div className="relative w-full flex justify-center">
        <div
          {...getRootProps()}
          className="flex justify-center items-center w-[162px] h-[192px] rounded-md cursor-pointer text-[black] font-bold bg-[pink]"
        >
          {isDragActive ? "drag" : "click"}
        </div>
        <input
          type="file"
          value={""}
          {...field}
          {...getInputProps()}
          className="sr-only"
        />
        {fieldState.error && (
          <p className="absolute bottom-0 translate-y-full text-sm font-bold text-[red]">
            {fieldState.error.message}
          </p>
        )}
      </div>
    </>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FileInput;
