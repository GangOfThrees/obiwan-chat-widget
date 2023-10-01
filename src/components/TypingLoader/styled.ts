import styled, { keyframes } from "styled-components";

const TypingAnimation = keyframes`
    0%,
    75%,
    100% {
      transform: translate(0, 0.25rem) scale(0.9);
      opacity: 0.5;
    }

    25% {
      transform: translate(0, -0.25rem) scale(1);
      opacity: 1;
    }
`;

export const TypingIcon = styled.div<{ time: string }>`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 4px;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 50%;
  animation: ${TypingAnimation} 2s ${(props) => props.time} infinite;
`;
