import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'us',
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. do you have any questions?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4699C2',
    },
    chatButton: {
      backgroundColor: '#4699C2',
    },
  },
};

export default config;
