import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function Forms() {
  return (
    <div className="container section">
      <Helmet>
        <title>Forms | {BASE_TITLE}</title>
        <meta name="description" content="CTK Forms – student registration and Gift Aid declaration forms for Croydon Tamil School." />
        <meta name="keywords" content={keywordsContent(['Forms', 'Registration', 'Gift Aid'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/forms" />
      </Helmet>
      <h2 className="title-bar">Forms</h2>
      <div className="callout note">
        <strong>Note to new parents:</strong> Kind request to all new parents, please download, sign and return "Student registration form" & "Gift Aid declaration form" to CTK.
      </div>
      <p>Download and access CTK forms here.</p>
      <ul>
        <li>
          <a href="/ctk/forms/CTKStudentRegistrationForm.pdf" target="_blank" rel="noopener" download>
            Student Registration Form (PDF)
          </a>
        </li>
        <li>
          <a href="/ctk/forms/CTKGiftAidDeclaration.pdf" target="_blank" rel="noopener" download>
            Gift Aid Declaration (PDF)
          </a>
        </li>
      </ul>
    </div>
  );
}
