import React from 'react'

import { useTranslation } from 'react-i18next';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { WorldMap } from "../../assets/images/Image"
import "./Testimoniol.css"

SwiperCore.use([EffectCoverflow, Pagination]);


function Testimoniol({ bgColor, textColor }) {

    const { t } = useTranslation('common');

    const testimonials = [
        {
            id: 1,
            testimonial: t('TestimonialOneText'),
            personName: t('TestimonialOneName'),
            personJob: t('TestimonialOneJob')
        },
        {
            id: 2,
            testimonial: t('TestimonialTwoText'),
            personName: t('TestimonialTwoName'),
            personJob: t('TestimonialTwoJob')

        },

        {
            id: 3,
            testimonial: t('TestimonialThreeText'),
            personName: t('TestimonialThreeName'),
            personJob: t('TestimonialThreeJob')
        },
        {
            id: 4,
            testimonial: t('TestimonialFourText'),
            personName: t('TestimonialFourName'),
            personJob: t('TestimonialFourJob')

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