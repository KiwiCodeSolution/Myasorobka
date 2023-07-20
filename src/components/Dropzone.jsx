import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const DropzoneExample = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("uploadedImages"));
    if (Array.isArray(storedData)) {
      setUploadedImages(storedData);
    }
  }, []);
  const handleDrop = async (acceptedFiles, productName) => {
    try {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("image", file);
      });
      const url = `http://localhost:5000/upload?productName=${encodeURIComponent(
        productName
      )}`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Images uploaded successfully");
      console.log("Server response:", response.data);
      const newUploadedImages = [...uploadedImages, response.data.image_url];
      setUploadedImages(newUploadedImages);
      localStorage.setItem("uploadedImages", JSON.stringify(newUploadedImages));
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });
  return (
    <div
      {...getRootProps()}
      style={{
        width: "100px",
        height: "150px",
        border: "2px dashed #ddd",
        padding: "10px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <p>Перетащите изображения сюда или кликните для выбора файлов.</p>
    </div>
  );
};

export default DropzoneExample;
