import React from 'react'

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


SwiperCore.use([EffectCoverflow, Pagination]);

function Partners() {
    const images = ["https://refugeeresearch.net/wp-content/uploads/2015/11/isim.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/rliul.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/oxrsc.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/gplt.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/auc.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/cfms.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/crg.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/isim.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/crs.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/gplt.gif",
        "https://refugeeresearch.net/wp-content/uploads/2015/11/rlpuk.gif",]
    return (
        <section className=' '>
            <hr className="lg:block hidden h-[1px] bg-gray-200 border-0 dark:bg-gray-700" />

            <div className='px-9 lg:py-6 pb-6 m-auto'>
                <div className='font-["Fira Sans"] font-medium text-2xl pb-10 text-center'>Our Partners</div>
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
                    <div className=''>
                        {images.map((img) => (
                            <SwiperSlide className=''>
                                <img src={img} alt="logo" className=' m-auto lg:py-4  lg:px-9 bg-[#e0e2e3]  ' />
                            </SwiperSlide>))}
                    </div>

                </Swiper>

            </div>
        </section>

    )
}

export default Partners

