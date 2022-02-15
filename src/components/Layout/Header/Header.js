import React, {useState} from 'react'
import styles from './Header.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'

export default function Header(props) {

    return (
        <header className={styles.layout__header}>
                <p className={styles.header__name}>Code_game</p>
                <div className={styles.header__name}>
                    {props.courseName}
                </div>
            <div className={styles.me}>
                <ProfileInfo name="ALeks" lastName="Novik" level="4" coins="10"/>
                {/* <ProfileInfo name="Nikolay" lastName="Dranik" level="1" coins="2"/> */}
                {/* <ProfileInfo name="Stas" lastName="Koval" level="6" coins="14"/> */}
            </div>
        </header>
    )
}