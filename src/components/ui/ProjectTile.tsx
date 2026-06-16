import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

interface ProjectImage {
  src: string;
  caption: string;
}

interface ProjectTileProps {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  theme: 'light' | 'dark' | 'parchment';
  reversed?: boolean;
  images?: ProjectImage[];
  githubUrl?: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  title, tagline, problem, solution, techStack, theme, reversed, images = [], githubUrl
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === 'dark';

  const bgStyle = isDark
    ? 'var(--canvas-night)'
    : theme === 'parchment'
      ? 'var(--canvas-cream)'
      : 'var(--canvas-light)';

  const textColor = isDark ? 'var(--on-primary)' : 'var(--ink)';
  const secondaryTextColor = isDark ? 'var(--shade-40)' : 'var(--shade-50)';

  const handleNextImage = () => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{
      backgroundColor: bgStyle,
      color: textColor,
      padding: 'var(--spacing-section) 0',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: !isDark ? '1px solid var(--hairline-light)' : 'none'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container project-content"
        style={{
          flexDirection: reversed ? 'row-reverse' : 'row'
        }}
      >
        {/* Text Content */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p className="eyebrow" style={{ color: secondaryTextColor, marginBottom: 'var(--spacing-md)' }}>
            PROJECT CASE STUDY
          </p>
          <h2 className="display-xl" style={{ marginBottom: 'var(--spacing-lg)', fontWeight: 330 }}>
            {title.toUpperCase()}
          </h2>
          <p className="body-lg" style={{ marginBottom: 'var(--spacing-huge)', color: secondaryTextColor, maxWidth: '500px' }}>
            {tagline}
          </p>

          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-xs)', color: textColor }}>PROBLEM</h4>
            <p className="body-md" style={{ color: secondaryTextColor }}>{problem}</p>
          </div>

          <div style={{ marginBottom: 'var(--spacing-xxl)' }}>
            <h4 className="heading-sm" style={{ marginBottom: 'var(--spacing-xs)', color: textColor }}>SOLUTION</h4>
            <p className="body-md" style={{ color: secondaryTextColor }}>{solution}</p>
          </div>

          <div style={{ marginBottom: 'var(--spacing-huge)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', justifyContent: 'inherit' }}>
              {techStack.map(tech => (
                <span key={tech} className="eyebrow" style={{
                  color: secondaryTextColor,
                  fontSize: '10px',
                  padding: '4px 0',
                  borderBottom: `1px solid ${isDark ? 'var(--shade-70)' : 'var(--hairline-light)'}`
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'inherit' }}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button className={isDark ? "btn-outline-on-dark" : "btn-primary-pill"}>
                  {'View on GitHub'}
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Visual Content - Interactive Stack */}
        <div style={{
          flex: '1.4',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          marginTop: 'var(--spacing-huge)'
        }}>
          <div
            onClick={handleNextImage}
            className="image-stack-container"
            style={{
              cursor: images.length > 1 ? 'pointer' : 'default'
            }}
          >
            {images.length > 0 ? (
              <AnimatePresence mode="popLayout">
                {images.map((img, index) => {
                  const stackIndex = (index - currentIndex + images.length) % images.length;
                  const isVisible = stackIndex < 3;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.8, x: 0, y: 20, rotate: 0 }}
                      animate={{
                        opacity: stackIndex === 0 ? 1 : 0.8,
                        scale: stackIndex === 0 ? 1 : 0.95,
                        y: stackIndex === 0 ? 0 : 15,
                        x: stackIndex === 0 ? 0 : (reversed ? -35 : 35),
                        rotate: stackIndex === 0 ? 0 : (reversed ? -6 : 6),
                        zIndex: images.length - stackIndex,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: reversed ? 50 : -50,
                        transition: { duration: 0.4, ease: "circIn" }
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                      }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--rounded-xl)',
                        overflow: 'hidden',
                        backgroundColor: isDark ? 'var(--canvas-night-elevated)' : 'var(--canvas-light)',
                        boxShadow: isDark
                          ? `0 ${20 - stackIndex * 5}px ${40 - stackIndex * 10}px rgba(0,0,0,0.4)`
                          : `0 ${20 - stackIndex * 5}px ${40 - stackIndex * 10}px rgba(0,0,0,0.08)`,
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'}`,
                        transformOrigin: 'center center',
                        cursor: images.length > 1 ? 'pointer' : 'default',
                      }}
                    >
                      <img
                        src={img.src}
                        alt={`${title} - ${img.caption}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '10px'
                        }}
                      />
                      {isDark && (
                        <div style={{
                          position: 'absolute',
                          top: 0, left: 0, right: 0, height: '1px',
                          background: 'rgba(255,255,255,0.05)',
                          zIndex: 5
                        }} />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: isDark ? 'var(--canvas-night-elevated)' : 'var(--canvas-light)',
                borderRadius: 'var(--rounded-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: secondaryTextColor
              }}>
                [Cinematic Visualization]
              </div>
            )}
          </div>

          {images.length > 0 && (
            <motion.div
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                textAlign: 'center',
                padding: '12px 24px',
                borderRadius: 'var(--rounded-pill)',
                backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
              }}
            >
              <p className="caption" style={{ color: secondaryTextColor, margin: 0, fontWeight: 500 }}>
                {images[currentIndex].caption}
              </p>
              {images.length > 1 && (
                <p className="micro" style={{ color: isDark ? 'var(--shade-60)' : 'var(--shade-40)', marginTop: '4px' }}>
                  Click image to toggle ({currentIndex + 1}/{images.length})
                </p>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectTile;
