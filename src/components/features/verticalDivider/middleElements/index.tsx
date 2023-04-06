import React, { useState, useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export function HelloText(): JSX.Element {
  return <p style={{ margin: "0px", padding: "20px 0px" }}>{WordDisplay()}</p>;
}

// const fadeIn = keyframes`
//   0% { opacity: 0; }
//   50% { opacity: 0; }
//   100% { opacity: 1; }
// `;

// const fadeOut = keyframes`
//   0% { opacity: 1; }
//   50% { opacity: 0; }
//   100% { opacity: 0; }
// `;

// type WordProps = {
//   show: boolean;
//   fadeIn: boolean;
//   fadeOut: boolean;
// };

// const Word = styled.span<WordProps>`
//   opacity: ${({ show }) => (show ? "1" : "0")};
//   animation-name: ${({ show, fadeIn, fadeOut }) => {
//     if (show) {
//       return fadeIn ? "fadeIn" : "none";
//     } else {
//       return fadeOut ? "fadeOut" : "none";
//     }
//   }};
//   animation-duration: 0.5s;
//   animation-timing-function: ease-in-out;
// `;

// const words = ["Hello", "World", "React"];

// function ChangingWord() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);
//   const [showWord, setShowWord] = useState(false);
//   const [fadeIn, setFadeIn] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newIndex = (currentWordIndex + 1) % words.length;
//       setCurrentWordIndex(newIndex);
//       setFadeOut(true);
//       setTimeout(() => {
//         setCurrentWord(words[newIndex]);
//         setFadeIn(true);
//         setFadeOut(false);
//         setShowWord(true);
//         setTimeout(() => {
//           setFadeIn(false);
//           setShowWord(false);
//         }, 500);
//       }, 500);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [currentWordIndex]);

//   return (
//     <Word show={showWord} fadeIn={fadeIn} fadeOut={fadeOut}>
//       {currentWord}
//     </Word>
//   );
// }

const words = ["Hello", "World", "This", "Is", "A", "Test"];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Word = styled.span<{ show: boolean }>`
  opacity: 0;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s ease-in-out
    forwards;
`;

const WordDisplay = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <Word show>{words[index]}</Word>;
};
