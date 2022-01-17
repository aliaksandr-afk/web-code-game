import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css'
import Sidebar_courses from '../Sidebar_courses/Sidebar_courses';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
            </nav>

            <Routes>
                <Route path="/game/*" element={<Sidebar_courses />}/>
            </Routes>
        </div>
    )
}