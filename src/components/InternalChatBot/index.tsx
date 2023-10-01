import React, { useEffect, useRef, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { useAskQuestion, useGetChat } from "../../hooks/useGPTChat";

export const InternalChatBot = ({ apiUrl, apiKey }) => {
  const chatBoxRef = useRef(null);
  const [question, setQuestion] = useState<string>();
  const chatHistory = useGetChat();
  const { mutateAsync: askQuestion, isLoading } = useAskQuestion();
  const [toggle, setToggle] = useState<boolean>(false);
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      console.log("scroll called");
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (question) {
      const tempQuestion = question;
      setQuestion("");
      await askQuestion({
        apiUrl,
        apiKey,
        payload: { question: tempQuestion },
      });
      scrollToBottom();
    }
  };
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
          <MessageArea ref={chatBoxRef}>
            {chatHistory?.map(({ id, answer, question }) => {
              return (
                <div key={id}>
                  {question ? (
                    <MessageBox position={true}>{question}</MessageBox>
                  ) : null}
                  {answer ? (
                    <MessageBox position={false}>{answer}</MessageBox>
                  ) : null}
                </div>
              );
            })}
            {isLoading ? (
              <MessageBox position={false}>
                <TypingLoader />
              </MessageBox>
            ) : null}
          </MessageArea>
        </ChatBody>
        <div>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                value={question}
                placeholder="Send a message..."
                onChange={handleInputChange}
              />
              <SendButton onClick={handleSubmit}>
                <IoMdSend />
              </SendButton>
            </InputContainer>
          </form>
        </div>
      </ChatBoxContainer>
    </div>
  );
};
