"use client";

import { useEffect, useState } from 'react';

const NameAnimation = () => {
  const [lines, setLines] = useState<[string, string]>(['', '']);
  const fullName = ["PHILIP", "ANLANDER"];
  const placeholderSymbol = "x";
  const mathSymbols = ["∀", "∂", "∃", "∇", "∈", "∏", "∑", "√", "∞", "∠"];
  const symbolDuration = 20;
  const symbolsPerLetter = 6;

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let currentLine = 0;

    const animateLine = (lineIndex: number) => {
      if (lineIndex >= fullName.length) return;

      const targetWord = fullName[lineIndex];

      const animateLetter = (letterIndex: number) => {
        if (letterIndex >= targetWord.length) {
          currentLine++;
          animateLine(currentLine);
          return;
        }

        let symbolCount = 0;

        const cycleSymbols = () => {
          if (symbolCount >= symbolsPerLetter) {
            // Reveal the actual letter
            setLines(prev => {
              const newLines = [...prev] as [string, string];
              newLines[lineIndex] =
                targetWord.substring(0, letterIndex + 1) +
                placeholderSymbol.repeat(targetWord.length - letterIndex - 1);
              return newLines;
            });

            const timeout = setTimeout(
              () => animateLetter(letterIndex + 1),
              symbolDuration
            );
            timeouts.push(timeout);
            return;
          }

          // Generate random math symbols for remaining letters
          setLines(prev => {
            const newLines = [...prev] as [string, string];
            let lineContent = targetWord.substring(0, letterIndex);
            lineContent += mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

            // Fill remaining with either new random symbols or placeholders
            for (let i = letterIndex + 1; i < targetWord.length; i++) {
              lineContent += Math.random() > 0.3 ?
                mathSymbols[Math.floor(Math.random() * mathSymbols.length)] :
                placeholderSymbol;
            }

            newLines[lineIndex] = lineContent;
            return newLines;
          });

          symbolCount++;

          const timeout = setTimeout(
            cycleSymbols,
            symbolDuration
          );
          timeouts.push(timeout);
        };

        // Initialize line with placeholders if not already set
        if (lines[lineIndex] === '') {
          setLines(prev => {
            const newLines = [...prev] as [string, string];
            newLines[lineIndex] = placeholderSymbol.repeat(targetWord.length);
            return newLines;
          });
        }

        cycleSymbols();
      };

      animateLetter(0);
    };

    const startTimeout = setTimeout(() => animateLine(0), 300);
    timeouts.push(startTimeout);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <h1 className="min-w-[700px] text-[#80EF80] font-mono text-6xl lg:text-9xl z-10 font-bold">
      {lines[0] || placeholderSymbol.repeat(fullName[1].length)}

      <br />
      <span>
        {lines[1] || placeholderSymbol.repeat(fullName[1].length)}
      </span>
    </h1>
  );
};

export default NameAnimation;
