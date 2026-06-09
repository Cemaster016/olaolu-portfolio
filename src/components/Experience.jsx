import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <span className="section-label">Career</span>
        <h2 className="section-heading">Work Experience</h2>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '7px', top: '8px', bottom: '8px',
            width: '2px', background: 'var(--border)',
          }} />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ marginBottom: '40px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-32px', top: '8px',
                width: '14px', height: '14px', borderRadius: '50%',
                background: 'var(--teal)', border: '3px solid var(--bg)',
              }} />

              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>
                      {job.company}
                    </h3>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--teal)' }}>{job.role}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>{job.period}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{job.location}</p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {job.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: '0.88rem', color: 'var(--text)', marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
