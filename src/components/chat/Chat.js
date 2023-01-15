import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { motion } from 'framer-motion';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

import config from './config';
import chaticon from '../../assets/images/chaticon.png';
import cancel from '../../assets/images/cancel.png';

export default function Chat() {
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="right-5 bottom-5 fixed flex w-fit justify-start flex-row-reverse items-end gap-10">
      <button
        type="button"
        onClick={() => {
          setShowChat(!showChat);
        }}
        className="rounded-full bg-[#4699C2] flex justify-center items-center text-center w-14 h-14 shadow-2xl  cursor-pointer"
      >
        <img
          className={` ${showChat ? 'w-5 h-5 ' : 'w-10 h-10'}  object-contain `}
          alt="chaticon"
          src={showChat ? cancel : chaticon}
        />
      </button>

      {showChat && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, type: 'spring' },
          }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </motion.div>
      )}
    </div>
  );
}
