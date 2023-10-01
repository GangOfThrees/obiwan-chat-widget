import React from "react";
import { TypingIcon } from "./styled";
export const TypingLoader = () => {
  return (
    <div>
      <TypingIcon time="0ms" />
      <TypingIcon time="250ms" />
      <TypingIcon time="500ms" />
    </div>
  );
};
