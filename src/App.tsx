import React, { FC } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { stateType } from './redux/state';
import { NameUserMessage } from './components/dialogs/message/Messages';

type AppType = {
  stateApp:stateType
  addPost:()=>void
  updateNewPostText:(i:string)=>void
  
}

const App: FC<AppType> = ({ stateApp,addPost,updateNewPostText }) => {
  return (
    
      <div className="App-wrap">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/messages' render={() => <Dialogs usersData={stateApp.usersData} massagesData={stateApp.massagesData} />} />
          <Route path='/profile' render={() => <Profile postsData={stateApp.postsData} addPost={addPost} newPostText={stateApp.newPostText} updateNewPostText={updateNewPostText}/>} />
          <Route path='/news' component={News} />
          <Route path='/musics' component={Musics} />
          {/* <Route path='/friends' render={} /> */}
        </div>

      </div>
    

  );
}

export default App;

// stateApp.usersData.filter((el,i)=>i<=3)