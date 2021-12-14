import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRokets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';
import Dragon from '../../assets/images/dragon-1.jpg';

const Rockets = () => {
  const dispatch = useDispatch();

  const addRockets = () => {
    const newRokcet = {
      id: Math.floor(Math.random() * 100),
      name: 'Dragon-1',
      img: Dragon,
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis suscipit hic ex quae! Autem voluptatum vel quo corrupti assumenda quas obcaecati maxime, ipsum odit iusto illum alias consequatur aliquam',
      reserved: false,
    };

    dispatch(addRokets(newRokcet));
  };

  useEffect(() => {
    addRockets();
  }, []);

  const rocketsState = useSelector((state) => state.rocketReducer);

  return (
    <div className="rockets">
      {rocketsState
        ? <Rocket rocketList={rocketsState} />
        : <h1>No rockets</h1>}
    </div>
  );
};

export default Rockets;
