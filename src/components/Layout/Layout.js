import React from 'react';
import { Component } from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header.js'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Page from '../Page/Page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Layout() {

    let courseContent = [
        {id: 1, name: "JS", content: "Квест JavaScript усвоит даже тот, кто никогда не программировал. Вы узнаете, что такое классы, объекты, методы, переменные, типы данных, массивы, условные операторы и циклы. Глянете одним глазком на коллекции и ООП, а также начнете работать в среде Visual Studio Code, которой пользуются программисты во всем мире!",
        page: 1},
        {id: 1, name: "HTML", content: "HTML", page: 1},
        {id: 1, name: "CSS", content: "CSS", page: 1}
    ]

    return (
        <div className={styles.layout}>
            <Header courseName={courseContent[0].name}/>

            <Routes>
                <Route path="/profile" element={<ProfileInfo name="Kirill" lastName="Novik" level="4" coins="10"/>}/>
                <Route path="/game/JS" element={<Page content={courseContent}/>}/>
            </Routes>
            
            
        </div>
    )
}
