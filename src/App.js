import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import Music from './components/Music';
import News from './components/News';
import Settings from './components/Settings';
import Footer from './components/Footer/Footer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <HashRouter>
        <div className='app-booker'>
          <HeaderContainer />
          <Navbar />
          <Footer />
          <div className='app-booker-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/dialogs'
                  element={<DialogsContainer />} />

                <Route path='/profile'
                  element={<ProfileContainer />} >

                  <Route path=':userId'
                    element={<ProfileContainer />} />

                </Route>

                <Route path='/users'
                  element={<UsersContainer />} />

                <Route path='/news'
                  element={<News />} />

                <Route path='/music'
                  element={<Music />} />

                <Route path='/settings'
                  element={<Settings />} />

                <Route path='/login'
                  element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const FriendsApp = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}

export default FriendsApp;