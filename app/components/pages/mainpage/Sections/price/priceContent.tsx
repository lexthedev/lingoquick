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
            // icon: <Image
            //     src="/icons/lightning.svg"
            //     alt="lightning"
            //     className="dark:invert"
            //     width={60}
            //     height={60}
            //     priority
            // />,
            icon: <Lightning />,
            title: 'Марафон',
            oldPrice: '10 200 ₽',
            newPrice: '8 699 ₽',
            quantity: 15,
            onePrice: '580 ₽',
        },
        {
            // icon: <Image
            //     src="/icons/task-list.svg"
            //     alt="task-list"
            //     className="dark:invert"
            //     width={60}
            //     height={60}
            //     priority
            // />,
            icon: <TaskList />,
            title: 'Надежный план',
            oldPrice: '7 999 ₽',
            newPrice: '5 999 ₽',
            quantity: 10,
            onePrice: '600 ₽',
        },
        {
            // icon: <Image
            //     src="/icons/sprint.svg"
            //     alt="sprint"
            //     className="dark:invert"
            //     width={60}
            //     height={60}
            //     priority
            // />,
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
