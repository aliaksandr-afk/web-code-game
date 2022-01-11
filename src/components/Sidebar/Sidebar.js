import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css'

export default function Sidebar() {

    return (
        <div className={style.sidebar}>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/game">Game</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/info">Info</NavLink>
                </div>
            </nav>
        </div>
    )
}
