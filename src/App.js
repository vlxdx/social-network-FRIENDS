import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { Provider } from 'react-redux';

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
                element={<LoginPage />} />
            </Routes>
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