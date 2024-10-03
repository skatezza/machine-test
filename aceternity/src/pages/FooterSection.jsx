import React from 'react';
import { copyConfig } from '../app/copy/copy-config';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  const { footerSection } = copyConfig;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaTwitter':
        return <FaTwitter />;
      case 'FaGithub':
        return <FaGithub />;
      case 'FaLinkedin':
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[#171717] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSection.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400 hover:text-white">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {footerSection.socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white">
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">{footerSection.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterSection);
