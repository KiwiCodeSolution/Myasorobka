import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";

const ProductSwiper = () => {
  return (
    <div className="h-[780px] w-full py-4 px-[120px] relative product">
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
        >
          {productStore.products.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prod-button-next right-[40%] bottom-[-62px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full">
          <icons.Right />
        </button>
        <button className="prod-button-prev left-[40%] bottom-[-62px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full">
          <icons.Left />
        </button>
      </>

      <div className="w-full mt-14">
        <div className="pagination flex justify-center gap-x-4"></div>
      </div>
    </div>
  );
};

export default ProductSwiper;
