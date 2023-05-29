import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Vision.module.css';

const Vision = () => {
  return (
    <section className={`${styles.vision}`} id="vision">
      <div className="container">
        <div className="row gap-4">
          <div className="col">
            <h2 className="mb-3"> The vision of the conference</h2>
            <p>
            The GASB Conference is uniting an international business 
community, whereby influential Egyptian and global 
government, business leaders and financiers will critically discuss 
and focus on strategic alliances, across industries and 
geographies, for business growth and sustainability.
This international event provides the stage for a high-level 
strategic industry dialogue, through its esteemed conference 
speakers, conference panel, dynamic workshops, and delegates
            </p>
          </div>
          <div className="col-lg-6">
            <Image
              src={`/images/vision.png`}
              className="img-fluid"
              width={735}
              height={649}
              alt="header img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
