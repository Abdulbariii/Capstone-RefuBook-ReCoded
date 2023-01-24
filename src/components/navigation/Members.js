import React from 'react';

import { useTranslation } from 'react-i18next';
import AbdulbariImg from '../../assets/images/AbdulbariImage.jpg';
import WafaImg from '../../assets/images/Wafaa_Alhayek_Palestine_2022.jpeg';
import Shahla from '../../assets/images/shahla.jpg'

export default function Members() {
  const { t } = useTranslation('common');
  const members = [
    {
      id: 1,
      name: t('Abdulbari'),
      location: t('KRIIraq'),
      desc: t('SoftwareEngineer'),
      image: AbdulbariImg,
    },
    {
      id: 2,
      name: t('Shahla'),
      location: t('KRIIraq'),
      desc: t('Frontend'),
      image:
        Shahla,
    },
    {
      id: 3,
      name: t('Hani'),
      location: t('KRIIraq'),
      desc: t('SoftwareEngineer'),
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDe-uOj0YtwteyEVNQtNRw3sCn_EWJuMeGYbPzbVGoAb5Euz6Fh_krKHNp5PSknTIEMfg&usqp=CAU',
    },
    {
      id: 4,
      name: t('Wafaa'),
      location: t('Palestine'),
      desc: t('SoftwareEngineer'),
      image: WafaImg,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center px-16 lg:mb-10">
      {members.map((member) => (
        <div key={member.id} className="flex flex-col justify-start items-center flex-nowrap text-[#4699C2] p-8 lg:p-14">
          <img
            className="h-44 mb-3 w-44 rounded-full border-2 border-sky-600 object-cover"
            alt="member"
            src={member.image}
          />
          <h3 className="font-bold text-xl ">{member.name}</h3>

          <h3 className="font-medium">{member.desc}</h3>
          <h3 className="font-normal">{member.location}</h3>
        </div>
      ))}
    </div>
  );
}
