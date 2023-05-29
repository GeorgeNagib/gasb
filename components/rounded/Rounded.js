import React from 'react';
import Image from 'next/image';

const Rounded = ({imgSrc}) => {
  return (
    <div style={{ width: '16rem', height: '16rem', margin: 'auto' }}>

      <div className="rounded-circle w-100 h-100">
      <Image
        src={imgSrc}
        className="rounded-circle img-fluid"
        width={728}
        height={700}
        alt="header img"
        style={{ height: '100% !important' }}/>
      </div>
    </div>
  );
};

export default Rounded;
