import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import "swiper/css";
import "./productSwiper.css";

import * as icons from "../icons/iconComponent";
import ProductCard from "./prouctCard";
import productStore from "../store/products";

const FavouriteProductSwiper = observer(() => {
  const favouriteProducts = productStore.products.filter((product) => product.favourite === true);

  return (
    <div className="w-full py-4 px-[120px] relative favourite">
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          rewind={true}
          slidesPerView={4}
          pagination={{
            clickable: true,
            el: ".fav-pagination",
          }}
          navigation={{
            nextEl: ".fav-button-next",
            prevEl: ".fav-button-prev",
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
          {favouriteProducts.map((product) => (
            <SwiperSlide key={product.name}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="fav-button-next right-[40%] bottom-[-4px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full">
          <icons.Right />
        </button>
        <button className="fav-button-prev left-[40%] bottom-[-4px] w-[52px] h-[52px] p-4 absolute bg-bg-white rounded-full">
          <icons.Left />
        </button>
      </>

      <div className="w-full mt-14">
        <div className="fav-pagination flex justify-center gap-x-4"></div>
      </div>
    </div>
  );
});

export default FavouriteProductSwiper;
