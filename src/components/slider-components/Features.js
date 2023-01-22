import React from 'react';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { StarIcon, FeatureImage } from "../../assets/images/Image"

SwiperCore.use([EffectCoverflow, Pagination]);

function Features() {
    const features = [
        {

            featureTitle: "Reliability",
            featureContent: "Dependable and consistent, we provide accurate information and resources for refugees.Trustworthy and responsible, we uphold ethical standards in our work."
        },
        {

            featureTitle: "Motivation",
            featureContent: "We inspire action through sharing refugee stories and providing opportunities for involvement, igniting a passion for change."
        },
        {

            featureTitle: "Efficiency",
            featureContent: "We strive for efficiency in all aspects of our work, making sure our website is easy to navigate, resources and services are easily accessible and our organization delivers its services effectively. "
        },
        {

            featureTitle: "Creativity",
            featureContent: "We use innovative and unique ways to present information, resources, and services to refugees.We also aim to find new solutions to the problems that refugees face."
        }

    ]
    return (
        <section className='lg:pb-24 pb-10 lg:border-r-4  lg:border-[#70cdd6] '>
            <hr className="my-8 h-[1px] bg-gray-200 border-0 dark:bg-gray-700 lg:block hidden" />
            <div className='lg:px-40 px-14 grid lg:grid-cols-2 grid-cols-1 '>

                {/* this is for large screen */}
                <div className='lg:grid lg:grid-cols-2 gap-6 hidden '>
                    {features.map((feature) => {
                        return (
                            <div key={feature.featureTitle} className='font-["Fira Sans"] text-left  '>
                                <div className='flex lg:flex-row items-center  gap-3'>
                                    <StarIcon />
                                    <p className='font-bold  text-base text-[#212B36]'>{feature.featureTitle}</p>
                                </div>
                                <p className=' text-sm font-normal  text-[#212B36] py-3 '>{feature.featureContent}</p>
                            </div>

                        )
                    })}
                </div>

                {/* this is for small screen */}
                <Swiper className='pb-10 grid grid-cols-1 order-1 lg:hidden'
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}

                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Navigation]}
                >
                    {features.map((feature) => {
                        return (
                            <SwiperSlide key={feature.featureTitle} className='text-center font-["Fira Sans"] '>
                                <div className='flex flex-col items-center  gap-3'>
                                    <StarIcon />
                                    <p className='font-[250px]  text-base text-[#212B36]'>{feature.featureTitle}</p>
                                </div>
                                <p className=' text-sm font-normal text-[#212B36] py-3 w-[16.303rem] m-auto '>{feature.featureContent}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='lg:justify-self-end justify-self-center lg:-mt-[3.5rem] mb-4'>
                    <FeatureImage />
                </div>
            </div>
        </section >
    )
}

export default Features