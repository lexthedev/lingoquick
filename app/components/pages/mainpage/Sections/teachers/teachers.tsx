'use client'
import { MouseEvent, MouseEventHandler, useState } from 'react';
import './teachers.css';
import { Carousel } from 'react-responsive-carousel';

const teachers: Array<{ img: string, html: string }> = [{
    img: '/img/teachers/teacher1.png',
    html: `<div>Литвишко София</div>
<div>Уровень английского - В2</div>
<div>Опыт преподавания - 2 года</div>
<br/>
<div>Открываю двери в мир английского и делаю это увлекательно!</div>`
},
{
    img: '/img/teachers/teacher2.png',
    html: `<div>Грецкий Дмитрий</div>
 <div>Уровень английского - B2</div>
<div>Опыт преподавания - 4 года</div>
<div>Английский язык — это необходимость в современном мире, и мы вместе сможем его освоить!</div>`
},
{
    img: '/img/teachers/teacher3.png',
    html: `<div>Ткачев Григорий</div>
<div>Уровень английского - С1</div>
<div>Опыт преподавания - 2 года</div>
<br/>
<div>Структура — это ключ к получению любого навыка!</div>`
}]

export const Teachers = () => {

    const [isOpen, setOpen] = useState(false);
    const showTeachers = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpen(true)
    }

    return <section className={`content teachers ${isOpen && 'open'}`}>
        <div className='float-form float-form-1' />
        <div className='float-form float-form-2' />
        <div className='float-form float-form-3' />
        <div className='float-form float-form-4' />
        <div className='float-form float-form-5' />
        <div className='float-form float-form-6' />
        <div className='float-form float-form-7' />
        <div className='placeholder'>
            <h1 className='title'>Познакомьтесь со своим преподавателем еще до начала обучения</h1>
            <div className='description'>
                <div className='description-text'>
                    Узнав больше информации о преподавателях вы сможете выбрать его самостоятельно, для своей цели обучения. В карточке преподавателя вы найдете: Стаж работы, возраст, уровень владения языком и наставление от преподавателя!
                </div>
                <a className='teacher-list-btn' onClick={() => setOpen(true)}><span>Карточки преподавателей</span></a>
            </div>
        </div>
        {isOpen && <div className='teacher-list'>
            <div className='describe'>Преподавательский состав онлайн-школы <span className='gold-logo'>Lingo Quick</span> —  молодые преподаватели, горящие своим делом и всегда готовые помочь вам на пути изучения нового языка или повышения квалификации! Здесь вы можете познакомиться с вашим будущим преподавателем еще до пробного урока и выбрать подходящего вам, основываясь на указанных характеристиках.</div>
            <div className='teacher-slider-wrap'>
                <Carousel
                    className='teacher-slider'
                    autoPlay={isOpen}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    showArrows={false}
                    interval={3000}
                >
                    {teachers.map((t) => {
                        return <div
                            key={t.img}
                            className='teacher'
                        >
                            <img
                                alt='teacher photo'
                                src={t.img}
                            />
                            <div className='bio' dangerouslySetInnerHTML={{ __html: t.html }} />
                        </div>
                    })}
                </Carousel>
            </div>
        </div>
        }
    </section >
}