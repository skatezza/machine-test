import React from 'react';
import { copyConfig } from '../app/copy/copy-config';

const FourthSection = () => {
  const { fourthSection } = copyConfig;

  return (
    <div className="w-full bg-black mt-[-100px] h-auto">
      <div className="p-7">
        <h3 className="text-[#A855F7] mt-4 font-bold text-xl md:text-2xl">{fourthSection.title}</h3>
        <p className="text-[#C9CACB] mt-4 text-sm md:text-base">{fourthSection.subtitle}</p>
      </div>

      {fourthSection.templates.map((template, index) => (
        <div key={index} className="w-full flex justify-center bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div className="bg-black rounded-lg p-4 flex flex-col items-start">
              <p className="text-white mb-2 font-bold text-sm md:text-base lg:text-lg">
                {template.title}
              </p>
              <p className="text-[#C9CACB] mb-2 font-normal text-xs md:text-sm lg:text-base">
                {template.description}
              </p>
              <button className="px-4 py-2 bg-white mt-2 font-semibold rounded-lg text-sm md:text-base">
                Buy now {template.price}
              </button>
            </div>
            {template.images.map((image, imgIndex) => (
              <div key={imgIndex} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${template.title} ${imgIndex + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(FourthSection);