import React from 'react';
import About from '../components/home-components/About';
import Title from '../components/home-components/Title';

export default function Home() {
  return <div>
    <Title />
    <div className='bg-[#e5faff] '>
      <About />
    </div>

  </div>;
}
