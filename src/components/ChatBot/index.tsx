import React, { useState } from "react";
import { Button } from "../Button";
import styled, { css, keyframes } from "styled-components";
import { IoMdClose, IoMdMail, IoMdSend } from "react-icons/io";
import { TypingLoader } from "../TypingLoader";
import { MessageBox } from "../MessageBox";
import {
  ButtonSheet,
  Center,
  ChatBody,
  ChatBoxContainer,
  CloseButton,
  Header,
  Input,
  InputContainer,
  MessageArea,
  SendButton,
  Title,
} from "./styled";

export const ChatBot = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
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
              <TypingLoader />
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
