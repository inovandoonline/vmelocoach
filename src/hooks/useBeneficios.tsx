import React, { createContext, useContext } from 'react';

interface BeneficioDTO {
  text: string;
}

interface BeneficiosContextDTO {
  pessoais: BeneficioDTO[];
  profissionais: BeneficioDTO[];
}

const BeneficiosContext = createContext<BeneficiosContextDTO | null>(null);

const BeneficiosProvider: React.FC = ({ children }) => {
  const pessoais = [
    {
      text:
        'Melhora significativa dos relacionamentos interpessoais, como família, amigos e relacionamentos amorosos;',
    },
    {
      text:
        "Reorganização <a class='text-blue-600 underline' href='https://febracis.com/o-que-e-mentalidade-financeira-e-qual-e-a-sua-importancia/'>financeira</a> definitiva, proporcionando abundância",
    },
    {
      text:
        "<a class='text-blue-600 underline' href='https://febracis.com/aprenda-a-ter-disciplina-financeira-por-meio-do-autoconhecimento/'>Autoconhecimento</a> e aumento da <a class='text-blue-600 underline' href='https://febracis.com/baixa-autoestima/'>autoestima</a>, impulsionando a sua autoconfiança",
    },
    {
      text:
        'Definição de prioridades, metas e objetivos, com intuito de gerenciar melhor o tempo e, consequentemente, obter mais produtividade',
    },
    {
      text:
        'Aumento da criatividade e do poder decisório na vida pessoal e profissional',
    },
  ];
  const profissionais = [
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      text:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
  ];

  return (
    <BeneficiosContext.Provider value={{ pessoais, profissionais }}>
      {children}
    </BeneficiosContext.Provider>
  );
};

function useBeneficios(): BeneficiosContextDTO {
  const context = useContext(BeneficiosContext);

  if (!context) {
    throw new Error(`useBeneficios must be used within a BeneficiosProvider`);
  }

  return context;
}

export { BeneficiosProvider, useBeneficios };
