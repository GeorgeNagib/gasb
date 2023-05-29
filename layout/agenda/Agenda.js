import AgendaCard from '@/components/agendaCard/AgendaCard';
import React from 'react';
import styles from '../../styles/Agenda.module.css';

const Agenda = () => {
  const agenda = [
    {
     
      date: '19-01-23',
      startTime: '6:30 ',
      endTime: '8:30',
      title: 'Breakfast',
      secondTitle : 'Gallery Restaurant,Mövenpick',
      id: 1,
    },
    {
    
      date: '19-01-23',
      startTime: '8:30',
      endTime: '8:45',
      title: 'Depart for Workshops',
      secondTitle: ` Mövenpick Reception Area 
      `,
      id: 2,
    },
    {
  
      date: '19-01-23',
      startTime: '9:00 ',
      endTime: '11:00 ',
      title: 'Workshops',
      secondTitle: `TU Berlin. 
      `,
      id: 3,
    },
    {
   
      date: '19-01-23',
      startTime: '9:00 ',
      endTime: '11:00 ',
      title: 'B2B Meetings',
      secondTitle: `Sea Stars Room,
      Mövenpick. 
      `,
      id: 4,
    },
    {
   
      date: '19-01-23',
      startTime: '12:30 ',
      endTime: '14:30 ',
      title: 'Lunch',
      secondTitle: `Gallery Restaurant,
      Mövenpick. 
      `,
      id: 5,
    },
    {
   
      date: '19-01-23',
      startTime: '14:45 ',
      endTime: '15:00 ',
      title: 'Depart for GASB Conference',
      secondTitle: ` Mövenpick Reception Area 
      `,
      
      id: 6,
    },
    {
   
      date: '19-01-23',
      startTime: '15:15  ',
      endTime: '15:45 ',
      title: 'Registration',
      secondTitle: `Audiomax, TU Berlin. 
      `,
      id: 8,
    },
    {
   
      date: '19-01-23',
      startTime: '16:00 ',
      endTime: '19:00 ',
      title: 'GASB Conference',
      secondTitle: `Audiomax, TU Berlin. 
      `,
      id: 9,
    },{
   
      date: '19-01-23',
      startTime: '19:00 ',
      endTime: '22:00 ',
      title: 'Gala Dinner',
      secondTitle: `TU Berlin. 
      `,
      id: 10,
    },{
   
      date: '19-01-23',
      startTime: '22:00 ',
    
      title: 'Depart to Hotel',
      secondTitle: `TU Berlin,
      Main Entrance. 
      `,
      id: 11,
    },{
   
      date: '20-01-23',
      startTime: '16:00 ',
      endTime: '16:10 ',
      title: 'introduction andAgenda',
      secondTitle:'Dr Khaled Habib,',
      desc: `MC. 
      `,
      id: 12,
    },{
   
      date: '20-01-23',
      startTime: '16:10 ',
      endTime: '16:20 ',
      title: 'Welcome Speech',
      secondTitle:'MG Amr Hanafi,',
      desc: `Red Sea Governor 
      `,
      id: 13,
    },
    {
   
      date: '20-01-23',
      startTime: '16:20 ',
      endTime: '16:30 ',
      title: `The importance of business
      organizations in supporting intra-
      private investments between
      African and Arab countries`,
      secondTitle:'Dr Yousrey Elsharkawi,',
      desc: `Chairman of EABA
      Association & H.O.C.
      Economic Group. 
      `,
      id: 14,
    },{
   
      date: '20-01-23',
      startTime: '16:30 ',
      endTime: '16:40 ',
      title: 'Attijariwafa Bank Keynote speech ',
      secondTitle:'Mr. Mouawia Essekelli,',
      desc: `MD - Attijariwafa Bank Egypt
      `,
      id: 15,
    },{
   
      date: '20-01-23',
      startTime: '16:40 ',
      endTime: '16:50 ',
      title: 'Strategic Alliances',
      secondTitle:'Eng Amr El Batrik,',
      desc: `CEO, Orascom Industrial
      Parks. 
      `,
      id: 16,
    },{
   
      date: '20-01-23',
      startTime: '16:50  ',
      endTime: '17:00 ',
      title: 'Industrial Alliances',
      secondTitle:'Ramiz Gergs,',
      desc: `GM Modern Marble. 
      `,
      id: 17,
    },{
   
      date: '20-01-23',
      startTime: '17:00 ',
      endTime: '17:10 ',
      title: `Online Communication and
      Marketing in today Digital
      World to drive Sustainability`,
      secondTitle:'Dr Ibrahim Hegazy,',
      desc: `Prof. of Marketing, AUC;
      Former Member of the
      Egypt Parliament
      `,
      id: 18,
    },{
   
      date: '20-01-23',
      startTime: '17:30 ',
      endTime: '17:50 ',
      title: 'Projects Open for Investment',
      secondTitle: `Video. 
      `,
      id: 19,
    },{
   
      date: '20-01-23',
      startTime: '17:50 ',
      endTime: '18:30 ',
      title: 'Panel Discussion',
      secondTitle: `H.E. Soha Samir. 
      `,
      desc:`Minister of Emigration and
      Expatriates Affairs
      Abdel Wahab Al Rajhi,
      CEO, Al Raghi for Trading
      Eng Tarek El Gamal,
      Chairman, REDCON
      Milad Monir,
      CEO, Modern Group`,
      id: 20,
    },{
   
      date: '20-01-23',
      startTime: '18:30 ',
      endTime: '18:45 ',
      title: `Workshop Analysis &
      Recommendation`,
      secondTitle:'Eng Ahmed Shebl,',
      desc: `CEO, Modern Construction 
      `,
      id: 21,
    },{
   
      date: '20-01-23',
      startTime: '18:45',
      endTime: '19:00 ',
      title: 'Awards & Recognition',
      secondTitle:'Venture',
      
      id: 23,
    },{
   
      date: '20-01-23',
      startTime: '19:00 ',
      endTime: '22:00 ',
      title: 'TU Berlin',
      desc: `Gala Dinner. 
      `,
      id: 24,
    }
  ];
  return (
    <div className={styles.agenda} id="agenda">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="text-uppercase">Agenda</h2>
          </div>
          <div className="col-lg-5">
            <h3 className="text-capitalize">The schedule of The conference</h3>
            <p className="text-capitalize">
              follow the schedule of every day and you will have the greatest
              experience you can ever have not just in Egypt nor the middle
              east, but in the world
            </p>
          </div>
        </div>
        <hr className="text-light mt-4" />
        {agenda.map(
          ({
            img,
            name,
            position,
            date,
            startTime,
            endTime,
            title,
            desc,
            id,
            secondTitle
          }) => (
            <AgendaCard
              key={id}
              img={img}
              name={name}
              position={position}
              date={date}
              startTime={startTime}
              endTime={endTime}
              title={title}
              desc={desc}
              secondTitle={secondTitle}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Agenda;
