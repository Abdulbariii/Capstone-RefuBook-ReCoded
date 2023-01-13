import React from 'react';
import BackgroundImage from '../components/navigation/BackgroundImg';
import Team from '../components/navigation/Team';
import Inspire from '../components/navigation/Inspire';
import Story from '../components/navigation/Story';
import Testimoniol from '../components/slider-components/Testimoniol';
import Partners from '../components/slider-components/Partners';

export default function About() {
  return (
    <div>
      <div>
        <BackgroundImage />
      </div>
      <Story />

      <div>
        <Team />
      </div>
      <Testimoniol bgColor="bg-[#4699C2]" textColor="text-white" />
      <Partners
        font="font-['Fira Sans']"
        fontWeight="font-medium"
        textSize="text-4xl"
        textColorScreen="lg:text-[#4699C2]"
        textColorMobile="text-[#4699C2]"
      />
      <div>
        <Inspire />
      </div>
    </div>
  );
}
