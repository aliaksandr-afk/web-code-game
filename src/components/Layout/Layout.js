import React from 'react';
import { Component } from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header.js'
import Profile from '../Profile/Profile';
import Prewiew from '../Preview/Preview.js'
import Page from '../Page/Page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Layout() {

    return (
        <div className={styles.layout}>
            <Header/>

            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/game" element={<Page />}/>
            </Routes>
            
            
        </div>
    )
}
