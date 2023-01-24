import React from 'react';

import { useTranslation } from 'react-i18next';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { StarIcon, FeatureImage } from "../../assets/images/Image"

SwiperCore.use([EffectCoverflow, Pagination]);

function Features() {

    const { t } = useTranslation('common');
    

    const features = [
        {
            featureTitle: t('Reliability'),
            featureContent: t('ReliabilityText')
        },
        {

            featureTitle: t('Motivation'),
            featureContent: t('MotivationText')
        },
        {

            featureTitle: t('Efficiency'),
            featureContent: t('EfficiencyText')
        },
        {

            featureTitle: t('Creativity'),
            featureContent: t('CreativityText')
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