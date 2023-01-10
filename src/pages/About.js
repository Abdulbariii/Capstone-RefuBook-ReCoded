import React from 'react';
import BackgroundImage from '../components/navigation/BackgroundImg';
import Team from '../components/navigation/Team';
import Inspire from '../components/navigation/Inspire';
import Story from '../components/navigation/Story';


export default function About() {
  return (
  <div>

    <div>
      <BackgroundImage/>
    </div>

    <div>
      <Team/>
    </div>

    <div>
      <Inspire/>
    </div>

    <div>
      <Story/>
    </div>

  </div>
  );
}
