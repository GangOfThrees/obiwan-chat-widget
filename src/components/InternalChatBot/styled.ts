import styled, { css } from "styled-components";
import { Button } from "../Button";

export const ButtonSheet = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 3rem;
  border: none;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6),
    0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const ChatBoxContainer = styled.div<{ isOpen: boolean }>`
  display: block;
  position: fixed;
  right: 30px;
  bottom: 50px;
  width: 350px;
  border-radius: 1rem;
  box-shadow: 0px 5px 35px 9px #ccc;
  background: white;
  transition: transform 0.3s ease-in-out;
  transform: translateY(110%);
  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(0%);
    `}
`;

export const Header = styled.div`
  background: #5a5eb9;
  position: relative;
  height: 70px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  color: white;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Title = styled.div``;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const ChatBody = styled.div`
  height: 470px;
  position: relative;
  padding-top: 2rem;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: relative;
  width: 100%;
  height: 47px;
  border: none;
  resize: none;
  outline: none;
  color: #888;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
`;

export const MessageArea = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 0;
  padding-left: 1rem;

  margin: 1px;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: $gray;
  }
  &::-moz-placeholder {
    color: $gray;
  }
  &::-ms-input-placeholder {
    color: $gray;
  }
  &::-moz-placeholder {
    color: $gray;
  }
`;

export const SendButton = styled.div`
  color: blue;
  padding-right: 1rem;
`;

export const Center = styled.div`
display: flex:
justify-content: center;
height: auto;
align-items: center;
`;
