"use client";

import Card from "./Card";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { ourPlans } from "@/data/dataPlans";

export default function PlansSlide() {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 55,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="cursor-grab"
      >
        {ourPlans.map((plan) => (
          <SwiperSlide key={plan.id}>
            <Card title={plan.title} value={plan.value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
