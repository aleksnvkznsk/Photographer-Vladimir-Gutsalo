'use client';
import '@/styles/portfolio.scss';
import { useState } from 'react';

import { wedding } from '@/components/import';
import { lovestory } from '@/components/import';
import { individual } from '@/components/import';
import { commercial } from '@/components/import';

function Portfolio() {

    const [state, setState] = useState('');

    return (
        <>
            <div id="pоrtfolio" className="content">
                <div className="content__button">
                    <button className="content__button__btn" onClick={() => { setState('wedding') }}>Свадьба</button>
                    <button className="content__button__btn" onClick={() => { setState('lovestory') }} >Love story</button>
                    <button className="content__button__btn" onClick={() => { setState('individual') }} >Индивидуальная</button>
                    <button className="content__button__btn" onClick={() => { setState('сommercial') }} >Коммерческие</button>
                </div>

                {state === '' &&
                    <div className="wedding">
                        {wedding.map((item) => {
                            return (
                                <img className="photo" src={item} alt="" />
                            )
                        })}
                    </div>
                }

                {state === 'wedding' &&
                    <div className="wedding">
                        {wedding.map((item) => {
                            return (
                                <img className="photo" src={item} alt="" />
                            )
                        })}
                    </div>
                }

                {state === 'lovestory' &&
                    <div className="lovestory">
                        {lovestory.map((item) => {
                            return (
                                <img className="photo" src={item} alt="" />
                            )
                        })}
                    </div>
                }

                {state === 'individual' &&
                    <div className="individual">
                        {individual.map((item) => {
                            return (
                                <img className="photo" src={item} alt="" />
                            )
                        })}
                    </div>
                }

                {state === 'сommercial' &&
                    <div className="commercial">
                        {commercial.map((item) => {
                            return (
                                <img className="photo" src={item} alt="" />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    );
}

export default Portfolio;