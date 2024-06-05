import React from "react";
import "./component.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Profil = ({ children }) => {
  return (
    <div className="profile-wrapper">
      <div className="col is-fixed-top has-shadow col-profile" role="navigation">
        <div className="profile-container">
          <div className="profile-image">
            <i className="bi bi-person-fill"></i>
          </div>
          <span className="username">
            <b>Username</b>
          </span>
        </div>
      </div>
      <div className="profile-content">
        {children}
      </div>
    </div>
  );
};

export default Profil;
