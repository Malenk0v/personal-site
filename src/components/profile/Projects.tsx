import React from 'react';
import { listProjects } from '../../utils/listProjects';

const Projects = () => {
  return (
    <div className="container mt-5 profile-container">
      <h1>Projects</h1>
      <div className="col-12 mt-5">
        {listProjects.map((pr) => (
          <div
            key={pr.name}
            className="col-6 m-auto text-center border border-dark rounded-3 p-2"
          >
            <h4>{pr.name}</h4>
            <p>{pr.discription}</p>
            <img
              className="mb-2"
              style={{ width: '100%' }}
              src={pr.photo}
              alt="photo"
            />
            <p>Stack: {pr.techSteck}</p>
            <div className="col-12 ">
              <a
                className="col-6  btn btn-warning"
                target={'blank'}
                href={pr.urlGitHub}
              >
                GitHub
              </a>
              <a
                className="col-6  btn btn-warning"
                target={'blank'}
                href={pr.urlDeploy}
              >
                Deploy
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="col-6 m-auto p-3 mb- mt-3">
        <a className="col-12 btn btn-warning" href={'/'}>
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Projects;
