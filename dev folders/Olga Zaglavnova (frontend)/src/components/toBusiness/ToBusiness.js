import React from 'react';
import './toBusiness.css';
import toBusinessImage from './../../img/rectangle-578х405.png';
import coinsImage from './../../img/coins.png';
import monitorImage from './../../img/monitor.png';
import shieldImage from './../../img/shield.png';
import clockImage from './../../img/clock.png';

function ToBusiness() {
    return (
        <>
            <section className="to-business">
                <div className="to-business-block">
                    <h2 className="to-business-header">Бизнесу</h2>
                    <p className="to-business-text">Мы помогаем Бизнесу разобраться в финансовых инструментах и подобрать выгодные предложения на рынке финансовых услуг.</p>
                    <p className="to-business-text">Чтобы сделать работу портала наиболее эффективной, мы предлагаем следующие возможности :</p>
                    <ul className="to-business-list">
                        <li className="to-business-item">Описание финансовых продуктов, их преимуществ и условий получения</li>
                        <li className="to-business-item">Подбор предложений от компаний - партнеров и их оформление</li>
                        <li className="to-business-item">Сравнение условий продуктов у различных компаний - партнеров</li>
                        <li className="to-business-item">Получение консультации по решению задач бизнеса</li>
                    </ul>
                </div>
                <img src={toBusinessImage} width="578" height="405" alt="Бизнесу" className="to-business-img" />
            </section>
            <div className="h-line"></div>
            <section className="why-we">
                <h3 className="why-we-header">Почему мы ?</h3>
                <ul className="why-we-list">
                    <li className="why-we-item">
                        <figure className="why-we-article">
                            <img src={coinsImage} width="110" height="110" alt="Экономия" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Экономия</h4>
                                <p className="why-we-article-text">Вы получите коммерческие предложения от многих компаний, из которых выберете максимально выгодное для Вас</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="why-we-item">
                        <figure className="why-we-article">
                            <img src={monitorImage} width="110" height="110" alt="Удобство" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Удобство</h4>
                                <p className="why-we-article-text">Оставив всего одну заявку на продукт, Вы получите предложения от всех компаний-партнеров, зарегистрированных на портале</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="why-we-item">
                        <figure className="why-we-article">
                            <img src={shieldImage} width="110" height="110" alt="Безопасность" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Безопасность</h4>
                                <p className="why-we-article-text">На портале зарегистрированы финансовые организации, получившие соответствующие лицензии в ЦБ РФ, а контактные данные они получают только в том случае, если Вы акцептуете предложение</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="why-we-item">
                        <figure className="why-we-article">
                            <img src={clockImage} width="110" height="110" alt="Скорость" className="why-we-article-img" />
                            <figcaption className="why-we-caption">
                                <h4 className="why-we-article-header">Скорость</h4>
                                <p className="why-we-article-text">Все взаимодействие с финансовыми организациями проходит на одном портале, что экономит время и позволяет в короткие сроки решить вопрос получения финансирования</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default ToBusiness;