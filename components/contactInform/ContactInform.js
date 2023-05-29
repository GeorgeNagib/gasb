import Image from 'next/image';
import React from 'react';

const ContactInform = ({ src, text, link, mail }) => {
  return (
    <div className="d-flex text-white gap-2 align-items-center">
      <Image src={src} alt="information" width={30} height={30} />

      {link ? <a href={link}>{link}</a> : <span>{text}</span>}
      {mail ? <a href={`mailto:${mail}`}>{mail}</a> : ''}
    </div>
  );
};

export default ContactInform;
