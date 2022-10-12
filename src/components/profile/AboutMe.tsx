import React from 'react';
import { Link } from 'react-router-dom';
import {
  avatar,
  myPhoto,
  navProfile,
  routerProfile,
} from '../../utils/constants';

const AboutMe = () => {
  return (
    <div className="container mt-5 profile-container">
      <h1>About me</h1>
      <div className="content-about-me row mt-4 align-items-center">
        <img src={avatar.url} alt="Gleb" className="col-6" />
        <div className="col-6 text-center">
          <h4>Hello everyone!</h4>
          <p>
            My name is Gleb. I'm Ole Hadash, a full stack developer and also a
            blogger and this is my little story.
          </p>
        </div>
        <div className="border-bottom border-dark pb-4 w-50 m-auto"></div>
      </div>
      <div className="content-about-me row mt-4 align-items-center ">
        <div className="col-12 text-center">
          <h4>I immigrated to Israel in April 2021</h4>
          <p>It was difficult, but overall interesting.</p>
        </div>
        <img className="col-4" src={myPhoto.airport} alt="" />
        <img className="col-4" src={myPhoto.maskFace} alt="" />
        <img className="col-4" src={myPhoto.med} alt="" />
      </div>
      <div className="content-about-me row mt-4 align-items-center ">
        <div className="col-12 text-center my-2">
          <h4>We traveled a lot</h4>
        </div>
        <img className="col-6 p-2" src={myPhoto.put[0]} alt="" />
        <img className="col-6 p-2" src={myPhoto.put[1]} alt="" />
        <img className="col-6 p-2" src={myPhoto.put[2]} alt="" />
        <img className="col-6 p-2" src={myPhoto.put[3]} alt="" />
      </div>
      <div className="content-about-me row mt-4 align-items-center ">
        <div className="col-6 text-center">
          <p>
            I graduated from ulpan, after which I went to study full stack
            development.
          </p>
          <p>
            I have been learning programming for 1 year now. I dream of finding
            a job in an IT company as soon as possible
          </p>
        </div>
        <img className="col-6" src={myPhoto.iCacke} alt="" />
      </div>
      <div className="mt-4 text-center">
        <h4 className="my-4 col-12 text-center">
          I have successfully completed training in frontend development and
          continue to study backend development.
        </h4>
        <table className="col-12 table">
          <thead className="table-warning">
            <tr>
              <th colSpan={2}>Full Stack Develempent</th>
            </tr>
            <tr>
              <th className="col-6">Frontend</th>
              <th className="col-6">Backend</th>
            </tr>
          </thead>
          <tbody className="table-ligth">
            <tr>
              <td>React</td>
              <td rowSpan={6}>
                <br />
                <br />
                <br />
                <br />
                I'm study backend development
              </td>
            </tr>
            <tr>
              <td>Redux</td>
            </tr>
            <tr>
              <td>TypeSript</td>
            </tr>
            <tr>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>HTML</td>
            </tr>
            <tr>
              <td>CSS</td>
            </tr>
          </tbody>
        </table>
        <Link
          className="mt-2 mb-5 col-6 btn btn-warning"
          to={routerProfile + navProfile[1].router}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
