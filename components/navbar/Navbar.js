import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.margin}`}>
      <div className="container">
        <a
          className="navbar-brand d-lg-none d-sm-block d-md-block d-block"
          href="#"
        >
          <Image
            src="/images/GASB logo-01 (gold) (1) 1.png"
            alt="GASB logo"
            width="80"
            height="69"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`${styles.navIcon}`}>&#9776;</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0 gap-4 align-items-baseline">
            <li className="nav-item mt-3">
              <a className={`${styles.navLink}`} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#vision">
                vision
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#sponsors">
                partners
              </a>
            </li>
            <li className="nav-item d-sm-none d-md-none d-none d-lg-block">
              <a href="#">
                <Image
                  src="/images/GASB logo-01 (gold) (1) 1.png"
                  alt="GASB logo"
                  width="80"
                  height="69"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#agenda">
                agenda
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#projects">
                app
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
