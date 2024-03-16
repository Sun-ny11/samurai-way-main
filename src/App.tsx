import React, { FC } from 'react';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { UsersContainer } from './components/users/UsersContainer';
import { ProfileContainer } from './components/profile/ProfileContainer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { Login } from './components/login/Login';
import { DialogsContainer } from './components/dialogs/DialogsWrapper';

type AppType = {

}

const App: FC<AppType> = ({ }) => {

  return (

    <div className="App-wrap">
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> {/*параметр в path говорит о том что, userId опциональный */}
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