import HeadingTwo from '@/components/headingTwo/HeadingTwo';
import React from 'react';

const Discussion = () => {
  return (
    <div className="text-center py-5">
      <div className="container">
        <HeadingTwo title={'panel Discussion'} />
        <iframe width="100%" style={{height: "80vh"}} src="https://www.youtube.com/embed/mfEqfi7fqR8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>

        <hr />
      </div>
    </div>
  );
};

export default Discussion;
