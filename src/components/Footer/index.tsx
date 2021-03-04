import React, { useMemo, useState } from 'react';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useMenu } from '../../hooks/useMenu';

const Footer: React.FC = () => {
  const [ano, setAno] = useState(1900);
  const getYear = new Date().getFullYear();

  const { menuState } = useMenu();

  useMemo(() => {
    setAno(getYear);
  }, [getYear]);

  return (
    <>
      <footer className="bg-white ">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {menuState.map(({ name, link }) => (
              <div key={name} className="px-5 py-2">
                <a
                  key={link}
                  href={link}
                  className="text-base text-gray-500 transition hover:text-gray-900"
                >
                  {name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/viniciusmcoach/"
              className="text-gray-400 transition hover:text-blue-500"
            >
              <span className="sr-only">Facebook</span>
              <FiFacebook className="h-6 w-6" />
            </a>

            <a
              href="https://wa.me/message/IYGFFUDGZH7QN1"
              className="text-gray-400 transition hover:text-green-500"
            >
              <span className="sr-only">Whatsapp</span>
              <AiOutlineWhatsApp className="h-6 w-6" />
            </a>

            <a
              href="/#"
              className="text-gray-400 transition hover:text-purple-500"
            >
              <span className="sr-only">Instagram</span>
              <FiInstagram className="h-6 w-6" />
            </a>

            <a
              href="/#"
              className="text-gray-400 transition hover:text-red-500"
            >
              <span className="sr-only">YouTube</span>
              <FiYoutube className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021 - {ano} Vinicius Melo Coach
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
