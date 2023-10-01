import React, { useState } from "react";
import { Button } from "../Button";
import styled, { css, keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { IoMdClose, IoMdMail, IoMdSend } from "react-icons/io";
const ButtonSheet = styled(Button)`
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

const ChatBoxContainer = styled.div<{ isOpen: boolean }>`
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

const Header = styled.div`
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

const Title = styled.div``;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ChatBody = styled.div`
  height: 470px;
  position: relative;
  padding-top: 2rem;
`;
const InputContainer = styled.div`
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

const MessageArea = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 300px;
`;

const Input = styled.input`
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

const SendButton = styled.div`
  color: blue;
  padding-right: 1rem;
`;

const Center = styled.div`
display: flex:
justify-content: center;
height: auto;
align-items: center;
`;

const MessageBoxStyle = styled.div<{ position: boolean }>`
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
const TypingBox = styled.div<{ time: string }>`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 4px;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 50%;

  animation: ${TypingAnimation} 2s ${(props) => props.time} infinite;
`;
// Define the arrow indicator component

export const MessageBox = ({ children, position }) => {
  return <MessageBoxStyle position={position}>{children}</MessageBoxStyle>;
};

export const ChatBot = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div id="center-text">
      <ButtonSheet onClick={() => setToggle(true)}>
        <Center>
          <IoMdMail fontSize={"24px"} />
        </Center>
      </ButtonSheet>
      <ChatBoxContainer isOpen={toggle}>
        <Header>
          <Title>Obi-Wan</Title>
          <CloseButton onClick={() => setToggle(false)}>
            <IoMdClose />
          </CloseButton>
        </Header>
        <ChatBody>
          <MessageArea>
            <MessageBox position={true}>Hi my name is Simeon </MessageBox>
            <MessageBox position={false}>Hi my</MessageBox>
            <MessageBox position={false}>
              <TypingBox time="0ms" />
              <TypingBox time="250ms" />
              <TypingBox time="500ms" />
            </MessageBox>
          </MessageArea>
        </ChatBody>
        <div>
          <InputContainer>
            <Input placeholder="Send a message..." />
            <SendButton>
              <IoMdSend />
            </SendButton>
          </InputContainer>
        </div>
      </ChatBoxContainer>
    </div>
  );
};
