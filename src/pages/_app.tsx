/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';
import { MenuProvider } from '../hooks/useMenu';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;
