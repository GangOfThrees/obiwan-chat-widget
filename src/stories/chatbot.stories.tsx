import * as React from "react";
import { ChatBot } from "..";

export const ChatBotStory = () => {
  return (
    <>
      <ChatBot apiUrl="http://localhost:8000/bot/kb" apiKey="TEST-KEY-1" />
    </>
  );
};
