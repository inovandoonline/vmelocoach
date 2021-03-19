import React, { createContext, useContext } from 'react';

interface MenuLinkDTO {
  name: string;
  link: string;
  externo: boolean;
}

interface MenuContext {
  menuState: MenuLinkDTO[];
}

const MenuContext = createContext<MenuContext | null>(null);

const MenuProvider: React.FC = ({ children }) => {
  const menuState = [
    {
      name: 'Início',
      link: '/#inicio',
      externo: false,
    },
    {
      name: 'Coaching',
      link: '/#coaching',
      externo: false,
    },
    {
      name: 'Benefícios',
      link: '/#beneficios',
      externo: false,
    },
    {
      name: 'Palestras',
      link: '/#palestras',
      externo: false,
    },
    // {
    //   name: 'Quanto Custa',
    //   link: '/#quanto-custa',
    //   externo: false,
    // },
    {
      name: 'Fale Comigo',
      link: '/#fale-comigo',
      externo: false,
    },
  ];

  return (
    <MenuContext.Provider value={{ menuState }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContext {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(`useMenu must be used within a MenuProvider`);
  }

  return context;
}

export { MenuProvider, useMenu };
