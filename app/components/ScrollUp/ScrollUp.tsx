'use client';
import { useLayoutEffect, useState } from "react"
import './ScrollUp.css'

const ScrollUp = () => {

    const [btnVisible, setBtnVisible] = useState(false);

    const checkToShowScroll = () => {
        const showScroll = window.scrollY > 0;
        setBtnVisible(showScroll)
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', checkToShowScroll);
        return () => {
            window.removeEventListener('scroll', checkToShowScroll);
        };
    }, []);

    return <div className={`Scroll-up-btn ${btnVisible ? 'show' : ''}`} onClick={() => window.scrollTo(0, 0)} />
}

export default ScrollUp;