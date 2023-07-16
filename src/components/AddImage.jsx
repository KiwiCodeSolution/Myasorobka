import { PlusInCircle } from "../icons/iconComponent";

const AddImage = () => {
  return (
    <div className="bg-bg-white w-[162px] h-[192px] rounded-3xl py-4">
      <div className="py-4 flex justify-center">
        <PlusInCircle />
      </div>
      <p className="text-center text-xl">Додати зображення</p>
    </div>
  )
}
export default AddImage;
