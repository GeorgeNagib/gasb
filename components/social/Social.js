import React from 'react';
import Image from 'next/image';

const Social = () => {
  return (
    <ul className="list-unstyled d-flex gap-3">
      <li>
        <a href="https://www.facebook.com/profile.php?id=100089034878898&mibextid=ZbWKwL">
          <Image
            src={`/images/facebook.svg`}
            width={32}
            height={32}
            alt="facebook"
          />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/gasbconference?igshid=YmMyMTA2M2Y=">
          <Image
            src={`/images/insta.svg`}
            width={32}
            height={32}
            alt="instagram "
          />
        </a>
      </li>
    </ul>
  );
};

export default Social;
