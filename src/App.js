import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-booker'>
        <HeaderContainer />
        <Navbar />
        <div className='app-booker-content'>
          <Routes>
            <Route path='/dialogs'
              element={<DialogsContainer />} />

            <Route path='/profile/:userId'
              element={<ProfileContainer />} />

            <Route path='/profile'
              element={<ProfileContainer />} />

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

export default App;