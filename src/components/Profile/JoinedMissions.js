import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  const getJoinedMissions = joinedMissions.filter((mission) => mission);

  const renderJoinedMissions = getJoinedMissions.map((mission) => (
    <div key={mission.mission_id}>
      <ul>
        <li>{mission.missionName}</li>
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>My Missions</h1>
      {renderJoinedMissions}
    </div>
  );
};

export default JoinedMissions;
