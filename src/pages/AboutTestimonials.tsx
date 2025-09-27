import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function AboutTestimonials() {
  return (
    <div className="container section">
      <Helmet>
        <title>Testimonials | {BASE_TITLE}</title>
        <meta name="description" content="CTK Testimonials – words from our Croydon Tamil School community and parents." />
        <meta name="keywords" content={keywordsContent(['Testimonials', 'Croydon Tamil School'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/about/testimonials" />
      </Helmet>
      <h2 className="title-bar">Testimonials</h2>
      <p>Testimonials content will be curated and added here. For reference, see the official CTK testimonials page.</p>
    </div>
  );
}
