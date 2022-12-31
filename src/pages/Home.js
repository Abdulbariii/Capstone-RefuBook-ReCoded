import React from 'react';
import About from '../components/home-components/About';
import Testimoniol from '../components/slider-components/Testimoniol';
import Title from '../components/home-components/Title';
import Features from '../components/slider-components/Features';

export default function Home() {
  return <div>
    <Title />
    <div className='bg-[#e5faff] '>

      <About />
      <Features />
    </div>
    <Testimoniol />
  </div>;
}
