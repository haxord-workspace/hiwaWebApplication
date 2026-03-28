import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", label }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <motion.div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
