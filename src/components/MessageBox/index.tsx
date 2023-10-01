import React from "react";
import { MessageBoxStyle } from "./styled";

export const MessageBox = ({ children, position }) => {
  return <MessageBoxStyle position={position}>{children}</MessageBoxStyle>;
};
