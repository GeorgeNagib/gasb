import Navbar from '@/components/navbar/Navbar';
import Social from '@/components/social/Social';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Navbar />
      <div className="container">
        <div className="row gap-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <Image
              src={`/images/header.png`}
              className="img-fluid"
              width={728}
              height={700}
              alt="header img"
              priority={true}
            />
          </div>
          <div className="col">
            <h1 className="mb-5">
              <span>Welcome to the</span>
              <br />
              Global Alliances for Sustainable Business
              <br />
              <span>Conference 2023 </span>
            </h1>
            <p className="mb-5">
            The GASB Conference is to bring together a global business community, including prominent leaders and financiers from Egypt and around the world, to engage in critical discussions about forming strategic partnerships for sustainable business growth. The conference will focus on forging alliances across various industries and regions.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
