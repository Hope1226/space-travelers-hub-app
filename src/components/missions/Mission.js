import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import '../../assets/stylesheets/mission.css';

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
      <tbody className="t-body">
        <tr className="t-rows">
          <td className="b-right f-14"><b>{missionName}</b></td>
          <td className="b-right p-10 f-14">{description}</td>
          {
                isJoined() ? (
                  <td className="b-right text-center"><span className="member f-14">NOT A MEMBER</span></td>
                ) : (
                  <td className="b-right text-center"><span className="member f-14 bg-blue"> ACTIVE MEMBER</span></td>
                )
            }
          <td className="b-bottom text-center">
            { isJoined() ? (
              <button type="button" onClick={handleJoinMission}>JOIN MISSION</button>
            ) : (
              <button type="button" onClick={handleLeaveMission}>LEAVE MISSION</button>
            )}
          </td>
        </tr>
      </tbody>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
