import React, { FC } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { DialogsWrapper } from './components/dialogs/DialogsWrapper';
import { UsersContainer } from './components/users/UsersContainer';

type AppType = {

}

const App: FC<AppType> = ({ }) => {

  return (

    <div className="App-wrap">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/messages' render={() => <DialogsWrapper />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' component={News} />
        <Route path='/musics' component={Musics} />
        {/* <Route path='/friends' render={} /> */}
      </div>

    </div>


  );
}

export default App;

// stateApp.usersData.filter((el,i)=>i<=3)