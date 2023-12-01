import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';


function App() {
  return (
    <div className="App-wrap">
      <Header/>
      <NavBar/>
      <div className='app-wrapper-content'>
        {/* <Dialogs/> */}
        <Profile/>
      </div>
      
    </div>
  );
}

export default App;
