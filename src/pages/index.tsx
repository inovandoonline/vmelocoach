import Head from 'next/head';
import EmpresasQueUsam from '../components/Areas/EmpresasQueUsam';
import SobreCoaching from '../components/Areas/SobreCoaching';
import FaleComigo from '../components/FaleComigo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Melo Coach</title>
      </Head>
      <Hero />
      <SobreCoaching />
      <EmpresasQueUsam />
      <FaleComigo />
      <Footer />
    </>
  );
}
