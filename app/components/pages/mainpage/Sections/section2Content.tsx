"use client";

export const Section2Content = () => {
    return <section className='content students flex items-end'>
        <div className='float-care'>
            <h1>
                <div>С заботой о клиентах.</div>
                <div>Подберём индивидуальный курс обучения для вас!</div>
            </h1>
        </div>
        <div className='bottom-promo'>
            <div className='promo-item'>
                <div>
                    <h2>Английский для школы</h2>
                    <p>2-11 классы</p>
                </div>
                <img src="/img/books.webp" alt="books" />
            </div>
            <div className='promo-item'>
                <div>
                    <h2>Английский для путешествий</h2>
                    <p>Изучим диалект и базовые фразы для путешествий</p>
                </div>
                <img src="/img/ticketpng.png" alt="books" />
            </div>
            <div className='promo-item'>
                <div>
                    <h2>Экзамены по английскому</h2>
                    <p>Подготовим к контрольной, ВПР или ОГЭ</p>
                </div>
                <img src="/img/checklist.webp" alt="books" />
            </div>
        </div>
    </section>
}
