import React, { createContext, useContext } from 'react';

interface BeneficioDTO {
  titulo: string;
  descricao: string;
}

interface BeneficiosContextDTO {
  pessoais: BeneficioDTO[];
  profissionais: BeneficioDTO[];
}

const BeneficiosContext = createContext<BeneficiosContextDTO | null>(null);

const BeneficiosProvider: React.FC = ({ children }) => {
  const pessoais = [
    {
      titulo: 'Serviço 01',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 02',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 03',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 04',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 05',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 06',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 07',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 08',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
  ];
  const profissionais = [
    {
      titulo: 'Serviço 01',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 02',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 03',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 04',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 05',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 06',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 07',
      descricao:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      titulo: 'Serviço 08',
      descricao:
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
