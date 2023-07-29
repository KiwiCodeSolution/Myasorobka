// import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { PlusInCircle } from "../icons/iconComponent";
import ProductStore from "../store/products";
import { observer } from "mobx-react-lite";
import { baseServerURL } from "../config/url";

const Dropzone = observer(() => {
  const { uploadedImages, setUploadedImages } = ProductStore;

  const handleDrop = async (acceptedFiles, productName) => {
    try {
      const formData = new FormData();
      acceptedFiles.forEach(file => formData.append("image", file));
      const url = `${baseServerURL}uploads?productName=${encodeURIComponent(
        productName
      )}`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Server response:", response.data);
      const newUploadedImages = [...uploadedImages, response.data.img_url];
      setUploadedImages(newUploadedImages);
      // localStorage.setItem("uploadedImages", JSON.stringify(newUploadedImages));
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });
  
  return (
    <div
      {...getRootProps()}
      className="bg-bg-white w-[162px] h-[192px] rounded-3xl py-4"
    >
      <input {...getInputProps()} />
      <div className="py-4 flex justify-center">
        <PlusInCircle />
      </div>
      <p className="text-center text-xl">Додати зображення</p>
    </div>
  );
});

export default Dropzone;
