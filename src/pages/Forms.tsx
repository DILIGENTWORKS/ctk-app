import React from 'react';

export default function Forms() {
  return (
    <div className="container section">
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
