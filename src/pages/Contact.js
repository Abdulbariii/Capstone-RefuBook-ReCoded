import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactSvg from '../components/contact/ContactSvg';

export default function Contact() {
  return (
    <div className="w-full flex-wrap-reverse bg-[#EAFBFF] items-center px-5 md:px-48 py-16 min-h-screen flex justify-between">
      <ContactForm />

      <ContactSvg />
    </div>
  );
}
