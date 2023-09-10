"use client";
import WaveTextAnimator from "@/app/components/WaveText/WaveTextAnimator";
import RequestFreeLesson, { StudentInfo } from "../RequestFreeLesson/requestFreeLesson";
import { ModalData } from "@/app/components";
import { useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import addRequest from "@/app/services/addRequest";
import { config } from "process";
import { sheets_v4 } from "googleapis";

interface Section1ContentProps {
    // onAddRequest: (data: StudentInfo) => void;
    // sheets: Promise<sheets_v4.Sheets>;
}

const Section1Content = (props: Section1ContentProps) => {
    // const { sheets } = props;
    const [modalData, setModalData] = useState<ModalData>();
    const requestSubmit = (data: StudentInfo) => {
        // addRequest({ data: data, onClose: () => { } });
        addRequest();
        // props.onAddRequest(data);
        showInfo('wait');
    }

    const showInfo = (header = '') => {
        let data: ModalData
        switch (header) {
            case 'about':
                data = {
                    headerText: 'О школе',
                    text: <>
                        <p>Lingo Quick- ассоциация молодых лингвистов, обучающая иностранным языкам школьников 1-11 класс</p>
                        <p>3 языковых направления: английский, испанский, турецкий</p>
                        <p>Преимущество в цене и множество акций</p>
                    </>
                }
                break;

            case 'guarantees':
                data = {
                    headerText: 'Гарантии',
                    text: <>
                        <p>Lingo Quick гарантирует ученикам повышение уровня иностранного языка, а также успеваемости в школе.</p>
                        <p>Наша команда поможет преодолеть языковой барьер и научит</p>
                        <p>ГОВОРИТЬ!</p>
                    </>
                }
                break;

            case 'graduates':
                data = {
                    headerText: 'Что получат наши выпускники?',
                    text: <>
                        <p>Lingo Quick поможет понять и полюбить иностранный язык.</p>
                        <p>Повысит успеваемость в школе и сделает изучение разговорной части  языка увлекательным! </p>
                    </>
                }
                break;

            case 'request':
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <RequestFreeLesson onAddRequest={(data) => requestSubmit(data)} />
                }
                break;

            case 'wait':
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <div>Подождите...</div>
                }
                break;

            default:
                // data = {
                //     headerText: 'Ошибка',
                //     text: 'Помогите нам её воспроизвести и получите скидку на обучение :)'
                // }
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <RequestFreeLesson onAddRequest={(data) => requestSubmit(data)} />
                }
                break;
        }
        setModalData(data);
    }

    const onClickShowInfo = (event: React.MouseEvent<Element, MouseEvent>, header = '') => {
        event.preventDefault();
        showInfo(header);
    }


    return <>
        <div className="header w-full flex no-wrap justify-between p-10">
            <div className={"top-links left flex gap-10 "}>
                <a href="/" >
                    Lingo Quick
                </a>
                <a href="/" onClick={e => onClickShowInfo(e, 'about')}>
                    О школе
                </a>
                <a href="/" onClick={e => onClickShowInfo(e, 'guarantees')}>
                    Гарантии
                </a>
                <a href="/" onClick={e => onClickShowInfo(e, 'graduates')}>
                    Что Вы получите
                </a>
            </div>
            <div className='top-links right flex flex-end'>
                <a href="/" onClick={e => onClickShowInfo(e, 'request')}>
                    Запись на бесплатный урок
                </a>
            </div>
            {modalData && <Modal
                onClose={() => setModalData(undefined)}
                {...modalData}
            />}
        </div>
        <section className='content agitate p-[50px] items-center flex'>

            <div className="w-full flex justify-between">
                <div className='left flex flex-col'>
                    <h1>С нами -</h1>
                    <h1>учить языки проще.</h1>
                    <h1>Начните и Вы!</h1>
                    <p>Онлайн-школа, которая нравится Вашим детям</p>
                </div>
                <div className="right order mt-[auto]">
                    <a href="/"><h1>
                        <WaveTextAnimator text={'Оставить заявку'} onClick={e => onClickShowInfo(e, 'request')} />
                    </h1></a>
                </div>
            </div>
        </section>
    </>
}

export default Section1Content;