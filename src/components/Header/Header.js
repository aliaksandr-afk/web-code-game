import React, {useState} from 'react'
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs'
import styles from './Header.module.css'
import Me from '../Me/Me.js'

export default function Header() {

    const [camera, setCamera] = useState(true)

    return (
        <header className={styles.layout__header}>
            Course name
            <div className={styles.me}>
                <Me/>
            </div>
            
        </header>
    )
}
