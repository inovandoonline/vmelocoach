import { Transition } from '@tailwindui/react';
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useMenu } from '../../hooks/useMenu';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu(): void {
    setOpen(!open);
  }

  const { menuState } = useMenu();

  return (
    <div className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/#">
              <span className="sr-only">Vinicius Melo Coach</span>
              <picture className="w-64">
                <source type="image/webp" srcSet="/images/new-logo.webp" />
                <source type="image/png" srcSet="/images/new-logo.png" />
                <img
                  className="w-64"
                  src="/images/new-logo.png"
                  alt="VMelo Coach Logo"
                />
              </picture>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Abrir menu</span>
              <svg
                className="h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {menuState.map(({ name, link }) => (
              <a
                key={link}
                href={link}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <Transition
        show={open}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <picture className="w-64">
                    <source type="image/webp" srcSet="/images/new-logo.webp" />
                    <source type="image/png" srcSet="/images/new-logo.png" />
                    <img
                      className="w-64"
                      src="/images/new-logo.png"
                      alt="VMelo Coach Logo"
                    />
                  </picture>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Fechar menu</span>
                    <svg
                      className="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menuState.map(({ name, link }) => (
                    <a
                      key={link}
                      href={link}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <FiArrowUpRight className="text-blue-500" size={20} />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
