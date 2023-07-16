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

  const distanceTop = categories.length > 6 ? "" : "mt-4";
  const distanceBottom = categories.length > 6 ? "mb-11" : "mb-[72px]";

  return (
    <div className={`categories ${distanceTop} ${distanceBottom}`}>
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
                        <p>{el}</p>
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
            <>
              {categories.map((el) => (
                <ButtonMain
                  style={"categoriesBtn"}
                  clickFn={() => filter.setText(el)}
                  key={el}
                  icon={<icons.Line />}
                  // icon={el === filter ? <icons.Line active /> : <icons.Line />}
                >
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
