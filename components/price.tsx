import '@/styles/price.scss';


function Price() {
    return (
        <>
            <div id="price" className="price">
                <h1 className="h1">Стоимость свадебной фотосъемки</h1>
                <div className="price__block">

                    <div className="column">
                        <div className="price__img">
                            <img className="price__jpg" src="/price/1.jpg" />
                        </div>
                        <div className="invisible"><img className="price__jpg" src="/price/1.jpg" /></div>
                        <div className="pricetag">
                            <p className="price__header">Пакет MINI</p>
                            <div className="price__text">
                                <ul>
                                    <li>встреча и консультация;</li>
                                    <li>фотосъемка 5 часов;</li>
                                    <li>цветокоррекция около 100 - 200 фото;</li>
                                    <li>художественная ретушь около 10-15 фото;</li>
                                    <li>все фото записываются на Электронный носитель;</li>
                                    <li> все фотографии вы получите электронным вариантом, где сможете скачать все
                                        фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                    <li className="price__text">печать 5 фото (10x15).</li>
                                </ul>
                            </div>
                            <h2 className="price__money">12 500 руб</h2>
                        </div>
                    </div>
                    <div className="column">
                        <div className="invisible"><img className="price__jpg" src="/price/2.jpg" /></div>
                        <div className="pricetag">
                            <p className="price__header">Пакет STANDART</p>
                            <div className="price__text">
                                <ul>
                                    <li>встреча и консультация;</li>
                                    <li>фотосъемка 7 часов;</li>
                                    <li>цветокоррекция около 200 - 300 фото;</li>
                                    <li>художественная ретушь около 15 - 20 фото;</li>
                                    <li>все фото записываются на Электронный носитель;</li>
                                    <li>все фотографии вы получите электронным вариантом, где сможете скачать все
                                        фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                    <li>печать 10 фото (10x15).</li>
                                </ul>
                            </div>
                            <h2 className="price__money">17 500 руб</h2>
                        </div>
                        <div className="price__img">
                            <img className="price__jpg" src="/price/2.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="price__img"><img className="price__jpg" src="/price/3.jpg" /></div>
                        <div className="invisible"><img className="price__jpg" src="/price/3.jpg" /></div>
                        <div className="pricetag">
                            <p className="price__header">Пакет MAXI</p>
                            <div className="price__text">
                                <ul>
                                    <li>встреча и консультация;</li>
                                    <li>фотосъемка 9 часов;</li>
                                    <li>цветокоррекция около 300 - 400 фото;</li>
                                    <li>художественная ретушь 25 - 30 фото;</li>
                                    <li>все фото записываются на Электронный носитель;</li>
                                    <li>все фотографии вы получите электронным вариантом, где сможете скачать все
                                        фотографии разом, или же несколько понравившихся, без потери качества;</li>
                                    <li>скидка на Love Story;</li>
                                    <li>печать 10 фото (10x15).</li>
                                </ul>
                            </div>
                            <h2 className="price__money">22 500 руб</h2>
                        </div>
                    </div>
                    <div className="column">
                        <div className="invisible"><img className="price__jpg" src="/price/4.jpg" /></div>
                        <div className="pricetag">
                            <p className="price__header">Пакет Полный день</p>
                            <div className="price__text">
                                <ul>
                                    <li>встреча и консультация;</li>
                                    <li>работа от сборов до конца банкета;</li>
                                    <li>цветокоррекция около 400 - 600 фото;</li>
                                    <li>художественная ретушь 35 - 40 фото;</li>
                                    <li>все фото записываются на электронный носитель;</li>
                                    <li>вы получите электронную версию всех ваших фотографий, 
                                        которую вы можете загрузить без потери качества;</li>
                                    <li>скидка на Love Story;</li>
                                    <li>помощь в составлении тайминга свадебного дня;</li>
                                    <li>печать 15 фото (10x15).</li>
                                </ul>
                            </div>
                            <h2 className="price__money">30 000 руб</h2>
                        </div>
                        <div className="price__img">
                            <img className="price__jpg" src="/price/4.jpg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Price;