import React from 'react';
import { motion } from 'framer-motion';
import { TailSpin } from 'react-loader-spinner';

export default function Notification({ state }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -70 }}
      animate={{ opacity: 1, translateY: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="transition-all text-5xl text-green-400 flex items-center justify-center rounded-full gap-5 shadow-2xl px-14 py-2 text-center absolute top-24 left-[42%]  bg-white"
    >
      {state === 'sent' ? (
        <ion-icon name="checkmark-circle-sharp" />
      ) : (
        <TailSpin
          height="60"
          width="60"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={state === 'pending' ? true : null}
        />
      )}
      <h1 className="text-2xl text-black">{`Email is ${state}`}</h1>
    </motion.div>
  );
}
