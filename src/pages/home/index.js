import React from 'react';
import Banner from './Banner';
import PhysicallyActive from './preventCancer/PhysicallyActive';
import Diet from './preventCancer/Diet';
import Breastfeed from './preventCancer/Breastfeed';
import BirthControl from './preventCancer/BirthControl';
import TypesOfCancer from './typesOfCancer/TypesOfCancer';



export default function Home() {
  return (
    <div>
       <Banner />
       <PhysicallyActive></PhysicallyActive>
       <Diet></Diet>
       <Breastfeed></Breastfeed>
      <BirthControl></BirthControl>
      <TypesOfCancer></TypesOfCancer>
    </div>
  )
}
