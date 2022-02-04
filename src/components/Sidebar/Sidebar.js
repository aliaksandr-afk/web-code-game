import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css'
import Sidebar_courses from './Sidebar_courses/Sidebar_courses.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Sidebar(props) {

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
                    <NavLink to="/code">Code</NavLink>
                </div>
            </nav>

            <Routes>
                <Route path="/game/*" element={<Sidebar_courses courses={props.courses}/>}/>
            </Routes>
        </div>
    )
}