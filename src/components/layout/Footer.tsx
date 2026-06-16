import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--canvas-night)',
      padding: 'var(--spacing-section) 0',
      color: 'var(--on-primary)',
      borderTop: '1px solid var(--shade-70)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'var(--spacing-huge)',
          marginBottom: 'var(--spacing-huge)'
        }}>
          <div>
            <h4 className="eyebrow" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--on-primary)' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>Home</a>
              <a href="#projects" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>Projects</a>
              <a href="#about" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>About</a>
            </div>
          </div>
          <div>
            <h4 className="eyebrow" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--on-primary)' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://www.linkedin.com/in/muhammad-9215b6231" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>LinkedIn</a>
              <a href="https://github.com/MedG12" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>GitHub</a>
              <a href="https://www.instagram.com/_mhmmmd" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>Instagram</a>
              <a href="mailto:mhmdmt865@gmail.com" style={{ color: 'var(--shade-40)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}>Email</a>
            </div>
          </div>
          <div style={{ gridColumn: 'span 1' }}>
            <h4 className="eyebrow" style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--on-primary)' }}>Status</h4>
            <p className="caption" style={{ color: 'var(--shade-40)' }}>
              Open for new opportunities and collaborations in Software Engineering and Machine Learning.
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--shade-70)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p className="micro" style={{ color: 'var(--shade-60)', fontSize: 'min(10px, 2.5vw)' }}>© 2026 MUHAMMAD. ALL RIGHTS RESERVED.</p>
          <p className="micro" style={{ color: 'var(--shade-60)', fontSize: 'min(10px, 2.5vw)' }}>BUILT WITH PRECISION & INTELLIGENCE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
