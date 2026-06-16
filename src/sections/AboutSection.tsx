import React from 'react';
import { motion } from 'framer-motion';

const careerJourney = [
  {
    period: "Sep 2025 - Present",
    role: "Junior Web Developer",
    company: "Ministry of Education and Culture Republic of Indonesia",
    responsibilities: "Developing and maintaining web applications for the 'Digitalisasi Pembelajaran' and 'Revitalisasi' project at the Ministry of Education and Culture of the Republic of Indonesia."
  },
  {
    period: "Aug 2025 - Jan 2026",
    role: "Machine Learning Cohort",
    company: "Asah Lead by Dicoding",
    responsibilities: "Focused on Machine Learning path, building ML models and infrastructure."
  },
  {
    period: "Sep 2025 - Dec 2025",
    role: "Mobile Application Developer Intern",
    company: "Automa ",
    responsibilities: "Developed a Flutter mobile app for fleet management, enabling drivers to view assigned vehicles and track real-time maintenance alerts and service histories."
  },
  {
    period: "Feb 2025 - Apr 2025",
    role: "Mobile Application Developer - Part Time",
    company: "Haycloth Indonesia",
    responsibilities: "Developed a Flutter mobile application for streamlined order management, integrating Excel-based APIs and OCR scanning to automate data entry and verification."
  }
];

const AboutSection: React.FC = () => {
  const secondaryTextColor = 'var(--shade-70)';
  const tertiaryTextColor = 'var(--shade-60)';

  return (
    <section id="about" style={{
      backgroundColor: 'var(--canvas-cream)',
      padding: 'var(--spacing-section) 0',
      color: 'var(--ink)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow" 
          style={{ color: tertiaryTextColor, marginBottom: 'var(--spacing-md)', textAlign: 'center' }}
        >
          BIOGRAPHY
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-xl" 
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-huge)', fontWeight: 330, color: 'var(--ink)' }}
        >
          ABOUT ME
        </motion.h2>

        {/* Horizontal Career Timeline */}
        <div style={{ marginBottom: 'var(--spacing-huge)' }}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="heading-lg" 
            style={{ marginBottom: 'var(--spacing-huge)', fontWeight: 400, color: 'var(--ink)', textAlign: 'inherit' }}
          >
            CAREER JOURNEY
          </motion.h3>

          <div style={{
            position: 'relative',
            padding: '40px 0',
            overflowX: 'auto',
            display: 'flex',
            gap: '0px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}>
            {/* Horizontal Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '50px',
                left: 0,
                right: 0,
                height: '1px',
                background: 'var(--shade-30)',
                zIndex: 1,
                transformOrigin: 'left',
                minWidth: '1200px'
              }} 
            />

            {careerJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                style={{
                  flex: '0 0 280px',
                  position: 'relative',
                  zIndex: 2,
                  paddingRight: '40px'
                }}
              >
                {/* Node */}
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  border: '4px solid var(--canvas-cream)',
                  marginBottom: '24px',
                  boxSizing: 'content-box'
                }} />

                <p className="eyebrow" style={{ color: tertiaryTextColor, marginBottom: '8px' }}>{item.period}</p>
                <h4 className="heading-md" style={{ marginBottom: '4px', color: 'var(--ink)' }}>{item.role}</h4>
                <p className="body-strong" style={{ color: 'var(--primary)', fontSize: '14px', marginBottom: '16px' }}>{item.company}</p>
                <p className="caption" style={{ color: secondaryTextColor, lineHeight: '1.6' }}>
                  {item.responsibilities}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'var(--spacing-huge)',
          marginTop: 'var(--spacing-huge)'
        }}>
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={cardStyle}
          >
            <h3 className="heading-sm" style={{ marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', color: 'var(--ink)' }}>Education</h3>
            <p className="body-md">
              <span style={{ fontWeight: 550, color: 'var(--ink)' }}>D4 Informatics Engineering</span><br />
              <span style={{ color: secondaryTextColor }}>Universitas Politeknik Negeri Jakarta</span><br />
              <span className="caption" style={{ color: tertiaryTextColor }}>2023 - 2027</span>
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={cardStyle}
          >
            <h3 className="heading-sm" style={{ marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', color: 'var(--ink)' }}>Technical Skills</h3>
            <div style={{ marginBottom: '16px' }}>
              <p className="eyebrow" style={{ fontSize: '10px', color: tertiaryTextColor }}>Software Engineering</p>
              <p className="body-md" style={{ color: 'var(--ink)' }}>Flutter, Laravel, React, Tailwind CSS, MySQL, Git</p>
            </div>
            <div>
              <p className="eyebrow" style={{ fontSize: '10px', color: tertiaryTextColor }}>Machine Learning & AI</p>
              <p className="body-md" style={{ color: 'var(--ink)' }}>Python, FastAPI, Gemini LLM, MediaPipe, TensorFlow</p>
            </div>
          </motion.div>

          {/* Human Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={cardStyle}
          >
            <h3 className="heading-sm" style={{ marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase', color: 'var(--ink)' }}>Human Side</h3>
            <p className="body-md" style={{ color: secondaryTextColor, lineHeight: '1.6' }}>
              When I'm not coding, you can find me exploring the outdoors, hiking mountain trails, or getting lost in a good sci-fi novel. These activities keep me balanced and fuel my creativity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'var(--canvas-light)',
  borderRadius: 'var(--rounded-lg)',
  padding: 'clamp(var(--spacing-lg), 5vw, var(--spacing-xxl))',
  border: '1px solid var(--hairline-light)',
  boxShadow: '0 8px 8px rgba(0,0,0,0.02)',
};

export default AboutSection;
