"use client";
import { ModalData } from "../..";
import { useState } from 'react';
import Modal from "../../Modal/Modal";

const Header = (props: { className: string }) => {
    const { className } = props;
    const [modalData, setModalData] = useState<ModalData>();

    const showInfo = (event: React.MouseEvent<Element, MouseEvent>, header = '') => {
        event.preventDefault();
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

            default:
                data = {
                    headerText: 'Ошибка',
                    text: 'Помогите нам её воспроизвести и получите скидку на обучение :)'
                }
                break;
        }
        setModalData(data);
    }

    return <div className="header w-full flex no-wrap justify-between p-10">
        <div className={"top-links left flex gap-10 "}>
            <a href="/" >
                Lingo Quick
            </a>
            <a href="/" onClick={e => showInfo(e, 'about')}>
                О школе
            </a>
            <a href="/" onClick={e => showInfo(e, 'guarantees')}>
                Гарантии
            </a>
            <a href="/" onClick={e => showInfo(e, 'graduates')}>
                Что Вы получите
            </a>
        </div>
        <div className='top-links right flex flex-end'>
            <a href="/">
                Запись на бесплатный урок
            </a>
        </div>
        {modalData && <Modal
            onClose={() => setModalData(undefined)}
            {...modalData}
        />}
    </div>
}

export default Header;