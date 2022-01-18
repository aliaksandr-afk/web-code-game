import React from 'react';
import { Component } from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header.js'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Page from '../Page/Page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Layout() {

    return (
        <div className={styles.layout}>
            <Header/>

            <Routes>
                <Route path="/profile" element={<ProfileInfo name="Kirill" lastName="Novik" level="4" coins="10"/>}/>
                <Route path="/game" element={<Page />}/>
            </Routes>
            
            
        </div>
    )
}
