import { TBCCloseContactCardProps } from '@/type';
import React from 'react';

function TBCCloseContactCard({
  name,
  address,
  relation,
  phone,
}: TBCCloseContactCardProps) {
  return (
    <div className="p-3 border rounded text-xs grid grid-rows-4 gap-4 items-center grid-tbc-close-contact">
      <p className="font-bold">Nama</p>
      <p>{name}</p>
      <p className="font-bold">Alamat</p>
      <p>{address}</p>
      <p className="font-bold">Hubungan</p>
      <p>{relation}</p>
      <p className="font-bold">Nomor HP</p>
      <p>{phone}</p>
    </div>
  );
}

export default TBCCloseContactCard;
