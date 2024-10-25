import Image from "next/image";
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex border-t-2 border-gray-200 max-w-[80%] mx-auto mt-40 ">
      <div className="flex-1 py-20">
        <div>
          <Image
            src={"/img/logo/logo.png"}
            height={100}
            width={100}
            alt="Logo in the footer"
          />
        </div>
        <div className="flex">
          <div className="mr-4">
            <h6 className="font-semibold">Адреса</h6>
            <p>Бул. ВМРО бр. 7/1-7</p>
            <p>1000 Скопје, Македонија</p>
          </div>
          <div>
            <h6 className="font-semibold">Емаил</h6>
            <p>contact@mhra.mk</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-20">
        <div>
          <h5 className="text-lg font-semibold mb-4">Претплати се на билтен</h5>
          <input
            type="email"
            className="border border-gray-200 rounded-full w-full p-2"
            placeholder="E-mail"
          />
        </div>
        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="m-all-1 mr-4 text-blue-950 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="m-all-1 mr-4 text-blue-950 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="m-all-1 mr-4 text-blue-950 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="m-all-1 text-blue-950 text-2xl"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
