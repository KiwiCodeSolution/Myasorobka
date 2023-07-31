import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';
import productStore from "../../store/products";
import ButtonMain from '../UIKit/button';

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
      price: data.price,
      discount_price: data.info,
      available: true,
      favourite: false,
      img: editProduct?.img || "", // оставляем старую картинку
      archived: false
    }
    // console.log("newProduct:", newProduct);
    const formData = new FormData();
    formData.append("product", JSON.stringify(newProduct));
    formData.append("image", uploadedImages.image);

    let result;
    if (editProduct) {
      // result = await updateProductAction({ _id: toJS(editProduct)._id, ...newProduct });
      result = await updateProductAction({ id: toJS(editProduct)._id, formData });
    } else {
      // result = await createProductAction(newProduct);
      result = await createProductAction(formData);
    }
    console.log("result:", result);
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
          {...register("name", { required: "Це поле обов`язкове", maxLength: 20 })} />
        {errors.name?.type === 'maxLength' && <p className='text-bg-orange txt-lg font-semibold'>максимально 20 букв</p>}
        <p className='text-bg-orange font-semibold'>{errors.name?.message}</p>
      </div>

      <label htmlFor='category'>Виберіть або придумайте категорію</label>
      <div className='flex justify-between'>
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
                {...register("category", { required: "Це поле обов`язкове" })} />
            </>
          ) : (
            <>
              <input
                type="text"
                className={`p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"} ml-1 w-[282px]`}
                placeholder="Назвіть категорію"
                value={watch("selectCategory")}
                {...register("category", { required: "Це поле обов`язкове", maxLength: 20 })} />
            </>
          )
        }
      </div>
      {errors.category?.type === 'maxLength' && <p className='text-bg-orange font-semibold ml-[294px]'>максимально 15 букв</p>}
      <p className='text-bg-orange font-semibold ml-[294px] mb-4'>{errors.category?.message}</p>

      <div className='flex gap-4'>
        <div>
          <label htmlFor='price'>Ціна та одиниця виміру</label>
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <input
                type="number"
                className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[128px]`}
                placeholder="100"
                {...register("price", { required: "Обов`язкове" })} />
              <p className='text-bg-orange font-semibold mb-4'>{errors.price?.message}</p>
            </div>

            <div className='flex flex-col'>
              <input
                type="text"
                className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[128px]`}
                placeholder="шматок"
                {...register("unit", { required: "Обов`язкове" })} />
              <p className='text-bg-orange font-semibold mb-4'>{errors.unit?.message}</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor='info'>Доп інфо</label>
            <input
              type="text"
              className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"} w-[282px]`}
              placeholder="100"
              {...register("info", { required: false })} />
            <p className='text-bg-orange txt-lg font-semibold'>{errors.info?.message}</p>
        </div>
      </div>

      <label htmlFor='description'>Придумайте опис</label>
      <textarea {...register("description")} className="bg-bg-main mb-4"></textarea>

        <ButtonMain style="redLarge" btnType="submit">
          {editProduct? "Редагувати" : "Додати"}
        </ButtonMain>
    </form>
  )
// };
});
export default AddProductForm;
