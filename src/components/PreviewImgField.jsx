import { observer } from "mobx-react-lite";
import productStore from "../store/products";
import { baseServerURL } from "../config/url";

const PreviewImgField = observer(() => {
  const { uploadedImages: imgUrl } = productStore;
  // console.log("url request:",`${baseServerURL}${imgUrl[0]}`)
  return (imgUrl.length !== 0) &&
    <img src={`${baseServerURL}${imgUrl.at(-1)}`} alt="preview image" className={"border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-contain rounded-3xl"}/>
})

export default PreviewImgField;
