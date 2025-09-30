"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-[#e3f2fd] px-6 text-center">
      <h1 className="font-['Comfortaa'] text-[2.4rem] text-[#1976d2] mb-5">
        Página não encontrada 😢
      </h1>
      <p className="text-[1.15rem] text-[#1565c0] mb-7 text-center">
        O conteúdo que você procura não existe ou foi removido.<br />
        Verifique o endereço ou volte para a página inicial.
      </p>
      <Link
        href="/Home"
        aria-label="Voltar para a página inicial"
        className="inline-flex items-center justify-center bg-[#1976d2] hover:bg-[#1565c0] text-white py-[14px] px-8 rounded-lg font-bold font-['Comfortaa'] text-[1.08rem] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors duration-200"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}