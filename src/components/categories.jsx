/* eslint-disable no-unused-vars */
import { observer } from "mobx-react-lite";
import ButtonMain from "./UIKit/button";
import * as icons from "../icons/iconComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import filterStore from "../store/filter";

const Categories = observer(({ products }) => {
  const categories = ["Всі продукти"];
  products.forEach((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  const distanceTop = categories.length > 6 ? "" : "mt-4";
  const distanceBottom = categories.length > 6 ? "mb-11" : "mb-[72px]";

  return (
    <div className={`categories ${distanceTop} ${distanceBottom}`}>
      {categories.length > 0 && (
        <div className="flex max-w-full mx-auto relative justify-center gap-x-5">
          {categories.length > 6 ? (
            <>
              <Swiper
                modules={[Navigation]}
                slidesPerView={6}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  639: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
              >
                {categories.map((el) => (
                  <SwiperSlide key={el}>
                    <div className="px-4">
                      <ButtonMain
                        style={"categoriesBtn"}
                        clickFn={() => filterStore.setText(el)}
                        icon={el === filterStore.category ? <icons.Line active small /> : <icons.Line category small />}
                      >
                        {el}
                      </ButtonMain>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="button-next right-[-32px] top-9 w-8 h-8 absolute">
                <icons.SwipeRight />
              </button>
              <button className="button-prev left-[-32px] top-9 w-8 h-8 absolute">
                <icons.SwipeLeft />
              </button>
            </>
          ) : (
            <div className="flex flex-wrap gap-5">
              {categories.map((el) => (
                <ButtonMain
                  style={"categoriesBtn"}
                  clickFn={() => filterStore.setText(el)}
                  key={el}
                  icon={el === filterStore.category ? <icons.Line active small /> : <icons.Line category small />}
                >
                  {el}
                </ButtonMain>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Categories;
