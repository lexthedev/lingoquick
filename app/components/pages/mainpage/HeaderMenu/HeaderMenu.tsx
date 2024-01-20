'use client';
import SmallMenu from "./Smallmenu";

const HeaderMenu = () => {

    const MenuItems = <>
        <div className="top-link-wrap">
            <a href="?showFAQ=about#section-faq" >
                <div className="link-filler">
                    <div className="link-text">О школе</div>
                </div>
            </a>
        </div>
        <div className="top-link-wrap">
            <a href="?showFAQ=guarantees#section-faq" >
                <div className="link-filler">
                    <div className="link-text">Гарантии</div>
                </div>
            </a>
        </div>
        <div className="top-link-wrap">
            <a href="?showFAQ=graduates#section-faq" >
                <div className="link-filler">
                    <div className="link-text">Что Вы получите</div>
                </div>
            </a>
        </div>
    </>

    return <div className="navigate">
        <nav className={"top-links wide-menu"}>
            <div className="fake-link"><div className="filler"></div></div>
            <div className="top-link-wrap">
                <a href="/">
                    <div className="link-filler">
                        <div className="link-text">Lingo Quick</div>
                    </div>
                </a>
            </div>
            {MenuItems}
            <div className="top-link-wrap">
                <a href="/?request=true">
                    <div className="link-filler">
                        <div className="link-text">Запись на бесплатный урок</div>
                    </div>
                </a>
            </div>
            <div className="fake-link"><div className="filler"></div></div>
        </nav>
        <SmallMenu>
            {MenuItems}
        </SmallMenu>
    </div>
}

export default HeaderMenu;