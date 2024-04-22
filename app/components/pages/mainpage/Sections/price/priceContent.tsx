"use client";

import { useState } from "react";
import { Card, ICard } from "../../Card/Card";
import './price.css'
import { Lightning } from "@/app/components/Icons/Lightning";
import { TaskList } from "@/app/components/Icons/TaskList";
import { Sprint } from "@/app/components/Icons/Sprint";
import { GroupCard } from "../../Card/GroupCard";

export const PriceContent = () => {
    const [activeCard, setActiveCard] = useState(-1);

    const Cards: ICard[] = [
        {
            icon: <Lightning />,
            title: '10 уроков',
            price: '6 499 ₽',
            priceValue: 6499,
            quantity: 10,
            onePrice: '650 ₽',
        },
        {
            icon: <TaskList />,
            title: '7 уроков',
            price: '5 249 ₽',
            priceValue: 5249,
            quantity: 7,
            onePrice: '750 ₽',
        },
        {
            icon: <Sprint />,
            title: '5 уроков',
            price: '3 999 ₽',
            priceValue: 3999,
            quantity: 5,
            onePrice: '800 ₽',
        }
    ];

    return <section className='content prices'>
        <div className="title">
            <h1>Вместе - дешевле</h1>
            <h2>Подберите свой пакет занятий</h2>
        </div>
        <div className="prices-cards">
            {Cards.map((card, index) => <Card
                {...card}
                key={index}
                isOpen={activeCard === index}
                onClick={() => setActiveCard(activeCard === index ? -1 : index)}
            />)}
        </div>
        <div>
            <GroupCard
                price={"4500 ₽"}
                priceValue={4500}
                quantity={10}
                onePrice={"450 ₽"}
                isOpen={activeCard === 999}
                onClick={() => setActiveCard(activeCard === 999 ? -1 : 999)}
            />
        </div>
    </section>
}
