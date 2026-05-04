import { useRef } from 'react';
import { useScrollFrame } from '../hooks/useScrollFrame';
import { useCounter } from '../hooks/useCounter';
import { siteConfig, heroStats, scrollFrames } from '../data/siteData';
import './Hero.css';

const Hero = () => {
  const { canvasRef, heroRef, loaded, loadingProgress } = useScrollFrame();
  const statsRef = useRef(null);

  const parsedStats = heroStats.map((stat) => ({
    ...stat,
    num: parseInt(stat.value.toString().replace(/[^\d]/g, ''), 10),
    hasPlus: stat.value.toString().includes('+'),
  }));

  const count1 = useCounter(parsedStats[0]?.num || 0, 2000, loaded, statsRef);
  const count2 = useCounter(parsedStats[1]?.num || 0, 2000, loaded, statsRef);
  const count3 = useCounter(parsedStats[2]?.num || 0, 2000, loaded, statsRef);
  const count4 = useCounter(parsedStats[3]?.num || 0, 2000, loaded, statsRef);
  const counts = [count1, count2, count3, count4];

  return (
    <section
      id="home"
      className="hero-container"
      ref={heroRef}
      style={{ height: `${100 * scrollFrames.scrollMultiplier}vh` }}
    >
      {/* Loading screen */}
      {!loaded && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-bar-wrapper">
              <span className="brand-name-loading">{siteConfig.company}</span>
              <div className="loading-bar-container">
                <div className="loading-bar-fill" style={{ width: `${loadingProgress * 100}%` }}></div>
              </div>
            </div>
            <p className="loading-percentage">{Math.round(loadingProgress * 100)}%</p>
          </div>
        </div>
      )}

        {/* Hero content */}
        <div className="hero-sticky">
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="hero-gradient" />

          <div className="hero-content">
            <h1 className="hero-title">{siteConfig.tagline}</h1>
            <p className="hero-subtitle">{siteConfig.subtagline}</p>
          </div>

          <div className="hero-stats glass" ref={statsRef}>
            {parsedStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{counts[index]}{stat.hasPlus && '+'}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
    </section>
  );
};

export default Hero;