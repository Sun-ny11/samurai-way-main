import React, { FC } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { massagesDataType, postDataType, userDataType } from '.';

type AppType = {
  massagesData: massagesDataType[]
  usersData: userDataType[]
  postsData: postDataType[]
}

const App: FC<AppType> = ({ massagesData, usersData, postsData }) => {
  return (
    <BrowserRouter>
      <div className="App-wrap">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/messages' render={() => <Dialogs usersData={usersData} massagesData={massagesData} />} />
          <Route path='/profile' render={() => <Profile postsData={postsData} />} />
          <Route path='/news' component={News} />
          <Route path='/musics' component={Musics} />
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
