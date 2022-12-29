import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SocialSvg from './SocialSvg';
import Notification from './Notification';

export default function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [emailIsPending, setEmailIsPending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailIsPending(true);
    emailjs
      .sendForm(
        'service_glwqio3',
        'template_5s3qdzk',
        e.target,
        'bXpNZWQ4-e13acwkD'
      )
      .then(
        (result) => {
          setEmailIsPending(false);
          setEmailSent(true);

          console.log(result.text);
          setTimeout(() => {
            setEmailSent(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailSent(false);
  };

  return (
    <div className="flex gap-6 flex-col items-start justify-start">
      {emailIsPending ? <Notification state="pending" /> : null}
      {emailSent ? <Notification state="sent" /> : null}
      <h1 className="text-[#4699C2] font-bold text-[64px] mb-2">
        Get in Touch
      </h1>
      <p className="text-[16px]  w-[362px] text-start font-extralight">
        But Brooke Chaffin and Catherine Connors are looking to change that with
        the introduction.
      </p>

      <form onSubmit={sendEmail} className="flex flex-col  items-start">
        <p className="font-light">Email</p>
        <input
          placeholder="@email"
          id="email"
          name="email"
          type="email"
          className="w-[400px] text-[18px] p-10 h-[79px] mt-1 mb-5 bg-[#F7F9FA] rounded-md "
        />
        <textarea
          name="message"
          placeholder="message"
          className="w-[400px] p-10 text-[18px] rounded-md h-[213px]"
        />
        <button
          type="submit"
          className="w-[148px] hover:scale-110 active:scale-100 transition-all hover:shadow-xl h-[43px] mt-5 mb-5 rounded-full font-bold text-[20px]  bg-[#4699C2] text-white"
        >
          Send
        </button>

        <SocialSvg />
      </form>
    </div>
  );
}
