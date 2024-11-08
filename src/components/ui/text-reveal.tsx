"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 20%"]
  });

  const sentences = text.split("|");
  const totalWords = text.split(" ").length;

  return (
    <div ref={targetRef} className={cn("", className)}>
      {sentences.map((sentence, sentenceIndex) => {
        const words = sentence.trim().split(" ");
        return (
          <div key={sentenceIndex}>
            {words.map((word, i) => {
              const wordIndex = sentenceIndex * words.length + i;
              const start = wordIndex / totalWords;
              const end = (wordIndex + 1) / totalWords;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}{" "}
                </Word>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <motion.span
      style={{
        opacity,
        color: "white",
        transition: "opacity 0.2s ease-out",
      }}
      className="text-white/20"
    >
      {children}
    </motion.span>
  );
};

export default TextRevealByWord;
