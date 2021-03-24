import React from 'react';
import { useBeneficios } from '../../../../hooks/useBeneficios';
import CheckSimples from '../../../Icones/CheckSimples';

const BeneficioPessoal: React.FC = () => {
  const { pessoais } = useBeneficios();

  return (
    <>
      <div id="beneficios" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Benefícios
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900">Pessoais</h3>
            <p className="mt-4 text-lg text-gray-500">
              Geralmente, as pessoas que procuram o Coaching Integral Sistêmico
              desejam obter sucesso em diversas áreas da sua vida. Ou seja,
              tanto no âmbito profissional, como também no pessoal. Os
              benefícios são perceptíveis na vida de quem se propõe a descobrir
              as novas possibilidades e quebrar as crenças limitantes que
              impedem o crescimento. Alguns deles são:
            </p>
          </div>
          <dl className="flex mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {pessoais.map(({ text }) => (
              <div key={text}>
                <CheckSimples />
                <dd
                  className="ml-3 mt-2 text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default BeneficioPessoal;
