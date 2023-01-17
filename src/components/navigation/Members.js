import React from 'react';
import AbdulbariImg from '../../assets/images/AbdulbariImage.jpg';

export default function Members() {
  const members = [
    {
      name: 'Abdulbari Qaisar',
      location: 'Erbil',
      desc: 'Frontend developer',
      image: AbdulbariImg,
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      desc: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDe-uOj0YtwteyEVNQtNRw3sCn_EWJuMeGYbPzbVGoAb5Euz6Fh_krKHNp5PSknTIEMfg&usqp=CAU',
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      desc: 'Software Engineer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDe-uOj0YtwteyEVNQtNRw3sCn_EWJuMeGYbPzbVGoAb5Euz6Fh_krKHNp5PSknTIEMfg&usqp=CAU',
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      desc: 'Software Engineer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDe-uOj0YtwteyEVNQtNRw3sCn_EWJuMeGYbPzbVGoAb5Euz6Fh_krKHNp5PSknTIEMfg&usqp=CAU',
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center px-16 lg:mb-10">
      {members.map((member) => (
        <div className="flex flex-col justify-start items-start flex-nowrap text-[#4699C2] p-8 lg:p-14">
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
