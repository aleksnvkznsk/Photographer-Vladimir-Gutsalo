"use client";
import '@/styles/navbar.scss'
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <div className="menuOpen" onClick={() => setOpen(prev => !prev)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                {
                    open && (
                        <div className="container__nav" onClick={() => setOpen(prev => !prev)}>

                                <a className="container__nav__href" href="#home">Главная</a>

                                <a className="container__nav__href" href="#about">Обо мне</a>

                                <a className="container__nav__href" href="#pоrtfolio">Портфолио</a>

                                <a className="container__nav__href" href="#price">Прайс</a>
                        </div>
                    )
                }
        </div>
    )
}

export default NavBar;