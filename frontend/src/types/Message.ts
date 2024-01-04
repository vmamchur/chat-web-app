interface MessageUser {
  id: string;
  username: string;
  email: string;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
  updatedAt: string;
  sender: MessageUser;
  receiver: MessageUser;
}
