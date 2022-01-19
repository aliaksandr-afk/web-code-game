import React, {useState} from 'react'
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs'
import styles from './Header.module.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo'

export default function Header(props) {

    return (
        <header className={styles.layout__header}>
                <div className={styles.header__name}>
                    {props.courseName}
                </div>
            <div className={styles.me}>
                <ProfileInfo name="ALeks" lastName="Novik" level="4" coins="10"/>
            </div>
            
        </header>
    )
}
