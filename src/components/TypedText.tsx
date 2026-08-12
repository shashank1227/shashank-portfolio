'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [phase, setPhase] = useState<'static' | 'typed'>('static');
  const firstString = strings[0] ?? '';
  // Stable dep so parent re-renders with a new array literal don't remount Typed
  const stringsKey = strings.join('\0');

  // Keep the first string visible for LCP, then hand the node to Typed.js
  useEffect(() => {
    if (strings.length === 0) return;

    const timer = window.setTimeout(() => {
      setPhase('typed');
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, [strings.length]);

  useEffect(() => {
    if (phase !== 'typed' || !el.current || !stringsKey) return;

    const instance = new Typed(el.current, {
      strings: stringsKey.split('\0'),
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      smartBackspace,
    });

    return () => {
      instance.destroy();
    };
  }, [phase, stringsKey, typeSpeed, backSpeed, backDelay, loop, smartBackspace]);

  return (
    <span ref={el} className={className} suppressHydrationWarning>
      {phase === 'static' ? firstString : null}
    </span>
  );
};

export default TypedText;
