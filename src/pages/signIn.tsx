import React, { useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";

const SignIn: NextPage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const formData = {
    username,
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    router.push("/userDashboard");
  };

  return (
    <>
      <Head>
        <title>Најави се - МАЧР</title>
        <meta
          name="description"
          content="Најавете се за да пристапите до вашиот кориснички панел на МАЧР."
        />
        <meta name="keywords" content="најава, МАЧР, кориснички панел" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(5px)" }}
        ></div>

        <div className="bg-white p-6 rounded-lg shadow-lg z-10">
          <h2 className="text-xl font-bold mb-4">Најави се</h2>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 w-full mb-4 rounded-md"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition duration-200"
            onClick={handleSubmit}
          >
            Најави се
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
