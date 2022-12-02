import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HiddenBar from "./components/HiddenBar/HiddenBar"

function App() {
  return (
    <div className="App">
      <Header />
      <HiddenBar />
      <Main />
    </div>
  );
}

export default App;
