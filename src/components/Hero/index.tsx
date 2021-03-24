import React from 'react';
import Header from '../Header';

const Hero: React.FC = () => (
  <div id="inicio" className="relative bg-gray-50">
    <Header />
    <main className="flex flex-wrap-reverse lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-24 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Vinicius Melo</span>
            <span className="block text-blue-600 xl:inline"> Coach</span>
          </h1>
          <div className="text-lg text-gray-500 sm:text-xl max-w-md md:max-w-3xl">
            <p className="mx-auto mt-3 md:mt-5">
              Vinicius Melo Coach e Analista de Perfil Comportamental, pela
              Federação Brasileira de Coaching Integral Sistêmico - FEBRACIS,
              Com formação acadêmica em História e Direito.
            </p>
            <p className="mx-auto mt-3 md:mt-5">
              Ministrante dos best-sellers O Poder da Autorresponsabilidade; O
              Poder da Ação e Poder e Alto Performance do Master Coach PhD Paulo
              Vieira.
            </p>
            <p className="mx-auto mt-4 md:mt-5">
              Aos meus 30 anos, servidor público concursado, solteiro e sem
              filhos, imaginava estar vivendo a vida ideal para alguém da minha
              idade, uma vida tranquila, equilibrada, tudo, menos medíocre.
            </p>
            <p className="mx-auto mt-3 md:mt-5">
              Em meio a pandemia do Coronavírus (COVID-19), me propus a uma
              imersão que me trouxe clareza e direcionamento pessoal e
              profissional, mas foi preciso uma pandemia para que eu me
              deparasse com a vida mediana que vivia, a vida que eu acreditava
              estar evitando.
            </p>
            <p className="mx-auto mt-3 md:mt-5">
              Quero contribuir com o seu autoconhecimento, para que você
              construa a vida que merece viver! Espero poder colaborar neste
              processo!
            </p>
          </div>
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
        <picture className="inset-0 w-full h-full object-top object-cover">
          <source type="image/webp" srcSet="/images/hero.webp" />
          <source type="image/jpg" srcSet="/images/hero.jpg" />
          <img
            className="inset-0 w-full h-full object-top object-cover"
            src="/images/hero.jpg"
            alt="Vinicius Melo"
          />
        </picture>
      </div>
    </main>
  </div>
);

export default Hero;
