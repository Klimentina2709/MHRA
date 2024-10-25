import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className=" rounded-l-full pt-3 pb-3 sm:pl-[40px] md:sm:pl-[80px] pr-[250px] bg-cyan-950 absolute sm:bottom-[30%] md:bottom-[25%] lg:bottom-[4.5%] right-0">
      <div className="whitespace-nowrap mb-4 text-white">
        Заследи не на социјалните медиуми
      </div>
      <div className="flex space-x-4">
        {/* Instagram Icon */}

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>

        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaYoutube className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
