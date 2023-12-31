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
    <div className="h-[780px] w-full py-4 relative product mx-auto">
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
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            639: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div className="w-full mt-8 relative mx-auto flex justify-center items-center">
        <button className="prod-button-prev w-[52px] h-[52px] p-4 bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper z-[32]">
          <icons.Left />
        </button>
        <div className="pagination flex justify-center gap-x-4 w-[200px] h-full "></div>
        <button className="prod-button-next w-[52px] h-[52px] p-4 bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper z-[32]">
          <icons.Right />
        </button>
      </div>
    </div>
  );
});

export default AllProductSwiper;
