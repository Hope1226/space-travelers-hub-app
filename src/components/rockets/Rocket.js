import React from 'react';
import uniqid from 'uniqid';

const Rocket = ({ rocketList }) => (
  <div className="rockets-conatainer">
    {rocketList.map((rocket) => (
      <div key={uniqid()} className="rocket">
        <div className="rocket-image">
          <img src={rocket.img} alt="rocket" />
        </div>
        <div className="rocket-info">
          {rocket.reserved ? <span>Reserved</span> : null}
          <h1 className="rocket-name">{rocket.name}</h1>
          <p className="rocket-para">{rocket.info}</p>
          <button type="button" id={rocket.id} className={rocket.reserved ? 'reserved' : 'not-reserved'}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>
    ))}
  </div>
);

export default Rocket;
