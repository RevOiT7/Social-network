import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/messages" activeClassName={s.active}>Massages</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            <div className="frendsPanel">
                <h1>Frends</h1>
                <div className={s.frendsFoto}>
                    <img src="https://pp.userapi.com/c311620/v311620434/5633/c0ffZFtqA_U.jpg?ava=1" alt=""/>
                    <img src="https://99px.ru/sstorage/41/2014/09/image_412009141820269742280.jpg" alt=""/>
                    <img src="https://pp.userapi.com/c841227/v841227881/11478/hE2z1gNcGZQ.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
