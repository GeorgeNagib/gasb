import Image from 'next/image';
import React from 'react';

import styles from '../../styles/AgendaCard.module.css';



const AgendaCard = ({
  img,
  name,
  position,
  date,
  startTime,
  endTime,
  title,
  desc,
  secondTitle
}) => {

  return (
    <div className={styles.agendaCard}>
      <div className="container">
        <div className="row gap-md-5 gap-4">
          <div className="col">


            
              <div className={styles.date}>
                <h4 className="fs-6">{date}</h4>
                <p className=" d-flex flex-column">
                  <span> Start: {startTime}</span>
                  <span> End: {endTime}</span>
                </p>
              </div>
            
          </div>

      

          <div className="col">
            <h4>{title}</h4>
          </div>
          <div className="col-lg-5">
            <h4 className='fw-bold'>{secondTitle}</h4>
            <p className={styles.p}>{desc}</p>
          
          </div>
        </div>
      </div>
      <hr className="text-light mt-5" />
    </div>
  );
};

export default AgendaCard;
