import React from 'react';
import { Component } from 'react';
import style from './Page.module.css'

import { NavLink } from 'react-router-dom';

export default function Page(props) {

    let postElement = props.courseData.courses.map(el => <div>{el.name}<br/>{el.pages}</div>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        console.log(text)
        newPostElement.current.value = '';
    }

    return (

        <div className={style.page}>
            <div className={style.page_content}>
                {postElement}
            </div>
            <div className={style.page__avatar}>
                <img className={style.page__img} alt='profile img' src='https://ixbt.online/live/topics/preview/00/02/17/83/dbc99bcb19.jpg'></img>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}