import { ModalData } from "@/app/components";
import Modal from "@/app/components/Modal/Modal";
import { MouseEvent, useState } from "react";
import { BuyCourse } from "./BuyCourse";
import { ICard } from "./Card";
import { Group } from "@/app/components/Icons/Group";

type WideCard = Omit<ICard, 'icon' | 'title'> & {
    icon?: any;
    title?: string;
}

export const GroupCard = (props: WideCard) => {
    const { isOpen, onClick, icon, title, oldPrice, price, priceValue, quantity, onePrice, } = props;
    const [modalData, setModalData] = useState<ModalData>();

    const onClickBuyCourse = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const { currentTarget } = event;

        const itemName = currentTarget.getAttribute('data-item') || '';
        const value = currentTarget.getAttribute('data-value') || '';

        setModalData({
            headerText: `Покупка пакета знятий «${itemName}»`,
            text: <BuyCourse itemName={itemName} value={value} />
        })
    }

    return <>
        <h3 className={`price-card-outer-title ${isOpen ? 'open' : ""}`}>Групповые занятия</h3>
        <div
            className={`price-card wide ${isOpen ? 'open' : ""}`}
            onClick={onClick}>
            <div className="card-icon">{icon || <Group />}</div>
            <div className="card-title">{title || 'Групповые занятия'}</div>
            <div className="card-content">
                <div className="card-content-price-group">
                    {oldPrice && <div className="card-price-old">{oldPrice}</div>}
                    <div className="card-price-new">{price}</div>
                    <div className="class-quantity">
                        <div>Количество занятий:</div>
                        <div className="yellow">{quantity}</div>
                    </div>
                    <div className="class-one-price">
                        <div>Стоймость одного занятия:</div>
                        <div className="yellow">{onePrice}</div>
                    </div>
                    <div className="register">
                        <a className="register-link" onClick={onClickBuyCourse} data-value={priceValue} data-item={'Групповые занятия'} href={`/?target=Пакет занятий "Групповой"`}>
                            <b>Приобрести</b>
                        </a>
                    </div>
                </div>
                <p className="price-dislamer">Групповые занятия в <span className="gold-logo">Lingo Quick</span> дают возможность не только выучить язык, но и получить важные навыки диалога и восприятия языка. Групповые занятия позволят проводить интерактивные работы, проектные задания и решать вопросы коммуникативной задачи среди учеников, разного уровня восприятия</p>
            </div>
            {modalData && <Modal
                onClose={() => setModalData(undefined)}
                {...modalData}
            />}
        </div></>
}