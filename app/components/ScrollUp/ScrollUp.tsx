'use client';
import { useLayoutEffect, useState } from "react"
import './ScrollUp.css'

const ScrollUp = () => {

    const [btnVisible, setBtnVisible] = useState(false);

    const scrollToAnchorElement = () => {
        const urlPieces = location.href.split('#');
        if (urlPieces.length > 1) {
            const element = document.getElementById(urlPieces[1])
            if (element) element.scrollIntoView(false);
        }
    }

    useEffect(() => { fetch('/api/createPayment', { method: 'GET' }).then((data) => console.log(data)) }, []);

    useLayoutEffect(() => {
        if (location.href.search('#') > 0) setBtnVisible(true)
        scrollToAnchorElement(); // TO-DO: Remove this ad-hoc
    }, []);

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