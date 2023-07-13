/* eslint-disable no-unused-vars */
import { observer } from "mobx-react-lite";
import ButtonMain from "./UIKit/button";
import * as icons from "../icons/iconComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import products from "../store/products";

const Categories = observer(({ products }) => {
  const categories = ["Всі продукти"];
  products.forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  function filterCategories() {
    console.log(products);
    // products.filter();
  }

  return (
    <div className="">
      {categories.length > 0 && (
        <div className="flex w-[1200px] mx-auto relative ">
          {categories.length > 6 ? (
            <>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={6}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
              >
                {categories.map((el) => (
                  <SwiperSlide key={el}>
                    <div className="px-4">
                      <ButtonMain style={"categoriesBtn"} clickFn={filterCategories}>
                        {el}
                      </ButtonMain>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="button-next right-[-32px] top-3 w-8 h-8 absolute">
                <icons.SwipeRight />
              </button>
              <button className="button-prev left-[-32px] top-3 w-8 h-8 absolute">
                <icons.SwipeLeft />
              </button>
            </>
          ) : (
            <>
              {categories.map((el) => (
                <ButtonMain style={"categoriesBtn"} clickFn={filterCategories} key={el}>
                  {el}
                </ButtonMain>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default Categories;
