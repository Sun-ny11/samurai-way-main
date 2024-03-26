import React, { FC } from 'react';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { News } from './components/news/News';
import { Musics } from './components/musics/Musics';
import { UsersContainer } from './components/users/UsersContainer';
import { ProfileContainer } from './components/profile/ProfileContainer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { DialogsContainer } from './components/dialogs/DialogsWrapper';
import { LoginContainer } from './components/login/LoginContainer';
import { connect } from 'react-redux';
import { authorization } from './redux/auth-reducer';
import { compose } from 'redux';
import { AppRootReducerType } from './redux/store';
import { initializedApp } from './redux/app-reducer';

type AppType = {
  initializedApp: () => void
  initialized: boolean
}


class App extends React.Component<AppType> {

  componentDidMount(): void {
    this.props.initializedApp()
  }

  render(): React.ReactNode {

    if (!this.props.initialized) {
      return <Redirect to={"/login"} />
    }
    return (

      <div className="App-wrap">
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/messages' render={() => <DialogsContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> {/*параметр в path говорит о том что, userId опциональный */}
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/musics' component={Musics} />
          {/* <Route path='/friends' render={} /> */}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state: AppRootReducerType) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App) as React.ComponentClass



// stateApp.usersData.filter((el,i)=>i<=3)