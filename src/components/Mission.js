import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    id, missionName, description,
  } = props;
  const dispatch = useDispatch();
  const joinedMission = useSelector((state) => state.missions.joinedMissions);

  const isJoined = () => {
    const joined = joinedMission.filter((mission) => mission.id === id);
    if (joined[0] === undefined) {
      return true;
    }
    return false;
  };

  const handleJoinMission = () => {
    dispatch(joinMission({ id, missionName }));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(joinedMission.filter((mission) => mission.id !== id)));
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
                isJoined() ? (
                  <td><span>NOT A MEMBER</span></td>
                ) : (
                  <td><span> ACTIVE MEMBER</span></td>
                )
            }
            <td>
              { isJoined() ? (
                <button type="button" onClick={handleJoinMission}>JOIN Mission</button>
              ) : (
                <button type="button" onClick={handleLeaveMission}>LEAVE Mission</button>
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
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
