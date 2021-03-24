import React from 'react';

const Topico: React.FC = () => (
  <div className="bg-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div className="mx-auto text-base max-w-prose lg:max-w-none">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
          Tópico
        </h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Análise de perfil comportamental para vida pessoal
        </h3>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2">
          <svg
            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="relative text-base mx-auto max-w-prose lg:max-w-none hidden lg:block">
            <figure>
              <div className="sm:aspect-w-12 sm:aspect-h-7 lg:aspect-none">
                <picture className="rounded-lg shadow-lg object-cover object-top">
                  <source type="image/webp" srcSet="/images/analise.webp" />
                  <source type="image/jpg" srcSet="/images/analise.jpg" />
                  <img
                    loading="lazy"
                    className="rounded-lg shadow-lg object-cover object-top"
                    src="/images/analise.jpg"
                    alt="Analise de Perfil Comportamental"
                  />
                </picture>
              </div>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-base max-w-prose prose-blue mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500">
              Todos nós temos personalidades diferentes. No entanto, nem sempre
              nos damos conta dessa constatação e deixamos que os conflitos
              roubem a nossa energia vital. Será que poderíamos evitar conflitos
              se fizéssemos sempre uma análise de perfil comportamental
              inclusive na nossa vida pessoal?
            </p>
          </div>
          <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              O autoconhecimento também passa por este entendimento. Encontramos
              os nossos pontos de melhoria e nossas potencialidades com mais
              naturalidade quando percebemos o nosso estilo de lidar com os
              nossos medos do dia a dia.
            </p>
            <p>
              É para isso que existe a análise de perfil comportamental na
              maioria das empresas. Para compreender os diferentes tipos de
              perfis dos seus colaboradores e buscar a evolução constante nos
              relacionamentos interpessoais.
            </p>
            <p>
              Afinal, como podemos aplicar a análise de perfil do ambiente
              corporativo na nossa vida pessoal ?
            </p>
            <h3>O que é a análise de perfil comportamental?</h3>
            <p>
              Frequentemente, as empresas realizam a análise de perfil
              comportamental com o objetivo de obter aumento significativo da
              performance dos colaboradores através da gestão efetiva de
              pessoas.
            </p>
            <p>
              Isso quer dizer identificar os gargalos da empresa e a necessidade
              de remanejamento de colaboradores para as áreas em que eles possam
              mostrar todo o seu potencial.
            </p>
            <p>
              A análise de perfil promove uma comunicação mais eficaz entre
              equipes e gestores. Estes, por sua vez, conseguem desenvolver
              líderes e identificar talentos, compreendendo suas características
              com essa ferramenta.
            </p>
            <p>
              Para quem deseja se desenvolver profissionalmente e também no
              âmbito pessoal, a análise de perfil comportamental se encaixa
              perfeitamente num plano de desenvolvimento individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topico;
