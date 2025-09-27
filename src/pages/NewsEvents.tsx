import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function NewsEvents() {
  return (
    <div className="container section">
      <Helmet>
        <title>News & Events | {BASE_TITLE}</title>
        <meta name="description" content="CTK News & Events – Tamil events, term dates, competitions and community updates at Croydon Tamil School." />
        <meta name="keywords" content={keywordsContent(['Tamil Events', 'Croydon Tamil Sangam', 'Croydon Tamil 10 years'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/news-events" />
      </Helmet>
      <h2 className="title-bar">CTK Events</h2>

      <h3>Dear Friends,</h3>
      <p><strong>Celebrating a Decade of Excellence</strong></p>
      <p>
        Over the past decade, we have witnessed remarkable growth and development in our students, thanks to your
        unwavering support and commitment to our mission.
      </p>

      <p><strong>Exciting Developments</strong></p>
      <p>
        We are also proud to announce that this year marks the beginning of our first batch of GCSE students. This is a
        significant milestone for CTK, and we are committed to providing them with the good quality education to ensure
        their success.
      </p>
      <p>
        Our next upcoming event is our <strong>Deepavali Event</strong> on <strong>26th October 2025</strong>.
        This will be a fun-filled entertainment with songs, dance performances, stage plays, and more. We
        encourage all parents to support their children in participating and to join us in celebrating this
        exciting occasion together.
      </p>
      <p><em>Further details regarding timings and registrations will be shared soon.</em></p>
    </div>
  );
}
