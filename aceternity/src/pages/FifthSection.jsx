import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fifthSection.css";
import { copyConfig } from "../app/copy/copy-config";

const FifthSection = () => {
  // Change this line
  const { testimonials } = copyConfig.fifthSection;

  const settings = {
    dots: false,
    infinite: true,
    speed: 9800,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black w-full relative">
    <div className="flex justify-center h-96 relative shadow-2xl z-20 overflow-visible">
      <div className="mt-40 text-center">
        <h1 className="text-white text-[2.5rem] md:text-[3rem] font-semibold">
          {testimonials.title}
        </h1>
        <h4 className="text-white text-[1.25rem] md:text-[1.5rem] font-semibold">
          {subtitle}
        </h4>
      </div>
    </div>
  
    <div className="p-5 w-full flex relative shadow-2xl shadow-stone-950 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {testimonial.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{testimonial.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{testimonial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings2}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {testimonial.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{testimonial.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{testimonial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {testimonial.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{testimonial.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{testimonial.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  </div>
  
  );
};

export default React.memo(FifthSection);