/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import BeneficioPessoal from '../components/Areas/Beneficios/Pessoal';
import BeneficioProfissional from '../components/Areas/Beneficios/Profissional';
import EmpresasQueUsam from '../components/Areas/EmpresasQueUsam';
import SobreCoaching from '../components/Areas/SobreCoaching';
import Testemunho from '../components/Areas/Testemunho';
import Valor from '../components/Areas/Valor';
import FaleComigo from '../components/FaleComigo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Vinicius Melo Coach</title>
      </Head>
      <Hero />
      <SobreCoaching />
      <EmpresasQueUsam />
      <BeneficioPessoal />
      <BeneficioProfissional />
      <Testemunho />
      <Valor />
      <FaleComigo />
      <Footer />
    </>
  );
}
