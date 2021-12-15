import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  dispatch(getMissions);
  const missionlist = useSelector((state) => state.missions);
  console.log(missionlist);

  return (
    <div>
      {missionlist}
    </div>
  );
};

export default Missions;
