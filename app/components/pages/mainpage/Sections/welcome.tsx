"use client";
import { RequestFreeLesson, StudentInfo } from "../RequestFreeLesson/requestFreeLesson";
import { ModalData } from "@/app/components";
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import addRequest from "@/app/services/addRequest";
import WaveTextAnimator from "@/app/components/WaveText/WaveTextAnimator";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useSearchParams } from "next/navigation";

export const WelcomeContent = () => {
    // const { sheets } = props;
    const [modalData, setModalData] = useState<ModalData>();
    const searchParams = useSearchParams();
    const targetFromSearch = searchParams.get('target');
    const request = searchParams.get('request');
    const requestSubmit = async (data: StudentInfo) => {
        showInfo('wait');
        const status = await addRequest(data);
        if (status === 200) {
            showInfo('ok')
        } else {
            showInfo('error')
        };
    }

    const showInfo = (header = '') => {
        let data: ModalData
        switch (header) {
            case 'request':
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <RequestFreeLesson target={targetFromSearch} onAddRequest={(data) => requestSubmit(data)} />
                }
                break;

            case 'wait':
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <div>Подождите...</div>
                }
                break;

            case 'ok':
                data = {
                    headerText: 'Команда Lingo Quick гордится Вашим стремлением к знаниям!',
                    text: <>
                        <h2>Вы успешно записались!</h2>
                        <span>С Вами свяжутся наши специалисты и всё-всё расскажут.</span>
                    </>
                }
                break;

            case 'error':
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <div>Произошла ошибка, попробуйте немного позднее.</div>
                }
                break;

            default:
                // data = {
                //     headerText: 'Ошибка',
                //     text: 'Помогите нам её воспроизвести и получите скидку на обучение :)'
                // }
                data = {
                    headerText: 'Сделай первый шаг к изучению языков с Lingo Quick',
                    text: <RequestFreeLesson target={targetFromSearch} onAddRequest={(data) => requestSubmit(data)} />
                }
                break;
        }
        setModalData(data);
    }

    useEffect(() => {
        if (!!targetFromSearch) showInfo('request');
    }, [targetFromSearch])

    useEffect(() => {
        if (!!request) showInfo('request');
    }, [request])

    const onClickShowInfo = (event: React.MouseEvent<Element, MouseEvent>, header = '') => {
        event.preventDefault();
        showInfo(header);
    }

    return <>
        {modalData && <Modal
            onClose={() => setModalData(undefined)}
            {...modalData}
        />}
        <section className='content agitate'>
            <div className="header">
                <HeaderMenu />
                {/* <div className='top-links'>
                    <a href="/" onClick={e => onClickShowInfo(e, 'request')}>
                        Запись на бесплатный урок
                    </a>
                </div> */}
            </div>

            <div className="main-section-content">
                <div className="main-description">
                    <div>
                        <h1>
                            <div>С нами -</div>
                            <div>учить языки проще.</div>
                            <div>Начните и Вы!</div>
                        </h1>
                        <p>Онлайн-школа, которая нравится Вашим детям</p>
                    </div>
                    <div className="request-free-lesson-button">
                        <a href="/" onClick={e => onClickShowInfo(e, 'request')}>
                            <h1>
                                {/* <WaveTextAnimator text={'Оставить заявку'} onClick={e => onClickShowInfo(e, 'request')} /> */}
                                <span>Оставить заявку</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
