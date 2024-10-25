import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const createBlog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Создај Блог | Македонска Асоцијација за човечки ресурси</title>
        <meta
          name="description"
          content="Создај нов блог на Македонската Асоцијација за човечки ресурси и сподели свои идеи."
        />
        <meta
          name="keywords"
          content="блог, создај блог, човечки ресурси, Македонија"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className=" p-4 mt-20">
        <div className="w-[80%] mx-auto h-80 rounded-5xl shadow-md bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 11l-3-3m0 0l-3 3m3-3v10"
              />
            </svg>
            <p className="text-gray-500 mt-2">Избери слика</p>
          </div>
        </div>

        <div className="flex w-[70%] mx-auto mt-10">
          <div className="flex-[80%] mr-6">
            <div className="mb-6">
              <h5 className="text-xl font-semibold mb-4">Наслов:</h5>
              <input
                type="text"
                placeholder="Име на блогот"
                className="border border-gray-300 rounded-lg shadow-sm p-4 w-full"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Содржина:</h5>
              <textarea
                placeholder="Содржина на блогот"
                rows={10}
                className="border border-gray-300 rounded-lg shadow-md p-4 w-full "
              ></textarea>
            </div>
          </div>

          <div className="flex-[20%] relative">
            <button className="absolute bottom-0 w-full bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none transition duration-200">
              Испрати
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default createBlog;
