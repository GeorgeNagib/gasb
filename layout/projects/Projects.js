import { useRef } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeadingTwo from '@/components/headingTwo/HeadingTwo';
import styles from '../../styles/Projects.module.css';

const Projects = () => {
  const sliderRef = useRef(null);

  const projects = [
    {
      projectTitle: 'Modern Quartz ',
      description: `presented by Mr. Ramez Georges, CEO and Managing Director of Modern Marble.`,
      src: '/images/project.png',
      id: 0,
      nextProject: 'Orascom for Industrial Zones ',
    },
    {
      projectTitle: 'Orascom for Industrial Zones ',
      description: `New Horizons West and East - presented by Engineer Amr Al-Batarik, CEO and Board Member of Orascom for Industrial Zones.`,
      src: '/images/project.png',
      id: 1,
      nextProject: 'Mosaada',
    },{
      projectTitle: 'Mosaada',
      description: `presented by Engineer Nadi Malak, Board Member and Executive Director of Development Management at Abu Al-Houl for Transport and Commercial Agencies.`,
      src: '/images/project.png',
      id: 2,
      nextProject: 'Run for Good',
    },
    {
      projectTitle: 'Run for Good',
      description: `A initiative supported by the star Ahmed El-Saka - supporting the "Run for Good" initiative for cancer hospitals in Upper Egypt.`,
      src: '/images/project.png',
      id: 3,
      nextProject: 'Modern Quartz',
    },
  ];
  return (
    <section className={`${styles.projects}`} id="projects">
      <div className="container">
        <HeadingTwo title={'project investments'} />

        <Carousel
          ref={sliderRef}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
        >
          {projects.map((project) => (
            <div
              className="row gap-4 flex-column-reverse flex-lg-row"
              key={project.id}
            >
              <div className="col mt-5">
                <h3 className="mb-4 text-uppercase">{project.projectTitle}</h3>
                <p className="mb-4 text-start">{project.description}</p>
              </div>
              <div className="col-lg-7">
                <div className="d-flex justify-content-end mb-4 gap-2">
                  <span onClick={() => sliderRef.current.onClickNext()} className="text-capitalize" style={{cursor: "pointer"}}>{project.nextProject}</span>
                  <div
                    className={`fs-4 ${styles.arrow}`}
                    onClick={() => sliderRef.current.onClickNext()}
                  >
                    <Image
                      src={`/images/arrow.svg`}
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </div>
                </div>
                <Image
                  src={project.src}
                  className="img-fluid"
                  width={728}
                  height={700}
                  alt="header img"
                  priority
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
