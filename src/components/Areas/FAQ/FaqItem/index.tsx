import { Transition } from '@tailwindui/react';
import React, { useState } from 'react';
import { QuestionarioDTO } from '../../../../hooks/useQuestionario';

interface FaqItemProps {
  item: QuestionarioDTO;
}

const FaqItem: React.FC<FaqItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { pergunta, resposta } = item;

  function toggleOpen(): void {
    setOpen(!open);
  }

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          type="button"
          onClick={toggleOpen}
          className="text-left w-full flex justify-between items-start text-gray-400"
        >
          <span className="font-medium text-gray-900">{pergunta}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`${
                open ? '-rotate-180' : 'rotate-0'
              } h-6 w-6 transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <Transition
        show={open}
        enter=""
        enterFrom=""
        enterTo=""
        leave=""
        leaveFrom=""
        leaveTo=""
      >
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-500">{resposta}</p>
        </dd>
      </Transition>
    </div>
  );
};

export default FaqItem;
