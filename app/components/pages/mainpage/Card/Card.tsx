import { ModalData } from "@/app/components";
import Modal from "@/app/components/Modal/Modal";
import { MouseEvent, useState } from "react";
import { BuyCourse } from "./BuyCourse";

export interface ICard {
    isOpen?: boolean;
    onClick?: () => void;
    icon: any;
    title: string;
    oldPrice?: string;
    price: string;
    priceValue: number;
    quantity: number;
    onePrice: string;
}


export const Card = (props: ICard) => {
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

    return <div
        className={`price-card ${isOpen ? 'open' : ""}`}
        onClick={onClick}>
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
        <div className="card-content">
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
            <p className="price-dislamer">Вы платите только за количество занятий, а подача и качество занятий остаются одинаковыми, вне зависимости от выбранного вами тарифа</p>
            <div className="register">
                <a className="register-link" onClick={onClickBuyCourse} data-value={priceValue} data-item={title} href={`/?target=Пакет занятий "${title}"`}>
                    <b>Приобрести</b>
                </a>
            </div>
        </div>
        {modalData && <Modal
            onClose={() => setModalData(undefined)}
            {...modalData}
        />}
    </div>
}