import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';


function App() {
  return (
    <BrowserRouter>
      <div className="App-wrap">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/messages' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/musics' component={Musics} />
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
