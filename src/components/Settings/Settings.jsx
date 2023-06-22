import React from 'react';
import s from './Settings.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const Settings = (props) => {
  return (
    <div className={s.settings}>
      <header>
        <h1>Settings</h1>
      </header>
      <div>
        <div>Profile information</div>
        <div>Sign in & security</div>
        <div>Data privacy</div>
        <div>Advertising data</div>
        <div>Notifications</div>
      </div>
    </div>
  );
};

export default compose(withAuthRedirect)(Settings);
