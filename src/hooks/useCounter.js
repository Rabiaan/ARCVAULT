import { useState, useEffect, useRef } from 'react';

export function useCounter(endValue, duration = 2000, startWhenVisible = true, externalRef = null) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const startTimeRef = useRef(null);

  const numericEndValue = parseFloat(endValue.toString().replace(/[^\d.-]/g, ''));

  useEffect(() => {
    if (!startWhenVisible) return;

    if (hasStarted) return;

    const targetRef = externalRef?.current;
    if (!targetRef) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(targetRef);
    return () => observer.disconnect();
  }, [startWhenVisible, hasStarted, externalRef]);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(progress * numericEndValue);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericEndValue, duration]);

  return count;
}