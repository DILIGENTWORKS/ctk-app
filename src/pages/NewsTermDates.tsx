import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function NewsTermDates() {
  return (
    <div className="container section">
      <Helmet>
        <title>Term Dates | {BASE_TITLE}</title>
        <meta name="description" content="CTK Term Dates – academic term calendar for Croydon Tamil School (Croydon Tamizh Kazhagam)." />
        <meta name="keywords" content={keywordsContent(['Term Dates', 'Tamil Students in UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/news-events/term-dates" />
      </Helmet>
      <h2 className="title-bar">Term Dates</h2>
      <p><em>Note: Dates are subject to change.</em></p>

      <figure className="term-calendar">
        <img src="/ctk/term-dates/termdates2026.jpeg" alt="CTK Term Dates Calendar" />
        <figcaption>CTK Term Dates Calendar</figcaption>
      </figure>
    </div>
  );
}
