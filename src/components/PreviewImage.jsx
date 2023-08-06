/* eslint-disable react/prop-types */
import { useState } from "react";

const PreviewImage = ({ image, onDelete }) => {
  const [preview, setPreview] = useState("");
  const isBlob = typeof image === "object";
  if (isBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => setPreview(reader.result);
  }

  return image ? (
    <div className="relative">
      <button
        type="button"
        onClick={onDelete}
        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[tomato]"
      >
        x
      </button>
      <img
        src={isBlob ? preview : image}
        alt="preview image"
        className={
          "border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-cover rounded-3xl"
        }
      />
    </div>
  ) : null;
};

export default PreviewImage;
