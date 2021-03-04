import Link from 'next/link';
import React from 'react';
import { AiFillBulb } from 'react-icons/ai';
import PalestraDTO from '../../../../dtos/palestraDTO';

interface PalestraItemProps {
  palestra: PalestraDTO;
}

const PalestraItem: React.FC<PalestraItemProps> = ({ palestra }) => (
  <Link href={`/palestras/${palestra.slug}`}>
    <a href={`/palestras/${palestra.slug}`}>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        <AiFillBulb className="h-8 w-8" />
      </div>
      <div className="mt-5">
        <dt className="text-lg leading-6 font-medium text-gray-900">
          {palestra.titulo}
        </dt>
        <dd className="mt-2 text-base text-gray-500">{palestra.conteudo}</dd>
      </div>
    </a>
  </Link>
);

export default PalestraItem;
