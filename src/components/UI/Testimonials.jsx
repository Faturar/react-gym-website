import React from 'react'
import '../../styles/testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react"

// swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// swipper effect
import {EffectCards} from "swiper";
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

function Testimonials() {
  return (
    <section id='testimonials'>
        <div className="container sliders">

            <h2 className="section__title">Testimonials</h2>

            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                <SwiperSlide>
                    <div className="slide__item">
                        <div className="slide__img-01">
                            <img src={avatar01} alt="" />
                        </div>

                        <h4>Jessica Fernandes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex quidem, perferendis beatae molestias veritatis minima dolor qui facilis exercitationem. Autem maiores fugit unde soluta, possimus minima fugiat dicta numquam!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide__item">
                        <div className="slide__img-02">
                            <img src={avatar02} alt="" />
                        </div>

                        <h4>Jessica Fernandes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex quidem, perferendis beatae molestias veritatis minima dolor qui facilis exercitationem. Autem maiores fugit unde soluta, possimus minima fugiat dicta numquam!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide__item">
                        <div className="slide__img-03">
                            <img src={avatar01} alt="" />
                        </div>

                        <h4>Jessica Fernandes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex quidem, perferendis beatae molestias veritatis minima dolor qui facilis exercitationem. Autem maiores fugit unde soluta, possimus minima fugiat dicta numquam!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials