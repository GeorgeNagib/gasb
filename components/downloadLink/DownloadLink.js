import React from 'react';

const DownloadLink = ({ link, text }) => {
  return (
    <a
      style={{ color: 'var(--link)', textDecoration: 'none' }}
      className="fw-semibold"
      href={link}
      download
    >
      Download {text}
    </a>
  );
};

export default DownloadLink;
