import React from 'react';
import { Component } from 'react';

import { NavLink } from 'react-router-dom';
import style from './Sidebar_courses.module.css'
import Header from '../Header/Header.js'
import Profile from '../Profile/Profile';
import Prewiew from '../Preview/Preview.js'
import Page from '../Page/Page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Sidebar_courses() {

    return (
        
        <div className={style.sidebar_courses}>
            <nav className={style.sidebar_courses_nav}>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/1">Page 1</NavLink>
                </div>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/2">Page 2</NavLink>
                </div>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/3">Page 3</NavLink>
                </div>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/4">Page 4</NavLink>
                </div>
            </nav>
        </div>
    )
}
