import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';

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
      <BrowserRouter>
        <div className='app-booker'>
          <HeaderContainer />
          <Navbar />
          <div className='app-booker-content'>
          <Suspense fallback={<div><Preloader /></div>}>
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

              <Route path='/login'
                element={<Login />} />
            </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
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