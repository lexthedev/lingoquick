'use client';
import SmallMenu from "./Smallmenu";

const HeaderMenu = () => {

    const MenuItems = <>
        <a href="?showFAQ=about#section-faq" >
            О школе
        </a>
        <a href="?showFAQ=guarantees#section-faq" >
            Гарантии
        </a>
        <a href="?showFAQ=graduates#section-faq" >
            Что Вы получите
        </a>
    </>

    return <div className="navigate">
        <nav className={"top-links wide-menu left flex gap-10 "}>
            <a href="/">
                <div>Lingo Quick</div>
            </a>
            {MenuItems}
        </nav>
        <SmallMenu>
            {MenuItems}
        </SmallMenu>
    </div>
}

export default HeaderMenu;