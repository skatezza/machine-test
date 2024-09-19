import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const Section = () => {
  return (
    <div className="w-full h-[480px]">
      <div className="mt-8 p-4 md:p-16">
        <div>
          <button className="text-white font-bold flex items-center p-2 rounded-lg hover:bg-[#151618] transition-colors duration-300">
            <span className="bg-[#0095F3] text-[8px] md:text-[10px] text-white py-0.5 px-1 md:px-2 rounded-xl mr-2">
              NEW
            </span>
            <span className="text-sm md:text-base transition-colors duration-300">
              Join us on Oct. 2 for special announcements
            </span>
          </button>
          <div>
            <h1 className="text-white text-[40px] md:text-[90px] m-0 font-semibold">
              The web builder
            </h1>
            <h1 className="text-white text-[40px] md:text-[90px] mt-[-15px] md:mt-[-50px] font-semibold">
              for stunning sites.
            </h1>
          </div>
          <div>
            <h4 className="text-[18px] md:text-[25px] text-[#94989C] font-semibold">
              Design and publish modern sites at
            </h4>
            <h4 className="text-[18px] md:text-[25px] text-[#94989C] font-semibold">
              any scale with Framer's web builder.
            </h4>
          </div>
        </div>
        <div className="mt-3 space-x-4 flex">
          <button className="py-1 px-4 md:px-5 dark:text-white bg-[#0072C6] hover:bg-[#005A9E] hover:text-[#E2E8F0] rounded-lg font-semibold">
            Launch Framer
          </button>
          <button className="py-1.5 px-2 font-bold text-white flex items-center gap-2">
            <IoPlayCircleOutline className="w-5 h-5" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Section);
