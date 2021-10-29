import logo from './logo.svg';
import React from 'react';
import './App.css';
import { EditorProvider } from './context/context';
import Codebar from './components/CodeBar/CodeBar';

function App() {
  return (
    <div className="App">
      <EditorProvider>
          <Codebar />
      </EditorProvider>
    </div>
  );
}

export default App;
