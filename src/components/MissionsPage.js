import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions.missionList);
  const status = useSelector((state) => state.missions.status);
  console.log(missionList);
  console.log(status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(getMissions());
    }
  }, [status]);

  const mission = missionList.map((mission) => (
    <Mission
      key={mission.mission_id}
      missionName={mission.mission_name}
      description={mission.description}
    />
  ));

  return (
    <div>
      {mission}
    </div>
  );
};

export default Missions;
