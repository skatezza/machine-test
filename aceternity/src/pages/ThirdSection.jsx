import React from 'react';
import { copyConfig } from '../app/copy/copy-config';

const ThirdSection = () => {
  const { thirdSection } = copyConfig;

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">{thirdSection.title}</h2>
        <p className="text-gray-400 mb-8">{thirdSection.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thirdSection.cards.map((card, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-500 font-bold">{card.quantity}</span>
                  <div>
                    <span className="text-gray-400 line-through mr-2">{card.crossedAmount}</span>
                    <span className="text-white font-bold">{card.realAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-12 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
          {thirdSection.showMoreButton}
        </button>
      </div>
    </div>
  );
};

export default React.memo(ThirdSection);
