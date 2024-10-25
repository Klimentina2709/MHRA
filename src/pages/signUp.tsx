import { useRouter } from "next/router";
import Banner from "@/components/banner/Banner";
import Benefits from "@/components/subscription/Benefits";
import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
      isMember,
      subscribe,
    };

    localStorage.setItem("user", JSON.stringify(formData));

    setEmail("");
    setUsername("");
    setPassword("");
    setIsMember(false);
    setSubscribe(false);

    router.push("/userDashboard");
  };

  return (
    <>
      <Head>
        <title>Регистрирај се - МАЧР</title>
        <meta
          name="description"
          content="Регистрирајте се за да добивате најнови информации и бенефити од МАЧР."
        />
        <meta
          name="keywords"
          content="регистрација, МАЧР, HR, бенефити, едукативни настани"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      {/* Banner section */}
      <Banner
        title={"Придружи ни се!"}
        paragraph={"Сакаш да се информираш подетално за бенефитите?"}
        showFirstStructure={true}
      />

      <div className="max-w-[60%] mx-auto mt-40">
        <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
          <h3 className="text-2xl text-center mb-10">
            <span className="font-bold">Најави се</span> или{" "}
            <span className="font-bold"> Регистрирај се</span>
          </h3>

          <button
            type="button"
            className="bg-white text-xl border-2 border-gray-400 font-bold px-4 py-2 rounded-full mt-4 flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-2xl" /> Продолжи со Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4">или</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="my-2">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              placeholder="username"
              className="border-2 border-gray-400 px-4 py-2 rounded-full w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              className="border-2 border-gray-400 px-4 py-2 rounded-full w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              className="border-2 border-gray-400 px-4 py-2 rounded-full w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <span>
            Со кликнување на 'Продолжи со Google/Email', се согласувате со
            нашите Услови на користење и Политика за приватност
          </span>

          <div>
            <input
              type="checkbox"
              checked={isMember}
              onChange={(e) => setIsMember(e.target.checked)}
              className="mr-2"
              required
            />
            <span>Сакам да станам член на МАЧР</span>
          </div>

          <div>
            <input
              type="checkbox"
              checked={subscribe}
              className="mr-2"
              onChange={(e) => setSubscribe(e.target.checked)}
            />
            <span>Сакам редовно да добивам информации на е-маил</span>
          </div>

          <button
            type="submit"
            className={`mt-4 px-4 py-2 w-full rounded-full ${
              email && password && isMember && username
                ? "bg-orange-500"
                : "bg-gray-400 cursor-not-allowed"
            } text-white`}
            disabled={!email || !password || !isMember || !username}
          >
            Продолжи
          </button>
        </form>
      </div>

      <div className="max-w-[80%] mx-auto flex flex-col relative mt-40">
        <div className="flex-1">
          <Benefits first={true}>
            <h3 className="text-3xl font-medium my-6">
              Бенефити од индивидуално зачленување
            </h3>
            <ul className="list-disc pl-5">
              <li>Едукативни настани</li>
              <li>Најнови информации и случувања</li>
              <li>Ширење на мрежата на контакти</li>
              <li>Вклучување во работењето на МАЧР</li>
              <li>HR огласи за работа</li>
            </ul>
          </Benefits>
        </div>

        <div className="flex-1">
          <Benefits first={false}>
            <h3 className="text-3xl font-medium my-6">
              Бенефити од корпоративно зачленување
            </h3>
            <ul className="list-disc pl-5">
              <li>Претставник во корпоративниот одбор на МАЧР</li>
              <li>Можности за промоција на вашата компанија</li>
              <li>Ширење на мрежата регионално и интернационално</li>
              <li>Попусти на HR настани, обуки, конференции и сл.</li>
              <li>HR огласи за работа</li>
            </ul>
          </Benefits>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
          <Image
            src="/img/background/back09.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
