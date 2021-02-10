/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SobreCoaching: React.FC = () => {
  return (
    <>
      <div id="coach-vs-coaching" className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/images/duvida.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                Coach vs Coaching
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Afinal de contas, o que é "Coach"?
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Trata-se do .... 'texto que tu vai falar sobre isso'
              </p>
              <div className="mt-5 prose prose-blue text-gray-500">
                <p>Texto demonstrando um estudo de caso</p>
                <ul>
                  <li>Lista</li>
                  <li>Dos pontos</li>
                  <li>Principais</li>
                </ul>
                <p>Texto Finalizando</p>
                <h3>E com relação ao "Coaching"?</h3>
                <p>Ao menos</p>
                <p>Dois parágrafos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreCoaching;
