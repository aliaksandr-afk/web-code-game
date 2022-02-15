import React from 'react';
import style from './ProfileInfo.module.css'

export default function ProfileInfo(props) {

    return(
        <div className={style.profileInfo}>
            <div className={style.profileInfo__avatar}>
                <img className={style.profileInfo__img} alt='Profile' src='https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg'></img>
            </div>
            <p>Name: {props.name}</p>
            <p>LastName: {props.lastName}</p>
            <p>Level: {props.level}</p>
            <p>Coins: {props.coins} </p>
            
        </div>
)
}