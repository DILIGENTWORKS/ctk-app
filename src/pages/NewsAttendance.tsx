import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function NewsAttendance() {
  return (
    <div className="container section">
      <Helmet>
        <title>Attendance Guideline | {BASE_TITLE}</title>
        <meta name="description" content="CTK Attendance Guideline – recommended attendance for students at Croydon Tamil School (Croydon Tamizh Kazhagam)." />
        <meta name="keywords" content={keywordsContent(['Attendance', 'Tamil Students in UK'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/news-events/attendance-guideline" />
      </Helmet>
      <h2 className="title-bar">Attendance Guideline</h2>
      <p>UK school guidelines recommends that each student should meet a minimum attendance criteria, which is 85%. In CTK, the attendance criteria is minimum 75%.</p>
      <p>Over the past few years, one of our observations on the exam result has been that the students who are regular to school usually achieve the best results.</p>
      <p><strong>Our sincere request to all parents</strong> is: Drop the children to Tamil school every week. This would not only improve the attendance but also help the students to prepare for the exams well.</p>
      <p>Please be aware that all our teachers are volunteers; they are very committed and they are putting their best effort to teach our children and help the community while we are away from home.</p>
      <p>Please commit one hour per week for the best interest of our children and make the teachers and CTK proud for the work they do!</p>
      <p>Thanks for all your support as always!</p>
    </div>
  );
}
