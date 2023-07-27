import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "swiper/css/grid";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";

const AdminProductsSwiper = observer(() => {
  return (
    <div className="relative admin-product mx-auto">
      <>
        <Swiper
          modules={[Navigation, Grid, Pagination]}
          rewind={true}
          pagination={{
            clickable: true,
            el: ".admin-pagination",
          }}
          navigation={{
            nextEl: ".admin-prod-button-next",
            prevEl: ".admin-prod-button-prev",
          }}
          breakpoints={{
            1400: {
              slidesPerView: 6,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
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
          {productStore.products.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      <div className="w-full mt-8 relative mx-auto flex justify-center items-center">
        <button className="admin-prod-button-prev w-[52px] h-[52px] p-4 bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper z-[32]">
          <icons.Left />
        </button>
        <div className="admin-pagination flex justify-center gap-x-4 w-[200px] h-full "></div>
        <button className="admin-prod-button-next w-[52px] h-[52px] p-4 bg-bg-white rounded-full hover:shadow-swiper focus:shadow-swiper z-[32]">
          <icons.Right />
        </button>
      </div>
    </div>
  );
});

export default AdminProductsSwiper;
