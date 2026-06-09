import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

const links = [
  { icon: FiMail, label: 'Email', value: 'Adeniyiolaolu016@gmail.com', href: 'mailto:Adeniyiolaolu016@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+234 8166 881 261', href: 'tel:+2348166881261' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'adeniyi-olaolu-peter', href: 'https://linkedin.com/in/adeniyi-olaolu-peter' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Cemaster016', href: 'https://github.com/Cemaster016' },
  { icon: FiGlobe, label: 'Portfolio', value: 'adeniyi-olaolu-portfolio.onrender.com', href: 'https://adeniyi-olaolu-portfolio.onrender.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{
      background: 'linear-gradient(165deg, var(--navy) 0%, var(--navy-deep) 100%)',
    }}>
      <div className="container">
        <span className="section-label" style={{ color: 'var(--teal-mid)' }}>Get in touch</span>
        <h2 className="section-heading" style={{ color: '#fff' }}>Let's Work Together</h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.7 }}>
          Open to remote full-time, contract, and consulting opportunities worldwide.
          Whether you're building an AI agent, shipping an ML system, or need API development — let's talk.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 24px', borderRadius: 'var(--radius)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(14,116,144,0.15)';
                e.currentTarget.style.borderColor = 'rgba(14,116,144,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px',
                background: 'rgba(14,116,144,0.2)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <l.icon size={20} style={{ color: 'var(--teal-mid)' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginBottom: '2px' }}>
                  {l.label}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>
                  {l.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
