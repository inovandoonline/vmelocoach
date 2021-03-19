import React from 'react';
import { useBeneficios } from '../../../../hooks/useBeneficios';
import CheckSimples from '../../../Icones/CheckSimples';

const BeneficioProfissional: React.FC = () => {
  const { profissionais } = useBeneficios();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Benefícios
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Profissionais
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              O processo de coaching traz inúmeros benefícios aos coachees,
              perceptíveis na vida pessoal e profissional. Separamos alguns dos
              benefícios Profissionais do coaching. Confira:
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {profissionais.map(({ text }) => (
              <div key={text} className="flex">
                <CheckSimples />
                <div className="ml-3">
                  {/* <dt className="text-lg leading-6 font-medium text-gray-900">
                    {text}
                  </dt> */}
                  <dd className="mt-2 text-base text-gray-500">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default BeneficioProfissional;
