import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { missionName, description } = props;

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
            <td>
              NOT A MEMBER
            </td>
            <td>
              <button type="button">Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
