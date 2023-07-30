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
    <div className="relative admin-product mx-auto w-full">
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
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              spaceBetween: 15,
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

      <div className="w-full mt-8 relative mx-auto flex justify-center items-center gap-x-2">
        <button className="admin-prod-button-prev hover:shadow-swiper focus:shadow-swiper">
          <icons.Left />
        </button>
        <div className="admin-pagination flex justify-center gap-x-4 min-w-[200px] h-full "></div>
        <button className="admin-prod-button-next hover:shadow-swiper focus:shadow-swiper">
          <icons.Right />
        </button>
      </div>
    </div>
  );
});

export default AdminProductsSwiper;
