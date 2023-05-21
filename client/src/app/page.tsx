import { User } from "lucide-react";
import Image from "next/image";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-stripes" />
        {/* Signin */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full">
            <User className="w-5 h-5 text-gray-500" />
          </div>

          <p className="text-small max-w-[140px] leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image
            src={nlwLogo}
            className="pointer-events-none"
            alt="NLW Spacetime logo"
          />

          <div className="max-w-[420px] space-y-4">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed ">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href="#"
            className="inline-block px-5 py-3 text-sm leading-none text-black uppercase bg-green-500 rounded-full font-alt hover:bg-green-600"
            role="button"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copyrigth © 2021 NLW Spacetime */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rocketseat"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </a>
        </div>
      </div>
      {/* Right */}
      <div className="bg- flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex items-center justify-center flex-1">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="#" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
