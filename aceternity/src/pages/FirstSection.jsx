import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import { Cover } from "./acertenityComponents/MainText";

const FirstSection = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col  border-b border-gray-800 items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
 
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-36 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build world Class <br /> websites at <Cover>warp speed</Cover>
      </h1>

      <p className="text-lg md:text-xl font-semibold mt-4 md:mt-7 text-gray-200 mb-6 text-center">
        Access an ever-growing collection of premium, meticulously crafted
        templates and component packs. Save time and focus on what
        matters—building standout websites that captivate your audience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button className="bg-white text-sm font-semibold text-black py-2.5 px-7 rounded-md hover:bg-gray-200">
          Explore Collection
        </button>
        <button className="bg-[#262627] text-sm font-semibold py-2.5 px-6 rounded-md transform hover:translate-y-[-4px] transition-transform duration-300">
          Unlock Unlimited Access
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-8">
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold text-[#737373] mb-4">
            Trusted by Founders and Entrepreneurs from all over the world
          </p>

          <div className="flex -space-x-2 mt-5">
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>

            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full ring-2 ring-white transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:z-20"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8 mt-6">
          <div className="text-[#737373] flex items-center space-x-2">
            <SiNextdotjs className="text-[#737373] w-7 h-7" />
            <span>Next.js</span>
          </div>
          <div className="text-[#737373] flex items-center space-x-2">
            <FaReact className="text-[#737373] w-7 h-7" />
            <span>React</span>
          </div>
          <div className="text-[#737373] flex items-center space-x-2">
            <SiTailwindcss className="text-[#737373] w-7 h-7" />
            <span>Tailwind CSS</span>
          </div>
          <div className="text-[#737373] flex items-center   space-x-2">
            <SiFramer className="text-[#737373] w-7 h-7" />
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FirstSection);
