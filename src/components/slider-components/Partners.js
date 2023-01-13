import React from 'react';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([EffectCoverflow, Pagination]);

function Partners({
  font,
  fontWeight,
  textSize,
  textColorScreen,
  textColorMobile,
}) {
  const images = [
    'https://lh3.googleusercontent.com/U2loiuR3c4XvWNPyWVbsBcv2RZ6U3zkgiAbHJnda25EQPtrxzbK5beAntOa6xMywyH1nq4J-WvnLa1acadzDPK72M-rPSSm7wJb_Kw=w1200-l80-sg-rp',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/800px-WHO_logo.svg.png',
    'https://www.re-coded.com/recoded-logo-black-rectangular.png.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsz-zpYNCWTDssHuWDYQ-8ZF67puMcJxNKwNitVKuT7ZQiYWVYCXA4m0cJXVo8cctraM&usqp=CAU',
    'https://1000logos.net/wp-content/uploads/2021/03/UNICEF-logo.png',
    'https://cdo-iraq.org/wp-content/uploads/2018/07/unhcr1-01.png',
    'https://i0.wp.com/humanityngo.org/wp-content/uploads/2020/01/H-letter.jpg?fit=2384%2C1992&ssl=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ_p-BtZm7jlRyGGXxI2cAskmuZ3rqIB3jqbqBIUcNcjYu5Bv9Ca6FcA7qOJ3otAEazQ&usqp=CAU',
    'https://images.squarespace-cdn.com/content/v1/5edfd071bb2bf845d9c0a4e2/1597788326156-OE0QVEX4RHIU5UAN9AN9/IRIS+Logo+2020.png',
    'https://images.squarespace-cdn.com/content/v1/5b59e14050a54fc8af647754/1555005156171-IV8SC64SOLRWODNYKDR9/RWC+Logo.jpg',
    'https://refugeeresearch.net/wp-content/uploads/2015/11/rlpuk.gif',
  ];
  return (
    <section className=" ">
      <hr className="lg:block hidden h-[1px] border-0 " />

      <div className="px-9 lg:py-6 pb-6 m-auto">
        <div
          className={`${font} ${fontWeight} ${textSize} ${textColorScreen} ${textColorMobile} pb-10 text-center`}
        >
          Our Partners
        </div>
        {/* <div className={`font-["Fira Sans"] font-medium text-2xl pb-10 text-center`}>Our Partners</div> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="pb-14 "
        >
          <div className="">
            {images.map((img) => (
              <SwiperSlide className="flex justify-center items-center h-36">
                <img
                  src={img}
                  alt="logo"
                  className=" m-auto lg:py-4 lg:scale-150  lg:px-9  object-contain  "
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;
