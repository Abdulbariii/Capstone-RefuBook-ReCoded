import React from 'react';
import BackgroundImage from '../components/navigation/BackgroundImg';


import Team from '../components/navigation/Team';
import Inspire from '../components/navigation/Inspire';


import Story from '../components/navigation/Story';


export default function About() {
  return (
  <div>
    <h1>NavBar</h1>
    <div>
      <BackgroundImage/>
    </div>
    <div>Our Story</div>
    <h1>Our Team</h1>
    <h1>Testimonial</h1>
    <h1>Partners</h1>
    <h1>Inspire</h1>

    <h1>Navbar</h1>

    <h1>Our Story</h1>
    <div>
      <Team/>
    </div>

    <h1>Background Image</h1>

    <h1>Our Story</h1>
    <h1>Our Team</h1>
    <h1>Testimonial</h1>
    <h1>Partners</h1>
    <Inspire/>

    <div>
      <Story/>
    </div>
    <h1>Our Team</h1>

    <h1>Testimonial</h1>
    <h1>Partners</h1>
    <h1>Inspire</h1>


    <h1>Footer</h1>
  </div>
  );
}
