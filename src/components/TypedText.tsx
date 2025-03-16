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

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        smartBackspace
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, smartBackspace]);

  return <span ref={el} className={className} />;
};

export default TypedText; 