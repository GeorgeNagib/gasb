import HeadingTwo from '@/components/headingTwo/HeadingTwo';
import React from 'react';
import Card from '@/components/card/Card';
const information = [
  {
    name: 'Mr Essam Hilal Afify',
    id: 1,
    src: '/images/header.png',
    url: 'https://www.youtube.com/embed/lAX6jpjGh6U',
  },
  {
    name: 'Professor Dr Ibrahim Abdel Aziz Hegazy ',
    id: 2,
    src: '/images/header.png',
    url: 'https://www.youtube.com/embed/gtcktf6OAFE',
  },
  {
    name: 'Ms Christina Karim',
    id: 3,
    src: '/images/header.png',
    url: 'https://www.youtube.com/embed/KnTm74oCVnw',
  },
  {
    name: 'Mr Ehab Raafat',
    id: 4,
    src: '/images/header.png',
    url: 'https://www.youtube.com/embed/W2nWM_byUug',
  },
  {
    name: 'Dr Yousry El Sharkawy',
    id: 5,
    src: '/images/header.png',
    url: 'https://www.youtube.com/embed/mfEqfi7fqR8',
  },
];

const Speeches = () => {
  return (
    <div
      className="
    text-center"
    >
      <div className="container">
        <HeadingTwo title={'speeches'} />
        <div className="row justify-content-center">
          {information.map((item) => (
            <div key={item.id} className="col mb-5">
              <Card cardTitle={item.name} cardImage={item.src} src={item.url} />
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Speeches;
