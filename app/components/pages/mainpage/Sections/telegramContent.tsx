"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const TelegramContent = () => {
    return <section className='content tg'>
        <div className="tg-title">
            <h1>Подпишитесь на наш Tелеграм, будьте в курсе всех событий школы </h1 >
        </div >
        <div className="tg-content">
            <Carousel
                className='tg-info-wrap'
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                interval={3000}
            >
                <div>
                    <div className="tg-info">
                        <p>¡Hola amigos!👋</p>
                        <p>Сегодня в рубрике #LaCalleDeEspaña мы научимся, как представляться по-испански.</p>
                        <p>Умение провести базовую беседу на испанском языке — действительно
                            полезный навык во время путешествий или просто при желании пообщаться с людьми,
                            говорящими по-испански. Итак, давайте заведем друзей на испанском языке! ...</p>
                    </div>
                    <a className="tg-link" href="https://t.me/Ling_Quick/157">Читать статью полностью</a>
                </div>
                <div>
                    <div className="tg-info">
                        <p>Hi there! 😇</p>
                        <p>Present Simple — простое настоящее время, которое активно используется в английском языке.</p>
                        <p>Это одно из самых часто встречающихся времен повседневной речи, не обойтись без Present Simple и в академическом письме. ✍️</p>
                        <p>В простом настоящем времени говорят о привычках и фактах, в Present Simple написаны инструкции.</p>
                        <p>Простое настоящее время помогает нам рассказать о...</p>
                    </div >
                    <a className="tg-link" href="https://t.me/Ling_Quick/149">Читать статью полностью</a >
                </div>
                <div>
                    <div className="tg-info">
                        < p > Heeey! 👋</p >
                        <p>Завершим понедельник полезной рубрикой #idioms</p>
                        <p>HAVE HEART IN MOUTH</p>
                        <p>Английская идиома «Have your heart in your mouth» (прямой перевод —  ...</p>
                    </div >
                    <a className="tg-link" href="https://t.me/Ling_Quick/183">Читать статью полностью</a >
                </div>
            </Carousel>
            <img src="/img/tg/girl-and-laptop.png" className="pic" alt="girl and laptop" />
        </div>
    </section>
}
