import { httpClient } from '../http/httpClient';

function getAllMessages(userId: string) {
  return httpClient.get(`/messages/${userId}`);
}

const postMessage = (userId: string, text: string) => {
  return httpClient.post(`/messages/${userId}`, { text });
};

export const messagesService = {
  getAllMessages,
  postMessage,
};