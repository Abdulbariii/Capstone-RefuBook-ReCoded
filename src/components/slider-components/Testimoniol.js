import React from 'react'

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { WorldMap } from "../../assets/images/Image"
import "./Testimoniol.css"

SwiperCore.use([EffectCoverflow, Pagination]);


function Testimoniol() {


    const testimonials = [
        {
            testimonial: "Two lines of a short testimonial from someone want to say something, and can say more to explain.",
            personName: "Louis Li,",
            personJob: "Trainer at Recoded"

        },
        {
            testimonial: " I was completely lost and did not know how to take the next step, but helped me every step of the way . The has been very helpful to me throughout my whole journey.",
            personName: "Carmen,",
            personJob: "Employee at a Company"
        },
        {
            testimonial: "I cannot express in words how thankful I am for the services provided to me.I was in extreme emotional and psychological distress when I came.",
            personName: "Emeka,",
            personJob: "Student at university"
        }
    ]

    return (
        <section className='lg:px-40 px-14 lg:py-32 py-10 flex lg:flex-row flex-col gap-6 justify-between lg:items-start items-center '>
            <WorldMap />
            <div className="lg:w-[25.071rem] w-[19.5rem] ">
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
                        <SwiperSlide className=''>
                            <div className='font-sans lg:text-left text-center'>
                                <p className='  font-light  lg:text-2xl text-base tracking-[-0.1 px] pb-6 '>{testimonial.testimonial}</p>
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

