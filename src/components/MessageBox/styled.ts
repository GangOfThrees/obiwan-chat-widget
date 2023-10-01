import styled, { css } from "styled-components";

export const MessageBoxStyle = styled.div<{ position: boolean }>`
  max-width: 80%;
  float: left;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  clear: both;
  position: relative;
  word-wrap: break-word;
  background: #f0f0f0;
  border-top-left-radius: 0px;
  ${(props) =>
    props.position &&
    css`
      background: #343434;
      color: white;
      float: right;
      border-bottom-right-radius: 0px;
    `};
`;
