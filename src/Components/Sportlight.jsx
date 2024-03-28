"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// iamge
import ticket1 from "../../public/ticket 1.jpeg";
import ticket2 from "../../public/ticket 2.jpeg";

function Sportlight() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" p-6 dark:text-white">
        <div className=" flex flex-col items-center">
          <p className="text-base tablet:text-4xl font-bold p-2">
            Collection Spotlight
          </p>
          <p className="text-xs tablet:text-base text-center">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-3 w-full tablet:pr-32 tablet:pl-32">
          <Slider {...settings}>
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket1}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Las Vegas Aviators</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center">
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Take Flight Collectio
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket2}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Sacramento River Cats</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center text-sm">
                    Sutter Health Park, Sacramento, California
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Orange Collection
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket1}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Las Vegas Aviators</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center">
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Take Flight Collectio
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket2}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Sacramento River Cats</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center text-sm">
                    Sutter Health Park, Sacramento, California
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Orange Collection
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket1}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Las Vegas Aviators</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center">
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Take Flight Collectio
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket2}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Sacramento River Cats</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center text-sm">
                    Sutter Health Park, Sacramento, California
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Orange Collection
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket1}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Las Vegas Aviators</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center">
                    Las Vegas Ballpark, Las Vegas, Nevada
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Take Flight Collectio
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
            <div className="pr-2">
              <div className=" pt-4 divide-y divide-dashed drop-shadow-xl">
                <diV className="p-2 bg-white dark:bg-slate-900 rounded-b-[15px]">
                  <Image
                    src={ticket2}
                    style={{
                      width: "100%",
                      height: "360px",
                    }}
                    alt="Picture of the author"
                  />
                </diV>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[15px] flex flex-col items-center gap-3">
                  <p>Sacramento River Cats</p>
                  <p className=" text-sm">OCT 15 | SUN | 4:30 PM</p>
                  <p className="text-center text-sm">
                    Sutter Health Park, Sacramento, California
                  </p>
                  <button className=" bg-black w-full h-10 text-white p-2 text-sm hover:bg-blue-700 rounded">
                    Orange Collection
                  </button>
                </div>
              </div>
            </div>
            {/* next ticket */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sportlight;
