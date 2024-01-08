import React, { FC } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { filterActionType, stateType } from './redux/state';
import { NameUserMessage } from './components/dialogs/message/Messages';

type AppType = {
  stateApp:stateType
  dispatch:(action:filterActionType)=>void
  
}

const App: FC<AppType> = ({ stateApp,dispatch }) => {
  return (
    
      <div className="App-wrap">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/messages' render={() => <Dialogs usersData={stateApp.usersData} massagesData={stateApp.dialogsPage.massagesData} sendNewMessage={stateApp.dialogsPage.sendNewMessage} dispatch={dispatch}/>} />
          <Route path='/profile' render={() => <Profile postsData={stateApp.profilePage.postsData}  newPostText={stateApp.profilePage.newPostText} dispatch={dispatch}/>} />
          <Route path='/news' component={News} />
          <Route path='/musics' component={Musics} />
          {/* <Route path='/friends' render={} /> */}
        </div>

      </div>
    

  );
}

export default App;

// stateApp.usersData.filter((el,i)=>i<=3)