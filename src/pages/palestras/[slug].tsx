import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PalestraDTO from '../../dtos/palestraDTO';

interface PalestraSlugProps {
  palestra: PalestraDTO;
}

export default function PalestraSlug({
  palestra,
}: PalestraSlugProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`Vinícius Melo Coach - ${palestra.titulo}`}</title>
        <meta name="description" content={palestra.conteudoClean} />
        <meta
          property="og:title"
          content={`Vinícius Melo Coach - ${palestra.titulo}`}
        />
        <meta property="og:description" content={palestra.conteudoClean} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://vmelocoach.com/${palestra.slug}`}
        />
        <meta
          property="og:image"
          content="http://d33wubrfki0l68.cloudfront.net/afcfdb7dc2bd5462794996e1182ff632a4e68544/10ce6/images/analise.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:site_name"
          content={`Vinícius Melo Coach - ${palestra.titulo}`}
        />
        <meta
          property="twitter:image"
          content="http://d33wubrfki0l68.cloudfront.net/afcfdb7dc2bd5462794996e1182ff632a4e68544/10ce6/images/analise.jpg"
        />
        <meta
          name="twitter:title"
          content={`Vinícius Melo Coach - ${palestra.titulo}`}
        />
        <meta name="twitter:description" content={palestra.conteudoClean} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="blue" />
        <meta
          name="apple-mobile-web-app-title"
          content={`Vinícius Melo Coach - ${palestra.titulo}`}
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Header />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <Link href="/#palestras">
              <button
                type="button"
                className="bg-gray-100 p-4 rounded-full shadow text-blue-600"
              >
                <FiArrowLeft />
              </button>
            </Link>
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Palestra
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {palestra.titulo}
              </span>
            </h1>
          </div>
          <div
            className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: palestra.conteudo }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/inovandoonline/vmelocoach/main/public/content/palestras.json',
  );
  const pals = await response.json();
  const paths = pals.map(({ slug }: PalestraDTO) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const consulta = await fetch(
    'https://raw.githubusercontent.com/inovandoonline/vmelocoach/main/public/content/palestras.json',
  );
  const response = await consulta.json();
  const palestra = response.find((p: PalestraDTO) => p.slug === slug);
  console.log(palestra);
  return {
    props: {
      palestra,
    },
  };
};
