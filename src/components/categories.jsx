/* eslint-disable no-unused-vars */
import { observer } from "mobx-react-lite";
import ButtonMain from "./UIKit/button";
import * as icons from "../icons/iconComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import filter from "../store/filter";

const Categories = observer(({ products }) => {
  const categories = ["Всі продукти"];
  products.forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  return (
    <div>
      {categories.length > 0 && (
        <div className="flex w-[1200px] mx-auto relative justify-center gap-x-5">
          {categories.length > 6 ? (
            <>
              <Swiper
                modules={[Navigation, Scrollbar]}
                slidesPerView={6}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
              >
                {categories.map((el) => (
                  <SwiperSlide key={el}>
                    <div className="px-4">
                      <ButtonMain style={"categoriesBtn"} clickFn={() => filter.setText(el)} btnValue={el}>
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
                <ButtonMain style={"categoriesBtn"} clickFn={() => filter.setText(el)} key={el} btnValue={el}>
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
