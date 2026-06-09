import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const links = ['Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(6,26,58,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
          OA.
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              {l}
            </a>
          ))}
          <a href="https://github.com/Cemaster016" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/adeniyi-olaolu-peter" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <FiLinkedin size={18} />
          </a>
          <a href="/cv.pdf" download className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            <FiDownload size={14} /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
