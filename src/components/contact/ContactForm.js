import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SocialSvg from './SocialSvg';
import Notification from './Notification';
import ContactSvg from './ContactSvg';

export default function ContactForm({ bgColor }) {
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


    <div className={`min-h-screen w-full flex lg:flex-row flex-col-reverse lg:justify-between lg:gap-20 ${bgColor}  items-center px-40  pt-24  `}>

      {emailIsPending ? <Notification state="pending" /> : null}
      {emailSent ? <Notification state="sent" /> : null}

      <div className=" py-10 flex gap-6 flex-col lg:items-start lg:justify-start items-center">
        <h1 className="text-[#4699C2] font-bold lg:text-[64px] text-3xl mb-2 tracking-[-0.1px]">
          Get in Touch
        </h1>
        <p className="text-[16px] text-[#8B8F9C] w-[362px] lg:text-start text-center font-normal">
          But Brooke Chaffin and Catherine Connors are looking to change that with
          the introduction.
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-4 items-start  text-[#8B8F9C]">
          <p className="font-light text-sm my-[-10px] ">Email</p>
          <input
            placeholder="@email"
            id="email"
            name="email"
            type="email"
            className="lg:w-[25rem] lg:h-[4.938rem] w-[17.737rem] h-[4.279rem] text-sm p-4  bg-[#F7F9FA] rounded-md font-normal border-[1px] border-[#cadce9] "
          />
          <textarea
            name="message"
            placeholder="Message"
            className="lg:w-[25rem] lg:h-[13.313rem] w-[18.138rem] h-[9.224rem] text-sm p-4  rounded-md  font-normal border-[1px] border-[#cadce9] "
          />
          <button
            type="submit"
            className="w-[148px] hover:scale-110 active:scale-100 transition-all hover:shadow-xl h-[43px] rounded-full font-bold text-[20px]  bg-[#4699C2] text-white lg:m-0 m-auto"
          >
            Send
          </button>
          <SocialSvg />
        </form>
      </div>

      <ContactSvg />


    </div>

  );
}
