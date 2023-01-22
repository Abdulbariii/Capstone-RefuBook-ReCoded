import React from 'react'

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { WorldMap } from "../../assets/images/Image"
import "./Testimoniol.css"

SwiperCore.use([EffectCoverflow, Pagination]);


function Testimoniol({ bgColor, textColor }) {


    const testimonials = [
        {
            id: 1,
            testimonial: " I was completely lost and did not know how to take the next step, but helped me every step of the way . The has been very helpful to me throughout my whole journey.",
            personName: "Carmen,",
            personJob: "Employee at a Company"
        },
        {
            id: 2,
            testimonial: "This website was a game changer for me and my family. We were able to find legal assistance and support thanks to the resources provided. We are so grateful.",
            personName: "Nasim,",
            personJob: "a carpenter"

        },

        {
            id: 3,
            testimonial: "I cannot express in words how thankful I am for the services provided to me.I was in extreme emotional and psychological distress when I came.",
            personName: "Emeka,",
            personJob: "Student at university"
        },
        {
            id: 4,
            testimonial: "The information and resources provided on this website helped me and my family navigate the asylum process. We are now living in safety and security.",
            personName: " Fatima,",
            personJob: "a nurse"

        }
    ]

    return (
        <section className={`${bgColor} lg:px-40 px-14 lg:py-32 py-10 flex lg:flex-row flex-col gap-6 justify-between lg:items-start items-center `}>
            <WorldMap />
            <div className="testimoniol lg:w-[25.071rem] w-[19.5rem] ">
                <Swiper className='pb-14 '

                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerGroup={1}
                    pagination={{
                        clickable: true,
                    }}


                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className=''>
                            <div className='font-sans lg:text-left text-center'>
                                <p className={` ${textColor} font-light  lg:text-2xl text-base tracking-[-0.1 px] pb-6 `}>{testimonial.testimonial}</p>
                                <p className='text-[#9DAFBD] font-normal lg:text-lg text-sm tracking-[-0.5 px] '>{testimonial.personName}</p>
                                <p className='text-[#9DAFBD] font-normal lg:text-lg text-sm tracking-[-0.5 px] '>{testimonial.personJob}</p>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>

    )
}

export default Testimoniol