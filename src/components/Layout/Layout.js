import React from 'react';
import { Component } from 'react';
import styles from './Layout.module.css'
import Header from './Header/Header.js'
import ProfileInfo from './Header/ProfileInfo/ProfileInfo';
import Page from './Page/Page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Layout(props) {

    console.log(props)
    let courseContent = props.courseData.courseContent
 
    let coursesNames = courseContent.map((course) => {
        return (
            <div className={styles.layout}>
                <Header courseName={course.name}/>
            </div>
        )
    })
        let users = props.users

    let cousresUsers = courseContent.map((users) => {
        return (
                <Route path="/profile" element={<ProfileInfo users={users}/>}/>
        )
    })

    let courses = props.courseData.courses

    let cousresData = courseContent.map((courses) => {
        return (
            <Route path={`/game/${courses.name}`} element={<Page content={courseContent}/>}/>
        )
    })


    return (
        <div className={styles.layout}>
            <Header courseName={courseContent[0].name}/>
            {/* {coursesNames} */}

            <Routes>
                <Route path="/profile" element={<ProfileInfo name="Kirill" lastName="Novik" level="4" coins="10"/>}/>
                {/* {cousresUsers} */}
                {/* {cousresData} */}
                <Route path={`/game/${courses[0].name}`} element={<Page courseData={props.courseData} addPost={props.addPost}/>}/>
            </Routes>
        </div>
    )
}
