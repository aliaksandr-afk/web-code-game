import React from 'react';
import { Component } from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header.js'

export default function Layout() {

    return (
        <div className={styles.layout}>
            <Header/>
        </div>
    )
}
