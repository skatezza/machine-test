import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/slider/1714025933887-removebg-preview.png",
  "/slider/images-removebg-preview (1).png",
  "/slider/images-removebg-preview.png",
  "/slider/original-3736a20b1e59f5b4b3536cddfbc71dff-removebg-preview.png",
  "/slider/perplexityai-removebg-preview.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 10000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImageSlider = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="slider-container relative w-full overflow-hidden bg-gradient-to-t from-blue-900 to-transparent"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity duration-300 ${
          hovered
            ? "bg-gradient-to-t from-blue-800 to-black opacity-95"
            : "opacity-0"
        }`}
      >
        <p className="text-white font-bold text-xl flex items-center">
          Meet some of our amazing customers
          <span className="ml-2 text-2xl">&#8594;</span> {/* Right arrow */}
        </p>
      </div>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-center p-2 group"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className={`h-24 object-contain transition-transform duration-500 ${
                hovered ? "blur-sm" : ""
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
