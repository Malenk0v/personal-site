import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/profile.css';

import { navProfile, routerProfile } from '../utils/constants';
import AboutMe from './profile/AboutMe';
import Contatcs from './profile/Contatcs';
import Projects from './profile/Projects';
const Profile = () => {
  return (
    <div className="contaniner-fliud profile-container">
      <div className="container-nav ">
        <div>
          <ul className="p-0 nav">
            {navProfile.map((nav) => (
              <Link className="profileNavItem " to={routerProfile + nav.router}>
                {nav.title}
              </Link>
            ))}
          </ul>
        </div>
        <Link className="closedProfile" to={'/'}>
          x
        </Link>
      </div>
      <div>
        <Routes>
          <Route path={navProfile[0].router} element={<AboutMe />} />
          <Route path={navProfile[1].router} element={<Projects />} />
          <Route path={navProfile[2].router} element={<Contatcs />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
