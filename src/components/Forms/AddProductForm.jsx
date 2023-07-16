import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';
import productStore from "../../store/products";

const AddProductForm = observer(() => {
// const AddProductForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // const categories = ["Птиця", "свинина", "телятина", "ковбаса"];
  const { products } = productStore;

  const categories = [" + "]
  toJS(products).forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });
  // console.log("touched:", touchedFields);
  // console.log("watched:", watch("selectCategory"));

  const onSubmit = data => console.log("data:", data);

  return (
    <form className="flex flex-col justify-center text-txt-main-white pt-5" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='productName'>Назва товару</label>
      <input
        type="text"
        className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"}`}
        placeholder="Приклад: Підгорок мраморний"
        {...register("productName", { required: true })} />
      <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.productName?.message}</p>

      <label htmlFor='category'>Виберіть або придумайте категорію</label>
      <div className='flex gap-3'>
        <select {...register("selectCategory")} className="bg-bg-main w-[282px]">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        {watch("selectCategory") === " + " ?
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
                className={`p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"} w-[282px]`}
                placeholder="Назвіть категорію"
                value={watch("selectCategory")}
                {...register("category", { required: true })} />
              <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.category?.message}</p>
            </>
          )
        }
      </div>

      <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full" />
    </form>
  )
// };
});
export default AddProductForm;
