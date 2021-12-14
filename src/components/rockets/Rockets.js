import React from 'react';
import Rocket from './Rocket';
import Dragon from '../../assets/images/dragon-1.jpg';

const Rockets = () => {
  const tempList = [
    {
      id: Math.floor(Math.random() * 100),
      name: 'Dragon-1',
      img: Dragon,
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis suscipit hic ex quae! Autem voluptatum vel quo corrupti assumenda quas obcaecati maxime, ipsum odit iusto illum alias consequatur aliquam',
      reserved: false,
    },
  ];

  return (
    <div className="rockets">
      <Rocket rocketList={tempList} />
    </div>
  );
};

export default Rockets;
