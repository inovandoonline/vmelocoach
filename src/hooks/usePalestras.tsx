import React, { createContext, useContext } from 'react';
import PalestraDTO from '../dtos/palestraDTO';

interface PalestrasContextDTO {
  palestras: PalestraDTO[];
}

const PalestrasContext = createContext<PalestrasContextDTO | null>(null);

export const palestras = [
  {
    titulo: 'O Poder da Autoresponsabilidade',
    slug: 'o-poder-da-autoresponsabilidade',
    conteudo:
      '<p>Este é um curso de imersão, com conteúdo estruturado para você colocar em prática todas as suas metas.</p><p>Deixar de lado todas as desculpas que te fazem procrastinar decisões e ações significa se auto responsabilizar pela sua vida.</p><p>O treinamento tem é baseado no livro “O poder da <b>Autorresponsabilidade</b>”, de autoria de Paulo Vieira.</p><p>Aprenda a utilizar as seis leis da autorresponsabilidade para viver uma vida equilibrada e sistêmica, livre das crenças limitantes e dos comportamentos tóxicos.</p>',
    conteudoClean:
      'Este é um curso de imersão, com conteúdo estruturado para você colocar em prática todas as suas metas. Deixar de lado todas as desculpas que te fazem procrastinar decisões e ações significa se auto responsabilizar pela sua vida. O treinamento tem é baseado no livro “O poder da Autorresponsabilidade”, de autoria de Paulo Vieira. Aprenda a utilizar as seis leis da autorresponsabilidade para viver uma vida equilibrada e sistêmica, livre das crenças limitantes e dos comportamentos tóxicos.',
  },
  {
    titulo: 'O Poder da Ação',
    slug: 'o-poder-da-acao',
    conteudo:
      "<p>O que está entre o seu atual momento e os seus sonhos? A ação. Afinal, as conquistas estão diretamente relacionadas às ações que você emprega para conquistá-las.</p><p>A palestra “O poder da Ação” vai ser o seu pontapé inicial para aproveitar todas as oportunidades que aparecem na sua vida.</p><p>O primeiro ponto da caminhada em direção aos seus sonhos é acreditar. Isso mesmo: acreditar que você é capaz de alcançar o <a href='https://febracis.com/desculpas-que-impedem-alcancar-sucesso/'>sucesso</a> e que os recursos estão aí, disponíveis para a sua vitória.</p><p>O curso é ministrado de acordo com as sessões de Coaching Integral Sistêmico, metodologia adotada pelo instituto Febracis, e pelo livro homônimo do Master Coach Paulo Vieira.</p>",
    conteudoClean:
      "O que está entre o seu atual momento e os seus sonhos? A ação. Afinal, as conquistas estão diretamente relacionadas às ações que você emprega para conquistá-las. A palestra “O poder da Ação” vai ser o seu pontapé inicial para aproveitar todas as oportunidades que aparecem na sua vida. O primeiro ponto da caminhada em direção aos seus sonhos é acreditar. Isso mesmo: acreditar que você é capaz de alcançar o <a href='https://febracis.com/desculpas-que-impedem-alcancar-sucesso/'>sucesso</a> e que os recursos estão aí, disponíveis para a sua vitória. O curso é ministrado de acordo com as sessões de Coaching Integral Sistêmico, metodologia adotada pelo instituto Febracis, e pelo livro homônimo do Master Coach Paulo Vieira.",
  },
  {
    titulo: 'Poder e Alta Performance',
    slug: 'poder-e-alta-performance',
    conteudo:
      '<p>Sabe aquela teoria do cubo mágico imperfeito? Quando você finalmente consegue deixar um lado de uma cor só, os outros lados ficam uma bagunça, cada um com várias cores diferentes?</p><p>Pois é, a vida não precisa ser assim. É possível extrair o melhor de cada área da vida e atingir a plenitude em tudo o que fazemos.</p><p>Para isso, existe o curso de Poder e Alta Performance, onde você exerce todo o seu potencial para manifestar abundância e ter resultados incríveis no amor, na família, no trabalho e no <a href="https://febracis.com/?s=autoconhecimento">autoconhecimento</a>.</p><p>Também baseado na obra de Paulo Vieira, você aprenderá neste curso as técnicas de Coaching Integral Sistêmico para aplicar na sua vida e de quem está a seu redor, atingindo os resultados esperados.</p>',
    conteudoClean:
      'Sabe aquela teoria do cubo mágico imperfeito? Quando você finalmente consegue deixar um lado de uma cor só, os outros lados ficam uma bagunça, cada um com várias cores diferentes? Pois é, a vida não precisa ser assim. É possível extrair o melhor de cada área da vida e atingir a plenitude em tudo o que fazemos. Para isso, existe o curso de Poder e Alta Performance, onde você exerce todo o seu potencial para manifestar abundância e ter resultados incríveis no amor, na família, no trabalho e no <a href="https://febracis.com/?s=autoconhecimento">autoconhecimento</a>. Também baseado na obra de Paulo Vieira, você aprenderá neste curso as técnicas de Coaching Integral Sistêmico para aplicar na sua vida e de quem está a seu redor, atingindo os resultados esperados.',
  },
  {
    titulo: 'Decifre e Influencie Pessoas',
    slug: 'decifre-e-influencie-pessoas',
    conteudo:
      '<p>O curso Foco na Prática é um excelente treino para conquistar um modelo mental de uma pessoa de sucesso. É também um antídoto para procrastinação.</p><p>Ao identificar e eliminar distrações ao longo da jornada, os seus <b>objetivos</b> são atingidos com mais rapidez, economizando energia vital.</p><p>O treinamento é baseado no workbook de mesmo nome e propõe exercícios de reflexão que conduzem o coachee (denominação dada às pessoas em formação no Coaching Integral Sistêmico) a atingir a plenitude.</p>',
    conteudoClean:
      'O curso Foco na Prática é um excelente treino para conquistar um modelo mental de uma pessoa de sucesso. É também um antídoto para procrastinação. Ao identificar e eliminar distrações ao longo da jornada, os seus <b>objetivos</b> são atingidos com mais rapidez, economizando energia vital. O treinamento é baseado no workbook de mesmo nome e propõe exercícios de reflexão que conduzem o coachee (denominação dada às pessoas em formação no Coaching Integral Sistêmico) a atingir a plenitude.',
  },
  {
    titulo: 'Revolucione Carreiras e Negócios',
    slug: 'revolucione-carreiras-e-negocios',
    conteudo:
      'Esta é uma palestra que irá maximizar os seus resultados pessoais e financeiros, te conduzindo para outro nível da sua carreira.</p><p>Aqui você aprenderá a:  <ul>    <li>Lidar com personalidades diferentes da sua</li>    <li>Vencer os desafios relacionados à convivência</li>    <li>Gerenciar conflitos e mediar situações de estresse</li>    <li>Identificar o que te impede de evoluir na sua carreira ou negócios</li>  </ul></p><p>Todo profissional, independente do seu cargo ou ramo de atuação, pode e deve entender o perfil comportamental dos seus colegas, como um líder.</p><p>Usando as ferramentas ensinadas nos cursos e palestras desenvolvidos pela Febracis, você irá desenvolver seu <a href="https://febracis.com/curso/foco-na-pratica/">foco</a>, autoconhecimento e poder de alta <a href="https://febracis.com/teoria-das-inteligencias-multiplas/">performance</a>. Assim, irá quebrar ciclos de insatisfação e conquistar resultados <a href="https://febracis.com/motivacao-nas-organizacoes-impacto/">extraordinários</a>.</p>',
    conteudoClean:
      'Esta é uma palestra que irá maximizar os seus resultados pessoais e financeiros, te conduzindo para outro nível da sua carreira.<p>Aqui você aprenderá a:  <ul>    <li>Lidar com personalidades diferentes da sua</li>    <li>Vencer os desafios relacionados à convivência</li>    <li>Gerenciar conflitos e mediar situações de estresse</li>    <li>Identificar o que te impede de evoluir na sua carreira ou negócios</li>  </ul><p>Todo profissional, independente do seu cargo ou ramo de atuação, pode e deve entender o perfil comportamental dos seus colegas, como um líder.<p>Usando as ferramentas ensinadas nos cursos e palestras desenvolvidos pela Febracis, você irá desenvolver seu <a href="https://febracis.com/curso/foco-na-pratica/">foco</a>, autoconhecimento e poder de alta <a href="https://febracis.com/teoria-das-inteligencias-multiplas/">performance</a>. Assim, irá quebrar ciclos de insatisfação e conquistar resultados <a href="https://febracis.com/motivacao-nas-organizacoes-impacto/">extraordinários</a>.',
  },
];

const PalestrasProvider: React.FC = ({ children }) => {
  return (
    <PalestrasContext.Provider value={{ palestras }}>
      {children}
    </PalestrasContext.Provider>
  );
};

function usePalestras(): PalestrasContextDTO {
  const context = useContext(PalestrasContext);

  if (!context) {
    throw new Error(`usePalestras must be used within a PalestrasProvider`);
  }

  return context;
}

export { PalestrasProvider, usePalestras };
