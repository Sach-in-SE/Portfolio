import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed: number;
  deletingSpeed: number;
  delayBetweenLines: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  typingSpeed,
  deletingSpeed,
  delayBetweenLines
}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < phrases[phraseIndex].length) {
        timeout = setTimeout(() => {
          setText(phrases[phraseIndex].slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenLines);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenLines]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterEffect;