import React from 'react';
import { Component } from 'react';
import style from './Page.module.css'

import { NavLink } from 'react-router-dom';

export default function Page(props) {

    return (
        <div className={style.page}>
            <div className={style.page_content}>
                {props.content[0].content}
            </div>
            <div className={style.pageNumber}>
            {props.content[0].page}
            </div>
            <div className={style.page__avatar}>
                <img className={style.page__img} src='https://ixbt.online/live/topics/preview/00/02/17/83/dbc99bcb19.jpg'></img>
            </div>
        </div>
    )
}