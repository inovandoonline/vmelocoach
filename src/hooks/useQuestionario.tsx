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
      pergunta: 'Qual a diferença entre Coaching, Coach e Coachee?',
      resposta:
        'Coaching é o Processo; Coach é o profissional; Coachee é o Cliente',
    },
    {
      pergunta: 'O Coaching serve para qualquer pessoa?',
      resposta:
        'Sim, afinal, não há nada que esteja tão bom que não possa melhorar.',
    },
    {
      pergunta: 'Quanto tempo dura um processo de coaching?',
      resposta:
        'O Processo tem 12 sessões, que devem ocorrer, preferencialmente, uma vez por semana, mas dependendo da realidade do coachee (cliente), pode-se adequar para serem realizadas a cada 15 dias. No primeiro caso o processo dura por volta de 3 meses e no segundo, 6 meses. Cada sessão tem duração média de 1 hora e 30 minutos.',
    },
    {
      pergunta: 'Só existe processo de Coaching individual?',
      resposta:
        'Não. O Coaching pode ser aplicado em grupo, voltado para o desenvolvimento coletivo com ênfase nas questões particulares/individuais.',
    },
    {
      pergunta: 'O Coaching é caro?',
      resposta: 'Caro é viver uma vida aquém do que você merece.',
    },
    {
      pergunta: 'O Coaching exige muito tempo?',
      resposta:
        'Além do tempo da sessão que tem a duração média de 1 hora e 30 minutos, há exercícios (simples) a serem realizados entre as sessões pelo coachee (cliente), que são facilmente adequados a rotina.',
    },
    {
      pergunta: 'Quero conhecer mais o processo antes de contratar, tem como?',
      resposta:
        'Sim, temos uma sessão de apresentação, sem ônus e obrigatoriedade em fechar uma contratação.',
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
