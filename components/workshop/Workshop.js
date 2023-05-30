import { useRef } from 'react';
import Image from 'next/image';
import DownloadLink from '../downloadLink/DownloadLink';
import { Carousel } from 'react-responsive-carousel';

const Workshop = ({
  images,

  sumTitle,
  sumDesc,

  workLink,
  id,
}) => {
  const sliderRef = useRef(null);

  return (
    <div className="container text-start">
      <h3 className="capitalize fw-semibold">
        {id}. {sumTitle}
      </h3>
      <div className="row gap-5 mb-5">
        <div className="col ">
          <div className="mb-4">
            <div className="d-flex justify-content-end gap-2 mb-2">
              <Image
                src={`/images/left.svg`}
                width={20}
                height={20}
                alt="left"
                onClick={() => sliderRef.current.onClickPrev()}
                style={{ cursor: 'pointer' }}
              />
              <Image
                src={`/images/right.svg`}
                width={20}
                height={20}
                alt="right"
                onClick={() => sliderRef.current.onClickNext()}
                style={{ cursor: 'pointer' }}
              />
            </div>
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
              {images.map((item) => (
                <Image
                  key={item.id}
                  src={`${item.src}`}
                  style={{ height: '90vh', objectFit: 'cover' }}
                  width={728}
                  height={700}
                  alt="header img"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="summary">
        {sumDesc.map((desc, i) => (
          <p key={i} className="mb-2">
            {desc}
          </p>
        ))}
        <DownloadLink link={workLink} text={'workshop recommendations'} />
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Workshop;
