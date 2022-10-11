import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/startCard.css';

import { avatar, navIcons } from '../utils/constants';

const StartCard = () => {
  return (
    <div className="container-fluid position-absolute top-0">
      <div className="cn-card-root row">
        <div className="cn-card col-6 col-sm-10">
          <img className="mb-4 avatar" src={avatar.url} alt={avatar.alt} />
          <div className="card-profile">
            <h4 className="m-0">Malenkov Gleb</h4>
            <p>Israel, Tel-Aviv</p>
          </div>
          <div className="linkItems mt-4">
            {navIcons.map((item) => (
              <div className="cn-linkitem">
                <a href={item.url} target="blank">
                  <img
                    className="linkItem"
                    src={item.urlPhoto}
                    alt={item.alt}
                  />
                </a>
              </div>
            ))}
          </div>
          <Link className="mt-4 myBtn" to="">
            My Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartCard;
