import React from "react";
import { InternalChatBot } from "../InternalChatBot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ChatBot = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <InternalChatBot {...props} />
    </QueryClientProvider>
  );
};
