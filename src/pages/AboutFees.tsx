import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function AboutFees() {
  return (
    <div className="container section">
      <Helmet>
        <title>Fees & Payments | {BASE_TITLE}</title>
        <meta name="description" content="CTK Fees & Payments – term fees and book price for Croydon Tamil School (Croydon Tamizh Kazhagam) in the UK." />
        <meta name="keywords" content={keywordsContent(['Fees', 'Payments', 'Tamil School UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/about/fees" />
      </Helmet>
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
