import './courses.css'

export const CoursesContent = () => {
    return <section className='content courses'>
        <div className='content-wrapper'>
            <div className='selector-wrapper'>
                <div className='courses-title'>
                    <div>Выберите курс,</div>
                    <div>который подойдет именно Вам!</div>
                </div>
                <div className='courses-list'>
                    <div className='course-wrap'>
                        <div className="course">
                            <div className="title">Дети 8-12 лет</div>
                            <div className='description'>Повысим успеваемость в школе. Привьем любовь к языкам</div>
                            <div className="link-wrap">
                                <a className="link" href="/?target=Для школы">Записаться</a>
                            </div>
                            <div className="flyout-descr">Повысим успеваемость в школе. Привьем любовь к языкам</div>
                        </div>
                        <div className="course-icon"></div>
                    </div>
                    <div className='course-wrap'>
                        <div className="course">
                            <div className="title">Подготовка к экзаменам</div>
                            <div className='description'>Поможем подготовиться к сдаче ОГЭ, ЕГЭ или вступительным экзаменам</div>
                            <div className="link-wrap">
                                <a className="link" href="/?target=Для экзаменов">Записаться</a>
                            </div>
                            <div className="flyout-descr">Поможем подготовиться к сдаче ОГЭ, ЕГЭ или вступительным экзаменам</div>
                        </div>
                        <div className="course-icon"></div>
                    </div>
                    <div className='course-wrap'>
                        <div className="course">
                            <div className="title">Язык для путешествий</div>
                            <div className='description'>Изучим диалекты и разговорный сленг с преподавателем</div>
                            <div className="link-wrap">
                                <a className="link" href="/?target=Для путешествий">Записаться</a>
                            </div>
                            <div className="flyout-descr icon-inside">
                                <div className='flyout-descr-text'>Изучим диалекты и разговорный сленг с преподавателем</div>
                                <div className="course-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='advice'>
                <div className='text'>Многозадачность современного мира требует специализированного обучения по разным программам. Вы можете выбрать индивидуальный курс обучения.</div>
                <div className='boi-thoughts'>
                    <img src="/img/courses/boi.png" alt="boy" />
                </div>
            </div>
        </div>
    </section>
}

