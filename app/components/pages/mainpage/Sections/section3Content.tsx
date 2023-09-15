"use client";
import RainbowTextAnimator from "@/app/components/RainBowText/RainbowTextAnimator";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { useState } from "react";

export const Section3Content = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('showFAQ');
    const [blockToShow, setBlockToShow] = useState<'about' | 'guarantees' | 'graduates' | string | null>(search);

    const switchBlockToShow = (blockName = '') => {
        setBlockToShow(blockName === blockToShow ? null : blockName);
    }

    return <section id="section-3" className='content faq flex flex-col text-center p-[50px] pb-0 faq'>
        <div className="faq-header flex m-[25px] flex-col justify-center">
            <h1 className="m-[25px]">Ответы на часто задаваемые вопросы</h1>
            <h3>Не нашли ответ на интересующий Вас вопрос? Задайте его в наших социальных сетях:</h3>
            <div className="flex justify-center gap-x-3 mt-5">
                <a href="https://t.me/LingoQuick">
                    <Image
                        src="/telegram.svg"
                        alt="telegram Logo"
                        className="dark:invert"
                        width={30}
                        height={30}
                        priority
                    /></a>
                <a href="https://wa.me/79959896416">
                    <Image
                        src="/whatsapp.svg"
                        alt="whatsapp Logo"
                        className="dark:invert"
                        width={30}
                        height={30}
                        priority
                    /></a>
            </div>
        </div>
        <div className="faq-questions flex flex-col gap-y-6 m-[35px] mt-5">
            <div className={`faq-element ${blockToShow === 'about' ? 'show' : 'hide'}`}>
                <div className='faq-question' onClick={() => switchBlockToShow('about')}>
                    <div className="switcher"></div>
                    <h4>О школе:</h4>
                </div>
                <div className='faq-answer'>
                    <p>Lingo Quick- ассоциация молодых лингвистов, обучающая иностранным языкам школьников 1-11 класс.</p>
                    <p>3 языковых направления: английский, испанский, турецкий.</p>
                    <p>Преимущество в цене и множество акций.</p>
                </div>
            </div>

            <div className={`faq-element ${blockToShow === 'guarantees' ? 'show' : 'hide'}`}>
                <div className='faq-question' onClick={() => switchBlockToShow('guarantees')}>
                    <div className="switcher"></div>
                    <h4>Гарантии:</h4>
                </div>
                <div className='faq-answer'>
                    <p>Lingo Quick гарантирует ученикам повышение уровня иностранного языка, а также успеваемости в школе.</p>
                    <p>Наша команда поможет преодолеть языковой барьер и научит</p>
                    <p>ГОВОРИТЬ!</p>
                </div>
            </div>

            <div className={`faq-element ${blockToShow === 'graduates' ? 'show' : 'hide'}`}>
                <div className='faq-question' onClick={() => switchBlockToShow('graduates')}>
                    <div className="switcher"></div>
                    <h4>Что получат наши выпускники?</h4>
                </div>
                <div className='faq-answer'>
                    <p>Lingo Quick поможет понять и полюбить иностранный язык.</p>
                    <p>Повысит успеваемость в школе и сделает изучение разговорной части  языка увлекательным! </p>
                </div>
            </div>
        </div>
        <div className="footer">
            <p>Языковые онлайн консультации &quot;Lingo Quick&quot; (линго куик) </p>
            <div className="small-text">
                <span>made by great and mighty </span>
                <a href="mailto:lex.dev@aol.com?subject=mail about Lingo Quick">
                    <RainbowTextAnimator text='lexthedev' />
                </a>
                <span> 2023 &quot;Lingo Quick©&quot; all writes preserved</span>
            </div>
        </div>
    </section>
}