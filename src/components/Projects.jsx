import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const filters = ['All', 'Enterprise', 'Open Source', 'Consulting'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="projects" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-label">What I've built</div>
        <h2 className="section-heading">Selected Projects</h2>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '7px 20px', borderRadius: 99, cursor: 'pointer',
              border: active === f ? 'none' : '1.5px solid var(--border)',
              background: active === f ? 'var(--navy)' : 'transparent',
              color: active === f ? '#fff' : 'var(--muted)',
              fontWeight: 600, fontSize: '0.83rem', transition: 'all 0.2s',
              fontFamily: 'var(--font-body)',
            }}>{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: 22,
        }}>
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="card"
                style={{
                  display: 'flex', flexDirection: 'column',
                  borderTop: p.featured ? '3px solid var(--teal)' : '1px solid var(--border)',
                }}
              >
                {/* Top row — type badge + links */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{
                    background: p.type === 'Enterprise' ? 'rgba(10,46,92,0.07)' : 'var(--teal-lite)',
                    color: p.type === 'Enterprise' ? 'var(--navy)' : 'var(--teal)',
                    fontSize: '0.72rem', fontWeight: 700,
                    padding: '3px 10px', borderRadius: 99,
                  }}>{p.type}</span>

                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          color: 'var(--muted)', fontSize: '0.78rem', fontWeight: 600,
                          transition: 'color 0.2s', textDecoration: 'none',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                      >
                        <FiGithub size={14} /> GitHub
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          color: 'var(--teal)', fontSize: '0.78rem', fontWeight: 600,
                          transition: 'color 0.2s', textDecoration: 'none',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--teal)'}
                      >
                        <FiExternalLink size={14} /> Live App
                      </a>
                    )}
                  </div>
                </div>

                {/* Project name */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem', fontWeight: 700,
                  color: 'var(--navy)', lineHeight: 1.3, marginBottom: 5,
                }}>{p.name}</h3>

                {/* Organisation */}
                <div style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: 600, marginBottom: 10 }}>
                  {p.org}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.87rem', color: 'var(--muted)',
                  lineHeight: 1.7, marginBottom: 14, flex: 1,
                }}>{p.desc}</p>

                {/* Impact badges */}
                <div className="impact-row" style={{ marginBottom: 14 }}>
                  {p.impact.map(im => (
                    <span key={im} className="impact-badge">▸ {im}</span>
                  ))}
                </div>

                {/* Tags */}
                <div>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}