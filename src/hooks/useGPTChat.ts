import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, post } from "../api";

interface ChatHistory {
  id: string;
  answer?: string;
  question: string;
}

const queryKey = ["chat"];

const generateUniqueId = () => {
  return Date.now();
};

const postGPT = async ({ apiUrl, apiKey, payload }) => {
  try {
    const result = await post(apiUrl, apiKey, payload);
    return { answer: result.data.answer, question: payload.question };
  } catch (error) {
    console.log("error", error);
  }
};

const getGPT = async ({ apiUrl, apiKey }) => {
  try {
    const data = await get(apiUrl, apiKey);
    return { answer: data.answer, user: "bot" };
  } catch (error) {
    console.log("error", error);
  }
};

export function useAskQuestion() {
  const queryClient = useQueryClient();
  const id = generateUniqueId();
  return useMutation(postGPT, {
    onMutate: (variables) => {
      queryClient.setQueryData<ChatHistory[]>(queryKey, (old) => {
        const oldChat = old ?? [];
        return [
          ...oldChat,
          { id, answer: "", question: variables.payload.question },
        ];
      });
      return { variables };
    },
    onSuccess: (data) => {
      console.log("onsucess data", data);
      queryClient.setQueryData<ChatHistory[]>(queryKey, (old) => {
        if (old && old.length) {
          const updatedChat = [...old];
          updatedChat[updatedChat.length - 1].answer = data?.answer;
          return updatedChat;
        }
      });
    },
  });
}

export function useGetChat() {
  const queryClient = useQueryClient();
  const { data: chatHistory } = useQuery(queryKey, () => {
    const cachedData = queryClient.getQueryData<ChatHistory[]>(queryKey);
    return cachedData ? cachedData : [];
  });
  return chatHistory;
}
