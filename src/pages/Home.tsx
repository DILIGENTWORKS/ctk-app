import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_TITLE, keywordsContent } from '../seo';

export default function Home() {
  // Images are served from Vite publicDir (src/assets) at root path
  const images = useMemo(
    () => [
      '/ctk/slider/slide1.png',
      '/ctk/slider/slide2.png',
      '/ctk/slider/slide3.png',
      '/ctk/slider/slide4.png',
      '/ctk/slider/slide5.png',
      '/ctk/slider/slide6.png',
      '/ctk/slider/slide7.png',
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);
  const intervalMs = 5000;
  const [paused, setPaused] = useState(false);

  const goTo = (idx: number) => setCurrent((idx + images.length) % images.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Auto-advance with setInterval (more reliable with React StrictMode)
  useEffect(() => {
    if (images.length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (!paused) {
        setCurrent((c) => (c + 1) % images.length);
      }
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images.length, paused]);

  // Preload images for smooth transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | {BASE_TITLE}</title>
        <meta name="description" content="Croydon Tamizh Kazhagam (CTK) – Croydon Tamil School in the UK promoting Tamil language and culture with classes, events, and community activities." />
        <meta name="keywords" content={keywordsContent(['Home'])} />
        <link rel="canonical" href="https://croydontamizhkazhagam.org.uk/" />
      </Helmet>
      <section
        className="hero"
        aria-label="Welcome image slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((img, i) => (
          <div
            key={img}
            className={`slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
            role={i === current ? 'img' : undefined}
            aria-label={i === current ? `Slide ${i + 1} of ${images.length}` : undefined}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Croydon Tamizh Kazhagam</h1>
          <p>Promoting Tamil language and culture in the community</p>
        </div>
        {/* Controls */}
        {images.length > 1 && (
          <>
            <button type="button" className="arrow left" onClick={prev} aria-label="Previous slide">&#10094;</button>
            <button type="button" className="arrow right" onClick={next} aria-label="Next slide">&#10095;</button>
            <div className="dots" role="tablist" aria-label="Select slide">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="section container">
        <div className="home-grid">
          <div className="home-main">
            <h2 className="title-bar">Welcome to Croydon Tamil Kazhagam</h2>
            <p>
              First and foremost, Croydon Tamizh Kazhagam (CTK) is a place of learning. CTK is a charitable organisation
              (Charity number: 1200988) that advocates Tamil Education for children of Tamil Families from Tamil Nadu (India),
              settled in the United Kingdom (UK).
            </p>
            <p>We promote the Learning of the Tamil Language and Culture by:</p>
            <ul>
              <li>Conducting Tamil classes every Saturday 2:30PM to 3:30PM at Harris Academy Purley. Kendra Hall Road, South Croydon CR2 6DT</li>
              <li>Holding events in each term to enable children exhibit their talents in speech, drama, dance and song.</li>
              <li>Nurturing in Children Creativity, Culture and Education.</li>
            </ul>
            <p>
              We are blessed to have pleasant and highly motivated teachers and enthusiastic parents. All our teachers are DBS
              certified and as a team, we are committed to providing a safe, inspiring and caring platform for children to learn Tamil.
              We are supported by one of the affordable fee support scheme and generous contributions from our trustees, teachers,
              parents, friends and relatives.
            </p>
          </div>
          <aside className="home-aside">
            <div className="aside-card paypal-card">
              <h3 className="title-bar">Pay or Donate</h3>
              <div className="paypal-inner">
                <a href="https://www.paypal.com/donate" target="_blank" rel="noopener" aria-label="Donate via PayPal">
                  <img className="paypal-img" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donateCC_LG.gif" alt="Donate with PayPal button" />
                </a>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1.5 8.25L12 13.5L22.5 8.25L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M4.5 12V16.5C7.5 19.5 16.5 19.5 19.5 16.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.5 8.25V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-right">
                <span className="stat-number">130</span>
                <span className="title-bar--sm">Students</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7.5 10H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-right">
                <span className="stat-number">20</span>
                <span className="title-bar--sm">Teachers</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M17 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-right">
                <span className="stat-number">10+</span>
                <span className="title-bar--sm">Years Running</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--compact container">
        <h2>News & Events</h2>
        <p>Stay updated with term dates, classes, and cultural events.</p>
      </section>
    </div>
  );
}
