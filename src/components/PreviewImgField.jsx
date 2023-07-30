import { observer } from "mobx-react-lite";
import productStore from "../store/products";

const PreviewImgField = observer(() => {
  const { uploadedImages: {url} } = productStore;
  // console.log("uploadedImages:", toJS(url));

  return ([1].length !== 0) &&
    <img
      src={url}
      // src={imgUrl.at(-1)}
      alt="preview image"
      className={"border border-txt-main-white text-txt-main-white text-center w-[162px] h-[192px] object-contain rounded-3xl"} />
})

export default PreviewImgField;
