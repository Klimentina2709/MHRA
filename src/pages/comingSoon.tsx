import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const ComingSoon: NextPage = () => {
  return (
    <>
      <Head>
        <title>Доаѓа наскоро</title>
        <meta name="description" content="Страница за доаѓање наскоро" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Доаѓа наскоро!</h1>
          <p className="text-gray-600 mb-8">
            Заблагодаруваме на вашата поддршка!
          </p>
          <Link href="/">
            <span className="bg-orange-500 rounded-full text-white font-semibold py-4 px-6 hover:bg-orange-600 transition duration-200">
              Врати се на почетната страница
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
