import React from 'react';
import { Component, useState } from 'react';
import style from './Profile.module.css'

export default function Profile() {
    const [count, setCount] = useState(0);

    return(
    <div className={style.profile}>
        <p>Вы кликнули {count} раз</p>
        <button
        onClick={()=>setCount(count+1)}>+</button>
    </div>
)
}