import logo from './logo.svg';
import style from './App.module.css'
import React from 'react';
import {
  EditorProvider
} from './context/context';
import Codebar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import First from './components/first/First';
import Sidebar from './components/Sidebar/Sidebar';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
        <Router>
          <div className={style.main}>
            <Sidebar/>
            <Layout/>
          </div>
          <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/game" element={<Layout />}/>
          </Routes>
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