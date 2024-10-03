import React, { useState } from 'react';
import { copyConfig } from '../app/copy/copy-config';

const SixthSection = () => {
  const { sixthSection } = copyConfig;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">{sixthSection.title}</h2>
        <p className="text-gray-400 mb-8 text-center">{sixthSection.subtitle}</p>
        
        <div className="max-w-3xl mx-auto">
          {sixthSection.faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="mt-2 p-4 bg-gray-700 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SixthSection);
