import React from 'react';
import { Component } from 'react';

import { NavLink } from 'react-router-dom';
import style from './Sidebar_courses.module.css'

export default function Sidebar_courses(props) {

    console.log(props)
    return (
        
        <div className={style.sidebar_courses}>
            <nav className={style.sidebar_courses_nav}>
                <div className={style.sidebar_courses_item}>
                    <NavLink to='/game/JS'>{props.courses[0].name}</NavLink>
                </div>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/HTML">{props.courses[1].name}</NavLink>
                </div>
                <div className={style.sidebar_courses_item}>
                    <NavLink to="/game/CSS">{props.courses[2].name}</NavLink>
                </div>
            </nav>
        </div>
    )
}
