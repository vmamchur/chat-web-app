export default function scrollChatToBottom() {
  setTimeout(() => {
    const chat = document.querySelector('#chat');

    chat?.scrollTo(0, chat.scrollHeight);
  }, 25);
}