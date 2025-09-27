import React from 'react';

export default function AboutFees() {
  return (
    <div className="container section">
      <h2 className="title-bar">Fees & Payments</h2>
      <h3>Basic fees for a Term</h3>
      <ul>
        <li>Term fees payment for 1 kid: £35</li>
        <li>Term fees payment for 2 kids: £70</li>
        <li>Book Price: £7</li>
      </ul>
      <p>
        Please reach out to the treasurer for more details
        {' '}
        <a
          href="mailto:info@croydontamizhkazhagam.org.uk"
          onClick={(e) => {
            // Some dev environments may intercept anchor clicks; force navigation
            e.preventDefault();
            window.location.href = 'mailto:info@croydontamizhkazhagam.org.uk';
          }}
        >
          info@croydontamizhkazhagam.org.uk
        </a>
      </p>
    </div>
  );
}
