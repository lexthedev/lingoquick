export interface ICard {
    isOpen?: boolean;
    onClick?: () => void;

    icon: any;
    title: string;
    oldPrice: string;
    newPrice: string;
    quantity: number;
    onePrice: string;
}

export const Card = (props: ICard) => {
    const { isOpen, onClick, icon, title, oldPrice, newPrice, quantity, onePrice, } = props;

    return <div
        className={`price-card ${isOpen ? 'open' : ""}`}
        onClick={onClick}>
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
        <div className="card-content">
            <div className="card-price-old">{oldPrice}</div>
            <div className="card-price-new">{newPrice}</div>
            <div className="class-quantity">
                <div>Количество занятий:</div>
                <div className="yellow">{quantity}</div>
            </div>
            <div className="class-one-class">
                <div>Стоймость одного занятия:</div>
                <div className="yellow">{onePrice}</div>
            </div>
            <p className="price-dislamer">Вы платите только за количество занятий, а подача и качество занятий остаются одинаковыми, вне зависимости от выбранного вами тарифа</p>
            <div className="register">
                <a className="register-link" href={`/?target=Пакет занятий "${title}"`}>
                    <b>Записаться</b>
                </a>
            </div>
        </div>
    </div>
}