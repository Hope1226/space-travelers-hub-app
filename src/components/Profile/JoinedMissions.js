import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { leaveMission } from '../../redux/missions/missions';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  const dispatch = useDispatch();

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(joinedMissions.filter((mission) => mission.id !== id)));
  };

  return (
    <ul className={joinedMissions.length ? ' ' : 'no-missions'}>
      {joinedMissions.length ? joinedMissions.map((mission) => (
        <li key={mission.mission_id}>
          {mission.missionName}
          <a href={mission.wikiLink} className="wiki-link" target="_blank" rel="noreferrer">See more</a>
          <button type="button" onClick={() => handleLeaveMission(mission.id)}>Leave the mission</button>
        </li>
      )) : <h2>No missions joined</h2>}
    </ul>
  );
};

export default JoinedMissions;
