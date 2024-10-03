import React from 'react';
import { copyConfig } from '../app/copy/copy-config';

const FooterSection = () => {
  const { footerSection } = copyConfig;

  return (
    <div className="w-full bg-[#171717] text-white py-10">
      <div className="w-[95%] mx-auto border-b border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 mt-5">
          {footerSection.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-5 text-[#C9CACB]">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[95%] mx-auto mt-8">
        <h3 className="text-[#C9CACB] text-sm">
          © 2024 OhMyDev!, Inc. All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};

export default React.memo(FooterSection);
