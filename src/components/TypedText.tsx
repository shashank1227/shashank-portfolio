'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  smartBackspace?: boolean;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  loop = true,
  smartBackspace = true,
  className = ''
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const firstString = strings[0] ?? '';

  useEffect(() => {
    if (!el.current || strings.length === 0) return;

    // Defer typing until after first paint so LCP isn't blocked by typed.js
    const timer = window.setTimeout(() => {
      if (!el.current) return;

      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        smartBackspace,
      });
    }, 900);

    return () => {
      window.clearTimeout(timer);
      typed.current?.destroy();
      typed.current = null;
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, smartBackspace]);

  return (
    <span ref={el} className={className}>
      {firstString}
    </span>
  );
};

export default TypedText;
