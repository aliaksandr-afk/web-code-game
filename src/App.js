import logo from './logo.svg';
import style from './App.module.css'
import React from 'react';
import {
  EditorProvider
} from './context/context';
import Sidebar from './components/Sidebar/Sidebar';
import Layout from './components/Layout/Layout';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {addPost} from './redux/state';

function App(props) {
  console.log(props)
  return (
        <Router>
          <div className={style.main}>
            <Sidebar courseData={props.state.courseData}/>
            <Layout courseData={props.state.courseData} users={props.state.users} addPost={addPost}/>
          </div>
        </Router>


    /*  
    <EditorProvider>
      <Codebar/>
      
          <div className={styles.main}>
            <Header/>
            <Preview/>
          </div>

      
    </EditorProvider>
       
            
          
          <Router>
        <Routes>
          <Route path="/code" element={<Codebar />}/>
          <Route path="/code" element={ 
          <div className={styles.main}>
            <Header/>
            <Preview/>
          </div>}/>

          <Route path="/main" element={<First/>}/>
        </Routes>
      </Router>
          
          
          
          <First/>
     <div>
            <Router>
                <Routes>
                    <Route path="/page1" element={<First/>}/>
                    <Route path="/page2" element={<Header/>}/>
                </Routes>
            </Router>
        </div>*/
  );

}

export default App;