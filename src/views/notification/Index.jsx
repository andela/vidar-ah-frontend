import React from 'react';
import './notification.scss';


const Notification = () => {
  return (
    <div className="box">
      <div className="notifications">
        <i className="fa fa-bell" />
        <span className="num">4</span>
        <ul>
          <li className="icon">
            <span className="icon"><i className="fa fa-user" /></span>
            <span className="text">Someone Like Your Post</span>
          </li>
          <li className="icon">
            <span className="icon"><i className="fa fa-user" /></span>
            <span className="text">Someone Like Your Photo</span>
          </li>
          <li className="icon">
            <span className="icon"><i className="fa fa-user" /></span>
            <span className="text">Someone Dislike Your Post</span>
          </li>
          <li className="icon">
            <span className="icon"><i className="fa fa-user" /></span>
            <span className="text">Someone Comment on Your Post</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
