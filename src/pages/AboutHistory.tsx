import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function AboutHistory() {
  return (
    <div className="container section">
      <Helmet>
        <title>Our History | {BASE_TITLE}</title>
        <meta name="description" content="History of Croydon Tamizh Kazhagam (CTK) – Croydon Tamil School. Our origins, growth, and commitment to Tamil education in the UK." />
        <meta name="keywords" content={keywordsContent(['Our History', 'Croydon Tamil School', 'Tamil Sangam UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/about/history" />
      </Helmet>
      <h2 className="title-bar">Our History</h2>
      <h3>Founded</h3>
      <p>
        CTK began life as a school at Skanthasram Sri Murugan Temple, Thornton Heath, Croydon in May 2015.
        The seed for CTK was planted by Panneerselvam Thangavel and his wife Geetha Murugesan, after their
        visit to USA where they had seen children learning the Tamil language and Culture promoted by Greater
        Atlanta Tamil Sangam (GATS).
      </p>

      <h3>Orientation</h3>
      <p>
        Initially the Tamil classes were conducted at Sri Murugan Temple as provided by Sri. Narayanan and
        Sri. Sankara Gurukkal. To begin with a group of 12-15 children started learning Tamil taught by 6-7
        volunteer teachers. Most of these teachers are still part of the organisation and continue their
        good work for the promotion of Tamil. In July 2015, it was decided in the parents’ meeting that the
        Tamil classes should be conducted in a proper environment and a charity should be formed to govern
        the Tamil school and its finances.
      </p>

      <h3>School place now</h3>
      <p>
        Owing to the continuous efforts from the trustees, CTK is now offering Tamil education since May 2016
        and in October 2016, we have also become members of British Tamil Education Board (BTEB) in an effort
        to provide children with a structured program of study. BTEB offer a whole-school curriculum for 5 to
        19 year olds and conduct exams each year in June.
      </p>
    </div>
  );
}
