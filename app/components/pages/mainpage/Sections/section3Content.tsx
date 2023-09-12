"use client";
import RainbowTextAnimator from "@/app/components/RainBowText/RainbowTextAnimator";

// import { RainbowTextAnimator } from "@/app/components";

// import { RinbowTextAnimator } from "@/app/components/RainBowText/RinbowTextAnimator";

export const Section3Content = () => {
    return <section id="section-3" className='content flex flex-col p-[50px] pb-0 faq'>
        <div className="faq-header flex m-[25px] flex-col justify-center">
            <h1 className="m-[25px]">Ответы на часто задаваемые вопросы</h1>
            <h3>Не нашли ответ на интересующий Вас вопрос? Задайте его в наших социальных сетях</h3>
        </div>
        <div className="faq-questions flex flex-col gap-y-6 m-[50px]">
            <div className="faq-element">
                <h4 className="faq-question">О школе:</h4>
                <div className="faq-answer">
                    <p>Lingo Quick- ассоциация молодых лингвистов, обучающая иностранным языкам школьников 1-11 класс</p>
                    <p>3 языковых направления: английский, испанский, турецкий</p>
                    <p>Преимущество в цене и множество акций</p>
                </div>
            </div>

            <div className="faq-element">
                <h4 className="faq-question">Гарантии:</h4>
                <div className="faq-answer">
                    <p>Lingo Quick гарантирует ученикам повышение уровня иностранного языка, а также успеваемости в школе.</p>
                    <p>Наша команда поможет преодолеть языковой барьер и научит</p>
                    <p>ГОВОРИТЬ!</p>
                </div>
            </div>

            <div className="faq-element">
                <h4 className="faq-question">Что получат наши выпускники?</h4>
                <div className="faq-answer">
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
