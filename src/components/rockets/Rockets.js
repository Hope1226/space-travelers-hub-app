import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsState = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (!rocketsState.length) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="rockets">
      {rocketsState
        ? <Rocket rocketList={rocketsState} />
        : <h1>No rockets</h1>}
    </div>
  );
};

export default Rockets;
