import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/popupwind.css';

const RocketDetails = ({
  rocketId, rocketList, cancelFunc, closeFunc,
}) => {
  const fileteredList = rocketList.filter((rocket) => rocket.id === Number(rocketId));

  return (
    <div className="popup-details">
      <button type="button" className="closeBtn" onClick={closeFunc}>X</button>
      <div className="rocket-info">
        <div className="pop-up-img">
          <img src={fileteredList[0].img} alt="rocket" />
        </div>
        <div className="rocket-det">
          <h2>{fileteredList[0].name}</h2>
          <p>{fileteredList[0].description}</p>
          <h3>Details</h3>
          <ul>
            <li>
              Country of origin:
              {fileteredList[0].origin}
            </li>
            <li>
              Manufacturer:
              {fileteredList[0].manufacturer}
            </li>
            <li>
              Height (feet):
              {fileteredList[0].height}
            </li>
            <li>
              Diameter (feet):
              {fileteredList[0].diameter}
            </li>
            <li>
              Mass (lb):
              {fileteredList[0].mass}
            </li>
          </ul>
          <div className="actions">
            <a href={fileteredList[0].wiki_link} className="wiki-link" target="_balnk">See more</a>
            <button type="button" onClick={cancelFunc}>Cancel Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

RocketDetails.propTypes = {
  rocketId: PropTypes.element.isRequired,
  rocketList: PropTypes.element.isRequired,
  cancelFunc: PropTypes.func.isRequired,
  closeFunc: PropTypes.func.isRequired,
};

export default RocketDetails;
