/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SobreCoaching: React.FC = () => {
  return (
    <>
      <div id="coaching" className="relative bg-white">
        <div className="lg:absolute lg:inset-0 hidden lg:block">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-full w-full object-cover object-top absolute"
              src="/images/apresentacao.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                Sobre o Coaching
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                O que é o Coaching Integral Sistêmico
              </h3>
              {/* <p className="mt-8 text-lg text-gray-500">
                Trata-se do .... 'texto que tu vai falar sobre isso'
              </p> */}
              <div className="mt-5 prose prose-blue text-gray-500">
                <p>
                  Processo de condução lógica e cognitiva que identifica
                  inicialmente o Estado Atual através de uma completa, profunda
                  e constante anamnese. Depois, busca identificar os objetivos e
                  aonde a pessoa/organização quer efetivamente chegar para,
                  então, conhecendo os fatores impeditivos e facilitadores,
                  traçar um completo plano de ação que leve o cliente do ponto
                  inicial ao ponto desejado.
                </p>
                <p>
                  Essa metodologia trabalha os dois hemisférios do cérebro, o
                  esquerdo e o direito. O primeiro é responsável pela parte
                  cognitiva e o segundo, pelas emoções.
                </p>
                <p>
                  Por isso, o Coaching Integral Sistêmico não é só um coaching
                  comum. Ele é integral porque trabalha com todas as áreas do
                  cérebro e sistêmico porque compreende todas as áreas da vida.
                </p>
                <p>
                  O que você está esperando para iniciar o seu processo de
                  Coaching Integral Sistêmico e melhorar definitivamente a sua
                  performance , atingindo de uma vez por todas os seus objetivos
                  e alcançando o sucesso absoluto ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="">
            <div className="text-base max-w-prose mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                Sobre o Coaching
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Pilares do Coaching Integral Sistêmico
              </h3>
              {/* <p className="mt-8 text-lg text-gray-500">
                Trata-se do .... 'texto que tu vai falar sobre isso'
              </p> */}
              <div className="mt-5 prose prose-blue text-gray-500">
                <ul>
                  <li>
                    Ajudar o cliente a construir um estilo de vida abundante
                  </li>
                  <li>Desenvolver a Inteligência Emocional</li>
                  <li>
                    Reprogramar as crenças limitantes e fortalecer as crenças
                    positivas
                  </li>
                </ul>
                <p>
                  Esses pilares foram desenvolvidos com base em estudos
                  publicados, como o livro “The Brain that changes itself” (O
                  cérebro que muda a si mesmo, em tradução livre) do renomado
                  psiquiatra, psicanalista e pesquisador Norman Doidge.
                </p>
                <p>
                  No âmbito da inteligência emocional o Coaching Integral
                  Sistêmico bebe da fonte do PhD em psicologia pela Universidade
                  de Harvard, Daniel Goleman.
                </p>
                <p>
                  Todas essas pesquisas foram compiladas e cuidadosamente
                  explicadas por Paulo Vieira , em best sellers como “O poder da
                  ação”, “O poder da autoresponsabilidade” e “Criação de
                  Riqueza”, entre muitos outros.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
          <img
            className="h-56 w-full object-contain md:object-cover object-top lg:absolute lg:h-full"
            src="/images/duvida.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SobreCoaching;
