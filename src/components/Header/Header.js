import React, {useState} from 'react'
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs'
import styles from './Header.module.css'

export default function Header() {

    const [camera, setCamera] = useState(true)

    return (
        <header className={styles.header}>
            <button
            onClick={()=> setCamera(!camera)}
            className={styles.button}>
                {camera ? 
                <BsFillCameraVideoFill fill='#fff' size={23}/> 
                : <BsFillCameraVideoOffFill fill='#fff' size={23}/>}
            </button>
            
        </header>
    )
}
