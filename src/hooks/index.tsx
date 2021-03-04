import React from 'react';
import { BeneficiosProvider } from './useBeneficios';
import { MenuProvider } from './useMenu';
import { PalestrasProvider } from './usePalestras';
import { QuestionarioProvider } from './useQuestionario';

const AppProvider: React.FC = ({ children }) => (
  <BeneficiosProvider>
    <MenuProvider>
      <PalestrasProvider>
        <QuestionarioProvider>{children}</QuestionarioProvider>
      </PalestrasProvider>
    </MenuProvider>
  </BeneficiosProvider>
);

export default AppProvider;
