import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';
import productStore from "../../store/products";
import ButtonMain from '../UIKit/button';
import { baseServerURL } from '../../config/url';

const AddProductForm = observer(({ closePopup }) => {
  const {
    editProduct,
    products,
    uploadedImages,
    createProductAction,
    updateProductAction,
    unsetSelectedImageIdx,
    unsetUploadedImages
  } = productStore;

  const defaultValues = {
    name: editProduct?.name || "",
    category:editProduct?.category || "",
    price: editProduct?.price || "",
    unit: editProduct?.unit || "",
    info:  editProduct?.discount_price || "",
    description: editProduct?.description || "",
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

  const categories = ["+ додати нову категорію +"]
  toJS(products).forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  const onSubmit = async data => {
    // console.log("data:", data);
    const newProduct = {
      ...data,
      price: Number(data.price),
      discount_price: data.info,
      available: true,
      favourite: false,
      img: uploadedImages.at(-1) ?
        (baseServerURL + uploadedImages.at(-1)) :
        (editProduct?.img || ""),
      archived: false
    }
    console.log("newProduct:", newProduct);
    
    let result;
    if (editProduct) {
      result = await updateProductAction({ _id: toJS(editProduct)._id, ...newProduct });
    } else {
      result = await createProductAction(newProduct);
    }
    
    console.log("submit result:", result);
    if (result) {
      unsetUploadedImages();
      unsetSelectedImageIdx();
      closePopup();
    }
  }

  return (
    <form className="flex flex-col text-txt-main-white pt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-4'>
        <label htmlFor='name'>Назва товару</label>
        <input
          type="text"
          className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"}`}
          placeholder="Приклад: Підгорок мраморний"
          {...register("name", { required: true })} />
        <p className='text-bg-orange txt-lg font-semibold'>{errors.name?.message}</p>
      </div>

      <label htmlFor='category'>Виберіть або придумайте категорію</label>
      <div className='flex justify-between mb-4'>
        <select {...register("selectCategory")} className="bg-bg-main w-[282px] text-center">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        {watch("selectCategory")?.includes("+") ?
          (
            <>
              <input
                type="text"
                className={`p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"} w-[282px]`}
                placeholder="Назвіть категорію"
                {...register("category", { required: true })} />
              <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.category?.message}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                className={`p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"} ml-1 w-[282px]`}
                placeholder="Назвіть категорію"
                value={watch("selectCategory")}
                {...register("category", { required: true })} />
              <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.category?.message}</p>
            </>
          )
        }
      </div>

      <div className='flex gap-4'>
        <div>
          <label htmlFor='price'>Ціна та одиниця виміру</label>
          <div className='flex gap-2'>
            <input
              type="text"
              className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[128px]`}
              placeholder="100"
              {...register("price", { required: true })} />
            <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.price?.message}</p>

            <input
              type="text"
              className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[128px]`}
              placeholder="шматок"
              {...register("unit", { required: true })} />
            <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.unit?.message}</p>
          </div>
        </div>
        <div>
          <label htmlFor='info'>Доп інфо</label>
            <input
              type="text"
              className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[282px]`}
              placeholder="100"
              {...register("info", { required: false })} />
            <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.price?.message}</p>
        </div>
      </div>

      <label htmlFor='description'>Придумайте опис</label>
      <textarea {...register("description")} className="bg-bg-main mb-4"></textarea>

        <ButtonMain style="redLarge" btnType="submit">
          {editProduct? "Редагувати" : "Додати"}
        </ButtonMain>
      {/* <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full" /> */}
    </form>
  )
// };
});
export default AddProductForm;
