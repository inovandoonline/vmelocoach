import React from 'react';
import { useQuestionario } from '../../../hooks/useQuestionario';
import FaqItem from './FaqItem';

const FAQ: React.FC = () => {
  const { questionario } = useQuestionario();

  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Dúvidas Frequentes
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {questionario.map((item) => (
                <FaqItem key={item.pergunta} item={item} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
