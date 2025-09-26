import React, { useMemo, useState } from 'react';
import { categories as allCategories, members as teamMembers, Member } from './teamData';

export default function AboutTeam() {
  const categories = allCategories;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selected, setSelected] = useState<Member | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return teamMembers;
    if (activeCategory === 'Events Team') {
      return teamMembers.filter(m => m.categories.includes('Events Team') || m.categories.includes('Board of Trustees'));
    }
    return teamMembers.filter(m => m.categories.includes(activeCategory as any));
  }, [activeCategory]);

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = '/ctk/logo/CTKLOGO.jpg';
  };

  return (
    <div className="container section">
      <h2 className="title-bar">Meet the Team</h2>

      {/* Category Filters */}
      <div className="filters" role="tablist" aria-label="Team categories">
        {categories.map((cat: typeof categories[number]) => (
          <button
            key={cat}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="team-grid" aria-live="polite">
        {filtered.map((m: Member) => (
          <div className="team-card" key={m.name}>
            <button
              className="card-inner"
              type="button"
              onClick={() => setSelected(m)}
              aria-haspopup="dialog"
              aria-label={`Open details for ${m.name}`}
            >
              <div className="avatar">
                <img src={m.photo} alt={m.name} onError={onImgError} />
              </div>
              <div className="info">
                <h3 className="name">{m.name}</h3>
                <div className="badges">
                  <span className="badge">{m.role}</span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected.name}>
          <div className="modal-backdrop" onClick={() => setSelected(null)} />
          <div className="modal-dialog" role="document">
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close">×</button>
            <div className="modal-header title-bar title-bar--light">
              <h3 className="name modal-title">{selected.name}</h3>
            </div>
            <div className="modal-body profile-layout">
              <div className="profile-photo">
                <img src={selected.photo} alt={selected.name} onError={onImgError} />
              </div>
              <div className="profile-bio">
                <h4 className="role-heading">{selected.role}</h4>
                <p className="bio-text">{selected.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
