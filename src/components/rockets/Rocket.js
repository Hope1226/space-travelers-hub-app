import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/rocket.css';

const Rocket = ({ rocketList }) => (
  <div className="rockets-conatainer">
    {rocketList.map((rocket) => (
      <div key={uniqid()} className="rocket">
        <div className="rocket-image">
          <img src={rocket.img} alt="rocket" />
        </div>
        <div className="rocket-info">
          <h1 className="rocket-name">{rocket.name}</h1>
          {rocket.reserved ? <span>Reserved</span> : null}
          <p className="rocket-para">{rocket.info}</p>
          <button type="button" id={rocket.id} className={rocket.reserved ? 'reserved' : 'not-reserved'}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>
    ))}
  </div>
);

Rocket.propTypes = {
  rocketList: PropTypes.element.isRequired,
};

export default Rocket;
