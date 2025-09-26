import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutHistory from './pages/AboutHistory';
import AboutTeam from './pages/AboutTeam';
import AboutFees from './pages/AboutFees';
import AboutTestimonials from './pages/AboutTestimonials';
import Forms from './pages/Forms';
import Contact from './pages/Contact';
import NewsTermDates from './pages/NewsTermDates';
import NewsAttendance from './pages/NewsAttendance';
import NewsEvents from './pages/NewsEvents';

function App() {
  const year = new Date().getFullYear();
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <Link className="logo" to="/" aria-label="CTK Home">
            <span className="logo-wrap">
              <img src="/ctk/logo/CTKLOGO.jpg" alt="Croydon Tamizh Kazhagam" className="logo-img" />
              <span className="logo-text">CROYDON TAMIZH KAZHAGAM</span>
            </span>
          </Link>
          <div className="menu">
            <NavLink to="/" end>Home</NavLink>
            <div className="dropdown">
              <NavLink className="dropbtn" to="/about">About Us</NavLink>
              <div className="dropdown-menu" role="menu">
                <NavLink to="/about/history" role="menuitem">Our History</NavLink>
                <NavLink to="/about/team" role="menuitem">Meet the Team</NavLink>
                <NavLink to="/about/fees" role="menuitem">Fees & Payments</NavLink>
                <NavLink to="/about/testimonials" role="menuitem">Testimonials</NavLink>
              </div>
            </div>
            <div className="dropdown">
              <NavLink className="dropbtn" to="/news-events" aria-haspopup="true" aria-expanded="false">News & Events</NavLink>
              <div className="dropdown-menu" role="menu">
                <NavLink to="/news-events" role="menuitem">Overview</NavLink>
                <NavLink to="/news-events/term-dates" role="menuitem">Term Dates</NavLink>
                <NavLink to="/news-events/attendance-guideline" role="menuitem">Attendance Guideline</NavLink>
              </div>
            </div>
            <NavLink to="/forms">Forms</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/fees" element={<AboutFees />} />
          <Route path="/about/testimonials" element={<AboutTestimonials />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/term-dates" element={<NewsTermDates />} />
          <Route path="/news-events/attendance-guideline" element={<NewsAttendance />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col footer-sitemap">
            <div className="footer-sitemap-grid">
              <img src="/ctk/logo/white-ctk-logo.png" alt="CTK" className="footer-logo footer-logo--large" />
              <h4 className="footer-sitemap-title">Sitemap</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/news-events/term-dates">News & Events</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><NavLink to="/about/history">Our History</NavLink></li>
              <li><NavLink to="/about/team">Meet the team</NavLink></li>
              <li><NavLink to="/about/fees">Fee Structure</NavLink></li>
              <li><NavLink to="/about/testimonials">Testimonials</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>News & Events</h4>
            <ul>
              <li><NavLink to="/news-events/term-dates">Term Dates</NavLink></li>
              <li><NavLink to="/news-events/attendance-guideline">Attendance Guideline</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="contact">
              <li><a href="https://www.facebook.com/CroydonTamizhKazhagam/" target="_blank" rel="noopener">Facebook</a></li>
              <li><a href="mailto:info@croydontamizhkazhagam.org.uk">info@croydontamizhkazhagam.org.uk</a></li>
              <li>Harris Academy Purley, Kendra Hall Road, South Croydon CR2 6DT</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container bottom-row">
            <div className="bottom-left">© {year} Croydon Tamizh Kazhagam. All Rights Reserved</div>
            <div className="bottom-right">British Tamil Examination Board (BTEB) Accredited</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
