import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Sub Nav */}
      <div style={{
        backgroundColor: 'rgba(245, 245, 247, 0.8)',
        backdropFilter: 'blur(20px)',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--hairline)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <span className="tagline" style={{
            fontSize: 'min(21px, 5vw)',
            fontWeight: 550,
            letterSpacing: '0.05em'
          }}>Muhammad</span>
          <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', alignItems: 'center' }}>
            <a href="#projects" className="caption" style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'opacity 0.2s', fontSize: 'clamp(12px, 2.5vw, 14px)' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>Projects</a>
            <a href="#about" className="caption" style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'opacity 0.2s', fontSize: 'clamp(12px, 2.5vw, 14px)' }} onMouseOver={e => e.currentTarget.style.opacity = '0.7'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>About</a>
            <a href="mailto:mhmdmt865@gmail.com" className="btn btn-primary" style={{ fontSize: 'clamp(10px, 2vw, 12px)', padding: 'clamp(4px, 1.5vw, 6px) clamp(10px, 3vw, 16px)', textDecoration: 'none', display: 'inline-block' }}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

