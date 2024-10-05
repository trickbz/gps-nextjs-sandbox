import Image from 'next/image';
import React from 'react';

import {Band} from '@/types/band.types';

interface BandListItemProps {
  band: Band;
}

export function BandListItem(props: BandListItemProps) {
  const {band} = props;
  const {name, image = '', description} = band;

  return (
    <div className="flex p-4 items-center border border-gray-300 mb-2 shadow-sm cursor-pointer hover:shadow-md bg-gray-100">
      <Image src={image} alt={name} width={100} height={100} className="pr-4" />
      <div className="w-[200px]">{name}</div>
      <div className="flex-auto">{description}</div>
    </div>
  );
}
