import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  const getJoinedMissions = joinedMissions.filter((mission) => mission);

  return (
    <ul className={getJoinedMissions.length ? ' ' : 'no-missions'}>
      {getJoinedMissions.length ? getJoinedMissions.map((mission) => (
        <li key={mission.mission_id}>{mission.missionName}</li>
      )) : <h2>No missions joined</h2>}
    </ul>
  );
};

export default JoinedMissions;
