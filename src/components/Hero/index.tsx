import React from 'react';
import Header from '../Header';

const Hero: React.FC = () => (
  <div id="inicio" className="relative bg-gray-50">
    <Header />
    <main className="flex flex-wrap-reverse lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Vinicius Melo</span>
            <span className="block text-blue-600 xl:inline"> Coach</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Funcionário Público, Coach e Analista de Perfil Comportamental pela
            Federação Brasileira de Coaching Integral Sistêmico - FEBRACIS. Com
            formação acadêmica em História e Direito. Vinicius possui 10 anos de
            experiência na Administração Pública.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/#fale-comigo"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full lg:mt-1">
        <img
          className="inset-0 w-full h-full object-top object-cover"
          src="/images/hero.jpg"
          alt="Vinicius Melo"
        />
      </div>
    </main>
  </div>
);

export default Hero;
