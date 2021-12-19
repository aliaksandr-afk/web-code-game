import React, {useState} from 'react'
import styles from './Page.module.css'

export default function Page() {

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
