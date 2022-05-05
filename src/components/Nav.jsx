import React from 'react';
import s from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
    <div className={s.Container}>
<div className={s.sideBar}>
    <div className={s.sideBarContainer}>
        <div className={s.mainS}>
            <Link to='/Home' className={s.mainSA}>Главная</Link>
        </div>

        <div className={s.onlineS}>
            <Link to='/Online-teatr' className={s.mainSA}>Онлайн-кинотеатр</Link>
        </div>


        <div className={s.filmS}>
            <Link to='/Films' className={s.mainSA}>Фильмы</Link>
        </div>

        <div className={s.serialS}>
            <Link to='Serials' className={s.mainSA}>Сериалы</Link>
        </div>       

    </div>
</div>
</div>
    )
}



export default Nav;
