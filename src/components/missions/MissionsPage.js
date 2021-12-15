import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions.missionList);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(getMissions());
    }
  }, [status]);

  const mission = missionList.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      missionName={mission.mission_name}
      description={mission.description}
    />
  ));

  return (
    <div className="missions">
      <table className="missions-table">
        <thead>
          <tr className="t-rows">
            <th className="mission p-10 b-right">Mission</th>
            <th className="description p-10 b-right">Description</th>
            <th className="status p-10 b-right">Status</th>
            <th className="b-bottom p-10 "> </th>
          </tr>
        </thead>
        {mission}
      </table>
    </div>
  );
};

export default Missions;
