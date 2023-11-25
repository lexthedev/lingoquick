"use client";

import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const TelegramContent = () => {
    return <section className='content tg'>
        <div className="tg-title">
            <h1> </h1 >
        </div >
        <div className="tg-content">
            {/* <div className="tg-info-wrap"> */}
            <CarouselProvider
                className="tg-info-wrap"
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>
                        <div className="tg-info">
                            <p>¡Hola amigos!👋</p>
                            <p>Сегодня в рубрике #LaCalleDeEspaña мы научимся, как представляться по-испански.</p>
                            <p>Умение провести базовую беседу на испанском языке — действительно
                                полезный навык во время путешествий или просто при желании пообщаться с людьми,
                                говорящими по-испански. Итак, давайте заведем друзей на испанском языке! ...</p>
                        </div>
                        <a className="tg-link" href="https://t.me/Ling_Quick/157">Читать статью полностью</a>
                    </Slide>
                    <Slide index={1}>
                        <div className="tg-info">
                            <p>Hi there! 😇</p>
                            <p>Present Simple — простое настоящее время, которое активно используется в английском языке.</p>
                            <p>Это одно из самых часто встречающихся времен повседневной речи, не обойтись без Present Simple и в академическом письме. ✍️</p>
                            <p>В простом настоящем времени говорят о привычках и фактах, в Present Simple написаны инструкции.</p>
                            <p>Простое настоящее время помогает нам рассказать о...</p>
                        </div >
                        <a className="tg-link" href="https://t.me/Ling_Quick/149">Читать статью полностью</a >
                    </Slide>
                    <Slide index={2}>
                        <div className="tg-info">
                            < p > Heeey! 👋</p >
                            <p>Завершим понедельник полезной рубрикой #idioms</p>
                            <p>HAVE HEART IN MOUTH</p>
                            <p>Английская идиома «Have your heart in your mouth» (прямой перевод —  ...</p>
                        </div >
                        <a className="tg-link" href="https://t.me/Ling_Quick/183">Читать статью полностью</a >
                    </Slide>
                </Slider>
                <ButtonBack className='tg-info-slide-back'>{''}</ButtonBack>
                <ButtonNext className='tg-info-slide-forward'>{''}</ButtonNext>
            </CarouselProvider>
            {/* </div> */}
            <img src="/img/tg/girl-and-laptop.png" className="pic" alt="girl and laptop" />
            {/* <Image src="/img/tg/girl-and-laptop.png" width={`${auto}`} className="pic" alt="girl and laptop" /> */}
        </div>
    </section>
}
