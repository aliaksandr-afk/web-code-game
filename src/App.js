import logo from './logo.svg';
import styles from './App.module.css'
import React from 'react';
import {
  EditorProvider
} from './context/context';
import Codebar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import First from './components/first/First';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <EditorProvider>
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
    </EditorProvider>
       
            
          /*  <First/>
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