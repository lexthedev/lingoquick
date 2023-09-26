"use client";
import RainbowTextAnimator from "@/app/components/RainBowText/RainbowTextAnimator";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";

export const Section3Content = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('showFAQ');
    const [blockToShow, setBlockToShow] = useState<'about' | 'guarantees' | 'graduates' | string | null>(search);
    const phoneLink = useRef<HTMLAnchorElement>(null);
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '';

    const switchBlockToShow = (blockName = '') => {
        setBlockToShow(blockName === blockToShow ? null : blockName);
    };

    const handleCallMe = (event: MouseEvent) => {
        event.preventDefault();
        const link = phoneLink.current;
        if (link) {
            link.href = `tel:${phone}`;
            link.click();
            link.href = '';
        }
    };

    const handleCopyPhone = (e: MouseEvent) => {
        const link = phoneLink.current;
        if (link) {
            const copytarget = link.parentElement
            copytarget?.classList.remove('copied');
            navigator.clipboard.writeText(phone);
            checkIfTextCopied(phone, copytarget);
        }
    }

    const checkIfTextCopied = async (text: string, target: HTMLElement | null) => {
        if (text === await navigator.clipboard.readText()) {
            target?.classList.add('copied');
        }
    };

    const phoneToHumanReadable = () => {
        if (!!phone) {
            const readablePhone = `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)} -${phone.slice(8, 10)} -${phone.slice(10, 12)}`
            return readablePhone; // "+7 (999) 999-99-99"}
        } else {
            return '';
        }
    };

    return <section id="section-3" className='content faq flex flex-col text-center p-[50px] pb-0 faq'>
        <div className="faq-header flex m-[25px] flex-col justify-center">
            <h1 className="m-[25px]">Ответы на часто задаваемые вопросы</h1>
            <h3>Не нашли ответ на интересующий Вас вопрос? Задайте его в наших социальных сетях:</h3>
            <div className="flex justify-center gap-x-3 mt-5">
                <a href="https://t.me/LingoQuick">
                    <Image
                        src="/icons/telegram.svg"
                        alt="telegram Logo"
                        className="dark:invert"
                        width={30}
                        height={30}
                        priority
                    /></a>
                <a href="https://wa.me/79959896416">
                    <Image
                        src="/icons/whatsapp.svg"
                        alt="whatsapp Logo"
                        className="dark:invert"
                        width={30}
                        height={30}
                        priority
                    /></a>
            </div>
        </div>
        <div className="faq-questions text-left flex flex-col gap-y-6 m-[35px] mt-5">
            <div className={`faq-element ${blockToShow === 'about' ? 'show' : 'hide'} `}>
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

            <div className={`faq-element ${blockToShow === 'guarantees' ? 'show' : 'hide'} `}>
                <div className='faq-question' onClick={() => switchBlockToShow('guarantees')}>
                    <div className="switcher"></div>
                    <h4>Гарантии:</h4>
                </div>
                <div className='faq-answer'>
                    <p>Мы гарантируем, что вы получите сертификат по окончании прохождения курса обучения в нашей школе, улучшите уровень своего языка и будете работать
                        с квалифицированными преподавателями, у которых есть дипломы/преподаватели, которые получат дипломы в сроки до 2 лет.</p>
                    <p>Наши преподаватели индивидуально уделяют внимание каждому студенту и адаптируют учебную программу к его конкретным потребностям.</p>
                    <p>Мы даем 100% гарантию удовлетворения учебным процессом. Кроме того, наши преподаватели готовы ответить на любые ваши
                        вопросы и обеспечить постоянную поддержку на протяжении всего вашего обучения.</p>
                    <p> Наша школа стремится помочь учащимся достичь своих языковых целей и развить свои навыки до самого высокого уровня.</p>
                </div>
            </div>

            <div className={`faq-element ${blockToShow === 'graduates' ? 'show' : 'hide'} `}>
                <div className='faq-question' onClick={() => switchBlockToShow('graduates')}>
                    <div className="switcher"></div>
                    <h4>Что получат наши выпускники?</h4>
                </div>
                <div className='faq-answer'>
                    <p>Lingo Quick поможет понять и полюбить иностранный язык.</p>
                    <p>Повысит успеваемость в школе и сделает изучение разговорной части  языка увлекательным!</p>
                </div>
            </div>
        </div>

        <div className="phone-number">
            <a onClick={handleCallMe} href="/"><span className="protectedNumber" data-pn={phoneToHumanReadable()} title="Нажмите для звонка"></span></a>
            <Image
                src="/icons/copy.svg"
                alt="Копировать"
                title="Копировать"
                className="dark:invert"
                width={16}
                height={16}
                priority
                onClick={handleCopyPhone}
            />
            <a ref={phoneLink}></a>
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
