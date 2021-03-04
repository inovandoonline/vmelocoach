import React from 'react';
import { BeneficiosProvider } from './useBeneficios';
import { MenuProvider } from './useMenu';
import { QuestionarioProvider } from './useQuestionario';

const AppProvider: React.FC = ({ children }) => (
  <BeneficiosProvider>
    <MenuProvider>
      <QuestionarioProvider>{children}</QuestionarioProvider>
    </MenuProvider>
  </BeneficiosProvider>
);

export default AppProvider;
