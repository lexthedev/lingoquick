"use client";

import { useState } from "react";
import { Card, ICard } from "../../Card/Card";
import './price.css'
import { Lightning } from "@/app/components/Icons/Lightning";
import { TaskList } from "@/app/components/Icons/TaskList";
import { Sprint } from "@/app/components/Icons/Sprint";

export const PriceContent = () => {
    const [activeCard, setActiveCard] = useState(-1);

    const Cards: ICard[] = [
        {
            icon: <Lightning />,
            title: 'Марафон',
            oldPrice: '10 200 ₽',
            newPrice: '8 699 ₽',
            quantity: 15,
            onePrice: '580 ₽',
        },
        {
            icon: <TaskList />,
            title: 'Надежный план',
            oldPrice: '7 999 ₽',
            newPrice: '5 999 ₽',
            quantity: 10,
            onePrice: '600 ₽',
        },
        {
            icon: <Sprint />,
            title: 'Спринт',
            oldPrice: '5 999 ₽',
            newPrice: '3 999 ₽',
            quantity: 5,
            onePrice: '800 ₽',
        }
    ];

    return <section className='content prices'>
        <div className="prices-cards">
            {Cards.map((card, index) => <Card
                {...card}
                key={index}
                isOpen={activeCard === index}
                onClick={() => setActiveCard(activeCard === index ? -1 : index)}
            />)}
        </div>
    </section>
}
