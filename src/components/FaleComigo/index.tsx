/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Link from 'next/link';

const encode = (data): string => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

interface FormStateProps {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const FaleComigo: React.FC = () => {
  const [formState, setState] = useState<FormStateProps>({
    nome: '',
    email: '',
    mensagem: '',
    telefone: '',
  });

  function submitForm(e): void {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'fale-comigo', ...formState }),
    }).then(() => {
      alert('Mensagem enviada com sucesso!');
      setState({
        email: '',
        mensagem: '',
        nome: '',
        telefone: '',
      });
    });
  }

  return (
    <div id="fale-comigo" className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 rounded-br-3xl">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Ficou com alguma dúvida?
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              <Link href="/perguntas-frequentes">
                <a href="/perguntas-frequentes">Visite nosso FAQ</a>
              </Link>
            </p>
            <dl className="mt-8 text-base text-gray-500">
              {/* <div>
            <dt className="sr-only">Postal address</dt>
            <dd>
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OR 12345</p>
            </dd>
          </div> */}
              <div className="mt-6">
                <dt className="sr-only">numero de telefone</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+5596991191313" className="ml-3">
                    (96) 99119-1313
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:contato@vmelocoach.com" className="ml-3">
                    contato@vmelocoach.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              data-netlify="true"
              name="fale-comigo"
              action="/?success=true"
              className="grid grid-cols-1 gap-y-6"
            >
              <input type="hidden" name="form-name" value="fale-comigo" />
              <div>
                <label htmlFor="nome" className="sr-only">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={formState.nome}
                  onChange={(e) =>
                    setState({ ...formState, nome: e.target.value })}
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Informe seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setState({ ...formState, email: e.target.value })}
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="sr-only">
                  Telefone
                </label>
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  value={formState.telefone}
                  onChange={(e) =>
                    setState({ ...formState, telefone: e.target.value })}
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Telefone"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formState.mensagem}
                  onChange={(e) =>
                    setState({ ...formState, mensagem: e.target.value })}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Mensagem"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={submitForm}
                  className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleComigo;
