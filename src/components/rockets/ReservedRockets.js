import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const ReservedRocket = ({ reservedRockets, cancelReserved }) => (
  <div className="reserved-rockets">
    <h2>My Rockets</h2>
    <ul>
      {reservedRockets.map((rocket) => (
        <li key={uniqid()} className="resRocket">
          <p>{rocket.name}</p>
          <button type="button" onClick={cancelReserved}>Cancel Reservation</button>
        </li>
      ))}
    </ul>
  </div>
);

ReservedRocket.propTypes = {
  reservedRockets: PropTypes.element.isRequired,
  cancelReserved: PropTypes.func.isRequired,
};

export default ReservedRocket;
