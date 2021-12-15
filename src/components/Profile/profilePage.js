import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReservedRocket from '../rockets/ReservedRockets';
import JoinedMissions from './JoinedMissions';
import '../../assets/stylesheets/profile.css';

const Profile = () => {
  const rocketState = useSelector((state) => state.rocketReducer);
  const [reserved, setReserved] = useState([]);

  const getReserved = () => setReserved(rocketState.filter((rocket) => rocket.reserved));

  useEffect(() => {
    getReserved();
  }, [rocketState]);

  return (
    <div className="profile-container">
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        {reserved.length
          ? <ReservedRocket reservedRockets={reserved} />
          : <h3>No reserved Rockets</h3>}
      </div>
      <div className="temp-container">
        <h2>My missions</h2>
        <JoinedMissions />
      </div>
    </div>
  );
};

export default Profile;
