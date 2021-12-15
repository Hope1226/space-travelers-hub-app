import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReservedRocket from './rockets/ReservedRockets';

const Profile = () => {
  const rocketState = useSelector((state) => state.rocketReducer);
  const [reserved, setReserved] = useState([]);

  const getReserved = () => setReserved(rocketState.filter((rocket) => rocket.reserved));

  useEffect(() => {
    getReserved();
  }, [rocketState]);

  return (
    <div className="profile-container">
      {reserved.length
        ? <ReservedRocket reservedRockets={reserved} />
        : <h2>No reserved Rockets</h2>}
      <div className="temp-container">
        <h2>My missions</h2>
        <p>Under construction</p>
      </div>
    </div>
  );
};

export default Profile;
