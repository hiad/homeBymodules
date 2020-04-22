import React from 'react';
import './App.css';
import TopMenu from './Components/TopMenu';
import Menu from './Components/Menu';
import TopImage from './Components/TopImage';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Menu></Menu>
      <TopImage></TopImage>
    </div>
  );
}

export default App;
