"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import image1 from "../../public/player 1.jpeg";
import image2 from "../../public/player 2.jpeg";
import image3 from "../../public/player 3.jpeg";
import image4 from "../../public/player 4.jpeg";
import image5 from "../../public/player 5.jpeg";
import image6 from "../../public/player 6.jpeg";
import image7 from "../../public/add.jpeg";

function Sports() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className="grid grid-cols-6 dark:text-white p-6  overflow-hidden h-full ">
      <div className=" col-span-5 tablet:pl-8 tablet:pr-8">
        <Slider {...settings}>
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image1}
                    priority={true} // {false} | {true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">Sacramento River Cats</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px] pb-2">48 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px] pb-2">Baseball</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image2}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">Las Vegas Aviators</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px] pb-2">28 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px] pb-2">Baseball</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image3}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">new jersey devils</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-[11px] text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px]  pb-2">15 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px]  pb-2">Ice Hockey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image4}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">Las Vegas Aviators</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px] pb-2">15 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px] pb-2">Ice Hockey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image5}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">Sacramento River Cats</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px] pb-2">48 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px] pb-2">Baseball</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
          <div className=" pr-2  sm:w-56 sm:h-[400px]">
            <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
              <div>
                <div className="">
                  <Image
                    src={image6}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "270px",
                    }}
                    alt="Picture of the author"
                  />
                  <h1 className=" pt-2 pb-2">Las Vegas Aviators</h1>
                  <div className=" flex bg-slate-200 justify-between  pr-2 pt-2 pl-2 dark:bg-slate-950 flex-wrap">
                    <div>
                      <p className=" font-normal dark:font-extralight text-xs pb-1">
                        Total Events
                      </p>
                      <p className="text-[13px] pb-2">28 Event</p>
                    </div>
                    <div>
                      <p className="font-normal dark:font-extralight text-xs pb-1">
                        Sport
                      </p>
                      <p className="text-[13px] pb-2">Baseball</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* next slide */}
        </Slider>
      </div>
      {/*  ////// hobe //// */}
      <div className=" hidden tablet:block pr-2  sm:w-56 sm:h-[400px]">
        <div className=" via-black w-[100%] bg-white dark:bg-slate-900 p-2">
          <div className="">
            <div className="">
              <div className=" absolute bg-black text-white p-1 ">
                <p>Add</p>
              </div>
              <Image
                src={image7}
                priority={true}
                style={{
                  width: "100%",
                  height: "50%",
                }}
                alt="Picture of the author"
              />
              <h1 className=" pt-2 pb-2">Advertisement title</h1>
              <p className=" font-normal text-xs pb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center p-4 col-span-6">
        <button className=" bg-blue-500 pr-4 pl-4 pt-2 pb-2 rounded dark:hover:bg-black hover:bg-slate-600 hover:text-white">
          {" "}
          See more
        </button>
      </div>
    </div>
  );
}

export default Sports;
