import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotificationRequest } from '../../redux/actions/notification';
import './notification.scss';


const Notification = (props) => {
  const { getNotificationRequest: getNotification, notify } = props;

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <div className="box">
      <div className="notifications">
        <i className="fa fa-bell" />
        {notify.length > 0 ? (
          <span className="num length">{notify.length}</span>
        ) : ''}
        <ul>
          {notify.length && notify.map(item => (
            <>
              <li key={item.id} className="icon">
                <span className="text">{item.message}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

Notification.propTypes = {
  getNotificationRequest: PropTypes.func.isRequired,
  notify: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  notify: state.notificationReducer.notify
});

export default connect(() => mapStateToProps, { getNotificationRequest })(Notification);
