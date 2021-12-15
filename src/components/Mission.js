import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    id, joinStatus, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.missions.joinedMissions);

  const handleJoinMission = () => {
    if (joinStatus.status === false) {
      joinStatus.status = true;
      dispatch(joinMission({ id, missionName }));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{missionName}</td>
            <td>{description}</td>
            {
                joinStatus === true ? (
                  <td><span>ACTIVE MEMBER</span></td>
                ) : (
                  <td><span> NOT A MEMBER</span></td>
                )
            }
            <td>
              { joinStatus === true ? (
                <button type="button" onClick={handleLeaveMission}>Leave Mission</button>
              ) : (
                <button type="button" onClick={handleJoinMission}>Join Mission</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  joinStatus: PropTypes.object.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
