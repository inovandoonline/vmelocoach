import React, { createContext, useContext } from 'react';
import PalestraDTO from '../dtos/palestraDTO';

interface PalestrasContextDTO {
  palestras: PalestraDTO[];
}

const PalestrasContext = createContext<PalestrasContextDTO | null>(null);

const PalestrasProvider: React.FC = ({ children }) => {
  const palestras = [
    {
      titulo: 'Poder da Autoresponsabilidade',
      slug: 'poder-da-autoresponsabilidade',
      conteudo: 'algum conteúdo sobre isso',
    },
    {
      titulo: 'Poder da Ação',
      slug: 'poder-da-acao',
      conteudo: 'algum conteúdo sobre isso',
    },
    {
      titulo: 'Poder e Alta Performance',
      slug: 'poder-e-alta-performance',
      conteudo: 'algum conteúdo sobre isso',
    },
    {
      titulo: 'Decifre e Influencie Pessoas',
      slug: 'decifre-e-influencie-pessoas',
      conteudo: 'algum conteúdo sobre isso',
    },
  ];

  return (
    <PalestrasContext.Provider value={{ palestras }}>
      {children}
    </PalestrasContext.Provider>
  );
};

function usePalestras(): PalestrasContextDTO {
  const context = useContext(PalestrasContext);

  if (!context) {
    throw new Error(`usePalestras must be used within a PalestrasProvider`);
  }

  return context;
}

export { PalestrasProvider, usePalestras };
