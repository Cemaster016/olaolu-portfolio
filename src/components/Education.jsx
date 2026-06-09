import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const edu = [
  {
    degree: 'MSc Data Science & Technologies',
    school: 'University of East London, UK',
    period: '2025 – Present',
    note: 'Research: AI in Special Educational Needs & Disabilities (SEND)',
    status: 'In Progress',
  },
  {
    degree: 'B.Tech Industrial Mathematics',
    school: 'Federal University of Technology Akure (FUTA)',
    period: '2014 – 2019',
    note: '',
    status: 'Completed',
  },
];

const certs = [
  'Building AI Agents with Azure AI Studio — Microsoft',
  'Advanced LangChain & Prompt Engineering — HamoyeAI',
  'AWS Machine Learning Foundational — Udacity / Amazon',
  'Advanced Data Science — Bluechip Technologies',
  'Azure Fundamentals — Microsoft / LinkedIn Learning',
  'Advanced Data Engineering — Bluechip Technologies',
  'Reporting & Analytics with Power BI — DBrown Consulting',
  'Data Science Professional — Delon Group',
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <span className="section-label">Academic background</span>
        <h2 className="section-heading">Education & Certifications</h2>

        {/* Education cards */}
        <div style={{ display: 'grid', gap: '20px', marginBottom: '48px' }}>
          {edu.map((e, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="tag" style={{
                background: e.status === 'In Progress' ? 'var(--teal)' : 'var(--navy)',
                color: '#fff', marginBottom: '12px',
              }}>
                {e.status}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginTop: '8px' }}>
                {e.degree}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>{e.school}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '4px' }}>{e.period}</p>
              {e.note && <p style={{ fontSize: '0.85rem', color: 'var(--teal)', fontWeight: 500, marginTop: '8px' }}>{e.note}</p>}
            </motion.div>
          ))}
        </div>

        {/* Award */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px', borderLeft: '4px solid var(--teal)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <FiAward size={22} style={{ color: 'var(--teal)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
              Best in Data Science / AI — Wema Bank Plc (March 2024)
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', paddingLeft: '34px' }}>
            Awarded for outstanding resilience, hard work, and benchmark-setting performance in AI and data science across the intensive training programme.
          </p>
        </motion.div>

        {/* Certifications */}
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '20px' }}>
          Certifications & Training
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
