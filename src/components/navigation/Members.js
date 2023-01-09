import React from 'react'

export default function Members() {
  const members = [
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    },
    {
      name: 'Emily Jorgensen',
      location: 'Author at Panoply Store',
      image: ''
    }
  ]
  return (
    <div className='flex flex-row flex-wrap justify-center px-16 lg:mb-10'>
      {members.map((member) => (
        <div className='flex flex-col flex-nowrap text-[#4699C2] p-8 lg:p-14'>
          <div>
            <h3 className='font-bold text-left'>{member.name}</h3>
          </div>
          <div>
            <h3 className=''>{member.location}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}