import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '15+', label: 'AI Systems Shipped' },
  { num: '₦200B+', label: 'Revenue Impact' },
  { num: '8.7M', label: 'Customers Served' },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(165deg, var(--navy) 0%, var(--navy-deep) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,116,144,0.15) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '720px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(14,116,144,0.15)', border: '1px solid rgba(14,116,144,0.3)',
            borderRadius: '99px', padding: '6px 16px', marginBottom: '28px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--teal-mid)', letterSpacing: '0.04em' }}>
              AVAILABLE FOR REMOTE OPPORTUNITIES
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '20px',
          }}>
            Olaolu<br />Adeniyi
          </h1>

          <p style={{
            fontSize: '1.15rem', fontWeight: 500, color: 'var(--teal-mid)',
            marginBottom: '16px',
          }}>
            Senior AI / ML Engineer · API & Agentic Systems · Banking & FinTech
          </p>

          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7, marginBottom: '36px', maxWidth: '600px',
          }}>
            Building production-grade AI systems that serve millions of customers and generate
            measurable billions in business impact — in banking, fintech, and edtech.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="https://github.com/Cemaster016" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              <FiGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/adeniyi-olaolu-peter" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              <FiLinkedin /> LinkedIn
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '24px' }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--teal-mid)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
