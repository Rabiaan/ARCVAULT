import { useEffect, useRef, useState } from 'react';
import { scrollFrames } from '../data/siteData';

export function useScrollFrame() {
  const canvasRef    = useRef(null);
  const heroRef      = useRef(null);
  const imagesRef    = useRef([]);
  const frameRef     = useRef(-1);
  const rafRef       = useRef(null);
  const [loaded, setLoaded]     = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0); 
  const [progress, setProgress] = useState(0);

  /* ── 1. Preload all frames ───────────────────────────────────────── */
  useEffect(() => {
    const { basePath, prefix, extension, totalFrames } = scrollFrames;
    let done = 0;
    const imgs = [];

    
    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += Math.random() * 15;
      if (fakeProgress >= 80) {
        fakeProgress = 80;
        clearInterval(interval);
      }
      setLoadingProgress(prev => Math.max(prev, fakeProgress / 100));
    }, 100);

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${basePath}${prefix}${String(i).padStart(3, '0')}${extension}`;
      img.onload = img.onerror = () => { 
        done++;
        
        if (done === totalFrames) {
            setLoadingProgress(1);
            setTimeout(() => setLoaded(true), 800);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
    
    return () => clearInterval(interval);
  }, []);

  /* ── 2. Attach scroll handler ────────────────────────────────────── */
  useEffect(() => {
    if (!loaded) return;

    const { totalFrames } = scrollFrames;

    const drawFrame = (index) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const img = imagesRef.current[index];
      if (!img || !img.complete || !img.naturalWidth) return;

      const ctx = canvas.getContext('2d');
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const x = (canvas.width  - img.naturalWidth  * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const heroTop    = hero.getBoundingClientRect().top;
        const heroHeight = hero.offsetHeight;
        const viewH      = window.innerHeight;

        const scrolled = -heroTop;
        const maxScroll = heroHeight - viewH;

        const prog  = Math.min(Math.max(scrolled / maxScroll, 0), 1);
        setProgress(prog);

        const index = Math.min(Math.floor(prog * (totalFrames - 1)), totalFrames - 1);
        if (index !== frameRef.current) {
          frameRef.current = index;
          drawFrame(index);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    drawFrame(0);
    frameRef.current = 0;

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded]);

  return { canvasRef, heroRef, loaded, loadingProgress, progress };
}
