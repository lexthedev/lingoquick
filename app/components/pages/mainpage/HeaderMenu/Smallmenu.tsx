'use client';
import './HeaderMenu.css'

interface Smallmenuprops {
    children: React.ReactNode;
}

const SmallMenu = (props: Smallmenuprops) => {
    const { children } = props;
    return <div className="top-links burger-menu" onClick={(e) => e.currentTarget.classList.toggle('open')}>
        <div className="menu">
            <div className={`tri-menu`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="/">
                <div>Lingo Quick</div>
            </a>
        </div>
        <div className="menu-items">
            {children}
        </div>

    </div>
}

export default SmallMenu;