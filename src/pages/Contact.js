import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: 'spring', stiffness: 200 },
      }}
    >
      <ContactForm />
    </motion.div>
  );
}
