'use client';
import './HeaderMenu.css'

interface Smallmenuprops {
    children: React.ReactNode;
}

const SmallMenu = (props: Smallmenuprops) => {
    const { children } = props;
    return <div className="top-links mobile-view">
        <div className="burger-placeholder">
            <div className="burger-menu" onClick={(e) => e.currentTarget.classList.toggle('open')}>
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
                <nav className="menu-items">
                    {children}
                </nav>
            </div>
        </div>
        <div className='make_request'>
            <a href="/?request=true">
                <div className="link-text">Запись на бесплатный урок</div>
            </a>
        </div>
    </div>
}

export default SmallMenu;