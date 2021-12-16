import React from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { cancelReservation } from '../../redux/rockets/rockets';

const ReservedRocket = ({ reservedRockets, viewFunc }) => {
  const dispatch = useDispatch();

  const removeCanceled = (e) => {
    const { id } = e.target;

    dispatch(cancelReservation(Number(id)));
  };

  return (
    <div className="reserved-rocket">
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={uniqid()} className="resRocket">
            <p>{rocket.name}</p>
            <button type="button" className="viewBtn" id={rocket.id} onClick={viewFunc}>View the Rocket</button>
            <button id={rocket.id} type="button" onClick={removeCanceled}>Cancel Reservation</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReservedRocket.propTypes = {
  reservedRockets: PropTypes.element.isRequired,
  viewFunc: PropTypes.func.isRequired,

};

export default ReservedRocket;
