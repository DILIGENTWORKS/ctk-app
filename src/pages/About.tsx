import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function About() {
  return (
    <div className="container section">
      <Helmet>
        <title>About Us | {BASE_TITLE}</title>
        <meta name="description" content="About Croydon Tamizh Kazhagam (CTK) – Croydon Tamil School in the UK. Our mission, Tamil classes, community and culture." />
        <meta name="keywords" content={keywordsContent(['About', 'Croydon Tamil School', 'Tamil School UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/about" />
      </Helmet>
      <h2 className="title-bar">About Us</h2>

      <div className="quote-card">
        <div className="title-bar title-bar--light">யாதும் ஊரே!! யாவரும் கேளிர்!!</div>
        <p className="quote-sub">(To us all towns are one, all beings are our kin)</p>
        <p className="quote-attrib">
          — Kaniyan Poongunranar, Tamil philosopher from the Sangam Age (Spanning the 3rd century BC to 4th century AD). The quote is at present depicted in the United Nations Organizations.
        </p>
      </div>

      <p>
        First and foremost, Croydon Tamizh Kazhagam (CTK) is a place of learning. CTK is a charitable organisation (Charity number: 1200988) that
        advocates Tamil Education for children of Tamil Families from Tamil Nadu (India), settled in the United Kingdom (UK).
      </p>

      <h3 className="title-bar title-bar--light">We promote the learning of the Tamil language and culture by</h3>
      <ul>
        <li>Conducting Tamil classes every Saturday 02:30 PM - 03:30 PM (academic year) at Harris Academy Purley, Kendra Hall Road, South Croydon CR2 6DT</li>
        <li>Holding events in each term to enable children exhibit their talents in speech, drama, dance and song.</li>
        <li>Nurturing in Children Creativity, Culture and Education.</li>
      </ul>

      <p>
        We are blessed to have pleasant and highly motivated teachers and enthusiastic parents. All our teachers are DBS certified and as a team, we are committed to
        providing a safe, inspiring and caring platform for children to learn Tamil.
      </p>
      <p>
        We are supported by one of the affordable fee support scheme and generous contributions from our trustees, teachers, parents, friends and relatives.
      </p>
    </div>
  );
}
