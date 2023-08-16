/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { yupResolver } from "@hookform/resolvers/yup";
import { toJS } from "mobx";

import addProductSchema from "../../validationSchemas/addProductSchema";
import productStore from "../../store/products";
import ButtonMain from "../UIKit/button";
import FileInput from "./FileInput";
import PreviewImage from "../PreviewImage";

const MAX_IMAGES_NUM = 8;
const NEW_CATEGORY = "+ додати нову категорію +";
const commonInputStyle =
  "h-8 px-4 text-base font-normal bg-bg-main outline-none border border-transparent focus:border-b-txt-main-yellow transition-all duration-250";

const AddProductForm = observer(({ closePopup }) => {
  const { editProduct, products, createProductAction, updateProductAction } =
    productStore;

  const defaultValues = {
    images: editProduct?.images || [],
    name: editProduct?.name || "",
    category: editProduct?.category || "",
    price: editProduct?.price || "",
    unit: editProduct?.unit || "",
    info: editProduct?.discount_price || "",
    description: editProduct?.description || "",
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(addProductSchema),
    mode: "all",
  });

  const categories = [NEW_CATEGORY];

  toJS(products).forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  // EVENT HANDLERS

  const onSubmit = async ({ selectCategory, ...data }) => {
    console.log("data: ", data);
    const newProduct = {
      ...data,
      price: data.price,
      discount_price: data.info,
      available: true,
      favourite: false,
      archived: false,
    };

    console.log("newProduct: ", newProduct);

    let result;
    if (editProduct) {
      result = await updateProductAction(editProduct._id, newProduct);
    } else {
      result = await createProductAction(newProduct);
    }
    if (result) {
      closePopup();
    }
  };

  const onSelect = ({ currentTarget: { value } }) => {
    const newValue = value === NEW_CATEGORY ? "" : value;
    setValue("category", newValue);
  };

  const onFileInputChange = (files) =>
    setValue("images", [...images, ...files], { shouldValidate: true });

  const onFileValidationError = (errorMsg) => {
    setError("images", {
      type: "FileValidationError",
      message: errorMsg,
    });
  };

  // /EVENT HANDLERS

  const { images, selectCategory } = watch();
  const isAddingFilesRefuse = images.length >= MAX_IMAGES_NUM;
  const imageList = [];

  for (let i = 0; i < MAX_IMAGES_NUM; i++) {
    imageList.push(
      <div key={i}>
        {images[i] ? (
          <PreviewImage
            image={images[i]}
            onDelete={() => {
              const newImages = images.filter((image) => image !== images[i]);
              setValue("images", newImages, { shouldValidate: true });
            }}
          />
        ) : (
          <div className="w-[88px] h-[88px] flex justify-center items-center rounded-3xl bg-bg-white">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-bg-black text-xl font-bold text-txt-main-white">
              {i + 1}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      className="flex flex-col text-txt-main-white pt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col mb-4">
        <div className="w-full flex gap-x-4 mb-8">
          <FileInput
            name="images"
            control={control}
            disabled={isAddingFilesRefuse}
            maxFiles={MAX_IMAGES_NUM - images.length}
            onInputChange={onFileInputChange}
            onValidationError={onFileValidationError}
          />
          <div className="flex flex-wrap gap-4">{imageList}</div>
        </div>

        {/* ----------------------------------------------- */}

        <label htmlFor="name">Назва товару</label>
        <input
          type="text"
          autoComplete="off"
          className={`${commonInputStyle} ${
            errors.username ? "bg-bg-orange" : "bg-bg-main"
          }`}
          placeholder="Приклад: Підгорок мраморний"
          {...register("name")}
        />
        {errors.name?.type === "maxLength" && (
          <p className="text-bg-orange txt-lg font-semibold">
            максимально 20 букв
          </p>
        )}
        <p className="text-bg-orange font-semibold">{errors.name?.message}</p>
      </div>

      {/* -------------------------------------------------------- */}

      <label htmlFor="category">Виберіть або придумайте категорію</label>
      <div className="flex justify-between">
        <select
          {...register("selectCategory", {
            onChange: onSelect,
          })}
          className={`${commonInputStyle} w-[282px] text-center`}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          autoComplete="off"
          disabled={selectCategory !== NEW_CATEGORY}
          className={`${commonInputStyle} ${
            errors.password ? "bg-bg-orange" : "bg-bg-main"
          } w-[282px]`}
          placeholder="Назвіть категорію"
          {...register("category")}
        />
      </div>

      {errors.category?.type === "maxLength" && (
        <p className="text-bg-orange font-semibold ml-[294px]">
          максимально 15 букв
        </p>
      )}
      <p className="text-bg-orange font-semibold ml-[294px] mb-4">
        {errors.category?.message}
      </p>

      {/* ------------------------------------------------- */}

      <div className="flex gap-x-4">
        <div>
          <label htmlFor="price">Ціна та одиниця виміру</label>
          <div className="flex gap-x-3">
            <div className="flex flex-col">
              <input
                type="number"
                autoComplete="off"
                min={0}
                className={`${commonInputStyle} ${
                  errors.username ? "bg-bg-orange" : "bg-bg-main"
                } w-[128px]`}
                placeholder="100"
                {...register("price")}
              />
              <p className="text-bg-orange font-semibold mb-4">
                {errors.price?.message}
              </p>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                autoComplete="off"
                className={`${commonInputStyle} ${
                  errors.username ? "bg-bg-orange" : "bg-bg-main"
                } w-[128px]`}
                placeholder="шматок"
                {...register("unit")}
              />
              <p className="text-bg-orange font-semibold mb-4">
                {errors.unit?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[282px] flex flex-col ml-auto">
          <label htmlFor="info">Доп інфо</label>
          <input
            type="text"
            autoComplete="off"
            className={`${commonInputStyle} ${
              errors.username ? "bg-bg-orange" : "bg-bg-main"
            } `}
            placeholder="100"
            {...register("info")}
          />
          <p className="text-bg-orange txt-lg font-semibold">
            {errors.info?.message}
          </p>
        </div>
      </div>

      {/* ---------------------------------------------- */}

      <label htmlFor="description">Придумайте опис</label>
      <textarea
        autoComplete="off"
        {...register("description")}
        className="bg-bg-main px-4 mb-4 resize-none overflow-auto outline-none border border-transparent 
        focus:border-b-txt-main-yellow transition-all duration-250"
      ></textarea>

      <ButtonMain style="redLarge" btnType="submit">
        {editProduct ? "Редагувати" : "Додати"}
      </ButtonMain>
    </form>
  );
  // };
});
export default AddProductForm;
