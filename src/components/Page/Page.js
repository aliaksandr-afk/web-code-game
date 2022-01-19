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
        </div>
    )
}
