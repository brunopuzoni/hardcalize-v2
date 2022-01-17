import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Head>
        <title>Home | Hardcalize</title>
        <meta
          name="description"
          content="Plataforma de busca de esportes radicais"
        />
      </Head>

      <header className="bg-blue-600 w-full h-16 text-center">
        aqui fica o header
      </header>
      <main className="bg-blue-600">
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-white text-6xl font-bold pt-4 pb-8">
            Hardcalize
          </h1>
          <p className="text-white text-xl font-medium pt-4 pb-8">
            Isso aqui vai sair algum dia
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
