import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "swiper/css/grid";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";
import filterStore from "../store/filter";

const AllProductSwiper = observer(() => {
  const filteredProducts =
    filterStore.category === "Всі продукти" || ""
      ? productStore.products
      : productStore.products.filter(
          (product) => product.category === filterStore.category
        );

  return (
    <div className="h-[780px] w-full py-4 px-[120px] relative product z-[1]">
      <>
        <Swiper
          modules={[Navigation, Grid, Pagination]}
          rewind={true}
          slidesPerView={4}
          spaceBetween={30}
          grid={{
            rows: 2,
            fill: "row",
          }}
          pagination={{
            clickable: true,
            el: ".pagination",
          }}
          navigation={{
            nextEl: ".prod-button-next",
            prevEl: ".prod-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            639: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prod-button-next right-[40%] bottom-[-62px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper">
          <icons.Right />
        </button>
        <button className="prod-button-prev left-[40%] bottom-[-62px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper">
          <icons.Left />
        </button>
      </>

      <div className="w-full mt-14">
        <div className="pagination flex justify-center gap-x-4"></div>
      </div>
    </div>
  );
});

export default AllProductSwiper;
