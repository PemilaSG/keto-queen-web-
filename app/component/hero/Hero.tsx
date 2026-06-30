"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <Container>

      <div className="mt-5 rounded-3xl overflow-hidden">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >

          <SwiperSlide>

            <div className="bg-[#F9F3E7]">

              <div className="grid grid-cols-2 items-center px-20 py-16">

                {/* LEFT */}

                <div>

                  <h1 className="text-6xl font-extrabold leading-tight">

                    <span className="text-[#2E5A1C]">
                      FUEL YOUR BODY.
                    </span>

                    <br />

                    <span className="text-[#F57C00]">
                      RULE YOUR DAY.
                    </span>

                  </h1>

                  <p className="text-gray-600 mt-6 text-xl">

                    Premium Keto Products

                    <br />

                    for a Healthier You.

                  </p>

                  <button className="mt-8 bg-[#2E5A1C] text-white px-8 py-4 rounded-xl hover:bg-green-900 transition">

                    SHOP NOW

                  </button>

                </div>

                {/* RIGHT */}

                <div className="flex justify-center">

                  <Image
                    src="/images/hero.png"
                    alt="Hero"
                    width={650}
                    height={450}
                    priority
                  />

                </div>

              </div>

            </div>

          </SwiperSlide>

          {/* Duplicate slide for loop */}

          <SwiperSlide>

            <div className="bg-[#F9F3E7]">

              <div className="grid grid-cols-2 items-center px-20 py-16">

                <div>

                  <h1 className="text-6xl font-extrabold leading-tight">

                    <span className="text-[#2E5A1C]">

                      HEALTHY TODAY.

                    </span>

                    <br />

                    <span className="text-[#F57C00]">

                      STRONG TOMORROW.

                    </span>

                  </h1>

                  <p className="text-gray-600 mt-6 text-xl">

                    Premium Keto Products

                  </p>

                  <button className="mt-8 bg-[#2E5A1C] text-white px-8 py-4 rounded-xl">

                    SHOP NOW

                  </button>

                </div>

                <div className="flex justify-center">

                  <Image
                    src="/images/hero.png"
                    alt="Hero"
                    width={650}
                    height={450}
                  />

                </div>

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </div>

    </Container>
  );
}