import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Card.module.css';

const Card = ({ cardTitle, cardImage, src }) => {
  return (
    <div className=" border-0 rounded-0 align-items-center">
      <div>
        <iframe
          width="300"
          height="250"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>

      <div className="card-body text-center mt-4">
        <h5 className="card-title text-capitalize fw-semibold">{cardTitle}</h5>
      </div>
    </div>
  );
};

export default Card;
