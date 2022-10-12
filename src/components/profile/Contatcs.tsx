import React from 'react';

const Contatcs = () => {
  return (
    <div className="container mt-5 profile-container">
      <h1>Contatcs</h1>

      <div className="col-12 mt-5">
        <h4 className="text-start">Malenkov Gleb</h4>
        <p>Isreal, Tel-Aviv</p>
        <h6>
          mail:
          <a
            className=" link-dark text-decoration-none"
            href="mailto:180698gm@gmail.com"
          >
            180698gm@gmail.com
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Contatcs;
