import React from 'react';
import s from './News.module.css';
import { NavLink } from 'react-router-dom';
import earth from '../../assets/images/earth.jpg';

const News = (props) => {
  return (
    <div className={s.newsBlock}>
      <header>
        <img src={earth} />
        <h1>News</h1>
      </header>
      <div className={s.news}>
        <div>
          <NavLink to="/news/video">Video</NavLink>
        </div>
        <div>
          <NavLink to="/news/world">World</NavLink>
        </div>
        <div>
          <NavLink to="/news/us">US</NavLink>
        </div>
        <div>
          <NavLink to="/news/business">Business</NavLink>
        </div>
        <div>
          <NavLink to="/news/tech">Tech</NavLink>
        </div>
        <div>
          <NavLink to="/news/science">Science</NavLink>
        </div>
        <div>
          <NavLink to="/news/stories">Stories</NavLink>
        </div>
        <div>
          <NavLink to="/news/entertainment">Entertainment</NavLink>
        </div>
        <div>
          <NavLink to="/news/health">Health</NavLink>
        </div>
      </div>
    </div>
  );
};

export default News;
