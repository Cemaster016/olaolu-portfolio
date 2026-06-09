export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy-deep)', padding: '32px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        alignItems: 'center', gap: '12px',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
          OA.
        </span>
        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
          © 2026 Olaolu Adeniyi — Senior AI / ML Engineer
        </span>
        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
          Lagos, Nigeria · Open to Remote
        </span>
      </div>
    </footer>
  );
}
