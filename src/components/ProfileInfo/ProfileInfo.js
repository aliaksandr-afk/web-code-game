import React from 'react';
import style from './ProfileInfo.module.css'

export default function ProfileInfo(props) {

    return(
        <div className={style.profileInfo}>
            <div className={style.profileInfo__avatar}>
                <img className={style.profileInfo__img} src='https://static.planetminecraft.com/files/resource_media/screenshot/1233/untitled2_3310847.jpg'></img>
            </div>
            <p>Name: {props.name}</p>
            <p>LastName: {props.lastName}</p>
            <p>Level: {props.level}</p>
            <p>Coins: {props.coins} </p>
            
        </div>
)
}