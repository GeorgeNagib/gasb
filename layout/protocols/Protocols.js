import HeadingTwo from '@/components/headingTwo/HeadingTwo';
import Rounded from '@/components/rounded/Rounded';
import React from 'react';
import styles from '../../styles/Protocols.module.css';
import Image from 'next/image';

const Protocols = () => {
  return (
    <div className={`${styles.protocols}`}>
      <div className="container text-center">
        <HeadingTwo title={'protocols'} />
        <div className={`${styles.containerPro}`}>
          <div className={`mb-4 ${styles.banner}`}>
            <Image
              src={`/images/header.png`}
              className="h-100 w-100"
              width={728}
              height={700}
              alt="header img"
            />
          </div>
          <div>
            <div className="d-flex flex-wrap align-items-center gap-5 mb-5">
              <Rounded imgSrc="/images/ain-shams.jpeg" />
              <Rounded imgSrc="/images/novo.png"/>
            </div>
          </div>
          <div className="mb-5">
            <p>
              <strong className='fs-5'>• Protocol signed between Modern Marble Company and Ain Shams University's Engineering College.</strong> <br/> <br/>
              The protocol aims to develop the marble industry. The engineering team of Ain Shams University, with its specialized scientific and technical expertise in this field, will design and implement an advanced imaging machine that will capture images of marble slabs passing through traffic (large-sized slabs that are beyond the scope of X-ray devices currently available in the Egyptian market). (Machine prototype in the demo area of TUB Entrance) <br/> <br/>
              <i>• Between Mr. Atef Gamal, Vice Chairman of Modern Marble's Board of Directors</i> <br/>
              <i>• And Dr. Ahmed El-Sabbagh</i>
            </p>
            <hr></hr>
            <p className='mt-3'>
              <strong className='fs-5'>• Protocol signed between Modern Construction Company and Novokem Company.</strong> <br/> <br/>
              The protocol aims to develop the marble and granite industry using the processed, developed, safe, and manufactured chemical materials at Novokem's factory in order to achieve the highest percentage of development according to global specifications in the Arab Republic of Egypt.<br/> <br/>
              <i>• Between Mr. Sameh Hamdy, Chairman of Modern Construction's Board of Directors</i> <br/>
              <i>• And Mr. Hussein Ahmed Hussein, CEO of Novokem Company.</i>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Protocols;
