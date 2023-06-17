import '@/styles/header.scss';

function Header() {
    return (
        <header className="header" id="header">
            <div className="header__container">
                <div className="header__inner">
                    <div className="header__logo">Vladimir Gutsalo</div>
                    <nav className="nav">
                        <a className="nav__link" href="#home">Главная</a>
                        <a className="nav__link" href="#about">Обо мне</a>
                        <a className="nav__link" href="#pоrtfolio">Портфолио</a>
                        <a className="nav__link" href="#price">Прайс</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;