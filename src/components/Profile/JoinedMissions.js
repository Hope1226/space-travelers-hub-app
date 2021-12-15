import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  const getJoinedMissions = joinedMissions.filter((mission) => mission);

  const renderJoinedMissions = getJoinedMissions.map((mission) => (
    <div className="joined" key={mission.mission_id}>
      <ul>
        <li>{mission.missionName}</li>
      </ul>
    </div>
  ));

  return (
    <div>
      {renderJoinedMissions}
    </div>
  );
};

export default JoinedMissions;
