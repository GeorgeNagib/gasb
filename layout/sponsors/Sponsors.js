import Image from 'next/image';
import React from 'react';

const Sponsors = () => {
  const sponsors1 = [
    {
      src: '/images/modern.png',
      id: 1,
    },
    {
      src: '/images/ora.png',
      id: 2,
    },
    {
      src: '/images/modern.png',
      id: 3,
    },
    {
      src: '/images/Ram Marine.png',
      id: 4,
    },
    {
      src: '/images/venture.png',
      id: 5,
    },
    {
      src: '/images/n.png',
      id: 6,
    },
    {
      src: '/images/AbouelhoulLogo Source tours and travel 1.png',
      id: 7,
    },
    {
      src: '/images/mosaada.png',
      id: 8,
    },
  ];
  const sponsors2 = [
    {
      src: '/images/REBC 1.png',
      id: 9,
    },
    {
      src: '/images/EAC Logo 1.png',
      id: 10,
    },
    {
      src: '/images/GEO_LOGO_TAGLINE_RGB 1.png',
      id: 11,
    },
    {
      src: '/images/EGGBC logo main 1.png',
      id: 12,
    },
    {
      src: '/images/thumbnail_EcoStrategies - Logo - Original - Colored 1.png',
      id: 13,
    },
    {
      src: '/images/Movenpick logo-1 1.png',
      id: 14,
    },
    {
      src: '/images/image 11.png',
      id: 15,
    },
    {
      src: '/images/Asset 1 11.png',
      id: 16,
    },

    {
      src: '/images/WhatsApp Image 2023-01-06 at 10.00 1.png',
      id: 18,
    },
    {
      src: '/images/image 8.png',
      id: 19,
    },
    {
      src: '/images/1 1.png',
      id: 20,
    },
  ];
  return (
    <section className="sponsors text-center py-5" id="sponsors">
      <div className="container-fluid">
        <h2 className="mb-5">Sponsors & Strategic Partners</h2>
        <div className="container">
          <div className="row mb-4">
            {sponsors1.map((sponsor) => (
              <div className="col" key={sponsor.id}>
                <Image
                  src={sponsor.src}
                  alt={`sponsor ${sponsor.id}`}
                  width={110}
                  height={106}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          {sponsors2.map((sponsor) => (
            <div className="col" key={sponsor.id}>
              <Image
                src={sponsor.src}
                alt={`sponsor ${sponsor.id}`}
                width={110}
                height={96}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
