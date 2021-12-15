import React from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { cancelReservation } from '../../redux/rockets/rockets';

const ReservedRocket = ({ reservedRockets }) => {
  const dispatch = useDispatch();

  const removeCanceled = (e) => {
    const { id } = e.target;

    dispatch(cancelReservation(Number(id)));
  };

  return (
    <div className="reserved-rockets">
      <h2>My Rockets</h2>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={uniqid()} className="resRocket">
            <p>{rocket.name}</p>
            <button id={rocket.id} type="button" onClick={removeCanceled}>Cancel Reservation</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReservedRocket.propTypes = {
  reservedRockets: PropTypes.element.isRequired,
};

export default ReservedRocket;
