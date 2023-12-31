"use client";

export const TargetsContent = () => {
    return <section className='content courses'>
        <div className="courses-title">
            <h1>Возможность выбрать курс для обучения</h1>
            <h2>
                <span>Многозадачность современного мира требует специализированного обучения по разным программам.</span>
                <br />
                <span>Вы можете выбрать индивидуальный курс обучения.</span>
            </h2>
        </div>
        <div className="target-list">
            <a href="/?target=Для школы" className="target-wrapper">
                <div className="target">
                    <h2><b>Английский для школы</b></h2>
                    <p>Повысим успеваемость ученика в школе и привьем любовь
                        к английскому языку
                    </p>
                </div>
            </a>
            <a href="/?target=Для экзаменов" className="target-wrapper">
                <div className="target">
                    <h2><b>Английский для экзаменов</b></h2>
                    <p>Поможем ученику подготовиться
                        к контрольной, ВПР или ОГЭ по английскому языку</p>
                </div>
            </a>
            <a href="/?target=Для путешествий" className="target-wrapper">
                <div className="target">
                    <h2><b>Английский для путешествий</b></h2>
                    <p>Поможем ученику изучить
                        английский язык и диалекты для поездок за границу</p>
                </div>
            </a>
        </div>
    </section>
}
