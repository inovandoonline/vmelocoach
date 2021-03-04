import React, { createContext, useContext } from 'react';

export interface QuestionarioDTO {
  pergunta: string;
  resposta: string;
}

interface QuestionarioContextDTO {
  questionario: QuestionarioDTO[];
}

const QuestionarioContext = createContext<QuestionarioContextDTO | null>(null);

const QuestionarioProvider: React.FC = ({ children }) => {
  const questionario = [
    {
      pergunta: 'O saci cruza as pernas?',
      resposta: 'Não né, ele só tem uma!',
    },
    {
      pergunta: 'Quem são meus verdadeiros amigos?',
      resposta: 'Skilo',
    },
  ];

  return (
    <QuestionarioContext.Provider value={{ questionario }}>
      {children}
    </QuestionarioContext.Provider>
  );
};

function useQuestionario(): QuestionarioContextDTO {
  const context = useContext(QuestionarioContext);

  if (!context) {
    throw new Error(
      `useQuestionario must be used within a QuestionarioProvider`,
    );
  }

  return context;
}

export { QuestionarioProvider, useQuestionario };
