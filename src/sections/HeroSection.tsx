import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/image.png';

const HeroSection: React.FC = () => {
  return (
    <section style={{
      backgroundColor: 'var(--canvas-night)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-huge) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="eyebrow"
          style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--shade-40)' }}
        >
          Software Engineer & ML Enthusiast
        </motion.p>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="display-xxl"
          style={{
            marginBottom: 'var(--spacing-huge)',
            maxWidth: '1200px'
          }}
        >
          HI THERE! I'M MUHAMMAD, BUILDING THE <span style={{ color: 'var(--on-primary)' }}>FUTURE OF INTELLIGENT APPS.</span>
        </motion.h1>

        {/* Cinematic Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="hero-portrait"
          style={{
            borderRadius: 'var(--rounded-xl)',
            overflow: 'hidden',
            backgroundColor: 'var(--canvas-night-elevated)',
            position: 'relative',
            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)'
          }}
        >
          <img
            src={profileImage}
            alt="Muhammad's Cinematic Portrait"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(0.1) contrast(1.05)'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 5
          }} />
        </motion.div>

      </div>

      {/* Side Socials */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hide-on-mobile"
        style={{
          position: 'absolute',
          right: 'var(--spacing-huge)',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xxl)',
          zIndex: 20
        }}
      >
        {[
          { label: 'GITHUB', url: 'https://github.com/MedG12' },
          { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/mhmmmd' },
          { label: 'INSTAGRAM', url: 'https://www.instagram.com/_mhmmmd' }
        ].map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--shade-40)',
              textDecoration: 'none',
              fontSize: '11px',
              letterSpacing: '0.1em',
              writingMode: 'vertical-rl',
              transition: 'color 0.3s'
            }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--on-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--shade-40)'}
          >
            {social.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
