/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import BeneficioPessoal from '../components/Areas/Beneficios/Pessoal';
import BeneficioProfissional from '../components/Areas/Beneficios/Profissional';
import EmpresasQueUsam from '../components/Areas/EmpresasQueUsam';
import FAQ from '../components/Areas/FAQ';
import Palestras from '../components/Areas/Palestras';
import SobreCoaching from '../components/Areas/SobreCoaching';
import Testemunho from '../components/Areas/Testemunho';
import Topico from '../components/Areas/Topico';
import Valor from '../components/Areas/Valor';
import FaleComigo from '../components/FaleComigo';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Vinicius Melo Coach</title>
        <meta
          name="description"
          content="Analista de Perfil Comportamental, pela Federação Brasileira de Coaching Integral Sistêmico - FEBRACIS, Com formação acadêmica em História e Direito."
        />
        <meta property="og:title" content="Vinicius Melo Coach" />
        <meta
          property="og:description"
          content="Analista de Perfil Comportamental, pela Federação Brasileira de Coaching Integral Sistêmico - FEBRACIS, Com formação acadêmica em História e Direito."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://vmelocoach.com/" />
        <meta
          property="og:image"
          content="http://d33wubrfki0l68.cloudfront.net/afcfdb7dc2bd5462794996e1182ff632a4e68544/10ce6/images/analise.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Vinicius Melo Coach" />
        <meta
          property="twitter:image"
          content="http://d33wubrfki0l68.cloudfront.net/afcfdb7dc2bd5462794996e1182ff632a4e68544/10ce6/images/analise.jpg"
        />
        <meta name="twitter:title" content="Vinicius Melo Coach" />
        <meta
          name="twitter:description"
          content="Analista de Perfil Comportamental, pela Federação Brasileira de Coaching Integral Sistêmico - FEBRACIS, Com formação acadêmica em História e Direito."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
        <meta name="apple-mobile-web-app-title" content="Vinicius Melo Coach" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Hero />
      <SobreCoaching />
      <BeneficioPessoal />
      <Topico />
      {/* <EmpresasQueUsam /> */}
      {/* <Testemunho /> */}
      {/* <BeneficioProfissional /> */}
      <Palestras />
      {/* <Valor /> */}
      <FAQ />
      <FaleComigo />
      <Footer />
    </>
  );
}
