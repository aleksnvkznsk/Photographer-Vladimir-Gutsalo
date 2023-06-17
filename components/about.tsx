import '@/styles/about.scss';

function About() {
    return (
        <>
            <div id="about" className="about">
                <img className="about__photo" src="/photoAbout.jpg" alt="" />
                <div className="verticalline"></div>
                <div className="about__block">
                    <p className="about__text">
                        Привет! Меня зовут Владимир Гуцало, и я снимаю свадьбы, Love story, семейные, индивидуальные и
                        коммерческие фотосессии.
                    </p>
                    <p className="about__text">
                        Немного о себе, вот уже более 5-ти лет я живу фотографией, моя семья имеет сеть цифровых фотосалонов и
                        уже с малых лет я был увлечён сферой фото. Так как я творческий человек ещё увлекаюсь музыкой, закончил
                        художественную и музыкальную школу. Мое творчество без границ! Также меня воспитал и дал дисциплину
                        спорт - восточные единоборства! Но жизнь привела меня к фотоисскуству и это то направление которое мне
                        по душе.
                    </p>
                    <p className="about__text">
                        Я не просто оказываю для вас услуги, а вы не просто клиент.
                    </p>
                    <p className="about__text">
                        На свадьбе фотограф будет тем человеком, с которым молодожёны проводят больше всего времени в свадебный
                        день. Я буду рядом в самые важные моменты праздника и сохраню их специально для вас.
                    </p>
                    <p className="about__text">
                        И помните, Вы уникальны! Ваши фотографии должны быть такими же!
                    </p>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default About;