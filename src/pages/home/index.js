import React from 'react';
import Banner from './Banner';
import PhysicallyActive from './preventCancer/PhysicallyActive';
import Diet from './preventCancer/Diet';
import Breastfeed from './preventCancer/Breastfeed';
import BirthControl from './preventCancer/BirthControl';
import TypesOfCancer from './typesOfCancer/TypesOfCancer';
import About from '../about/About';
import Screening from '../screening/Screening';



export default function Home() {
  return (
    <div>
       <Banner />
       <About></About>
       <PhysicallyActive></PhysicallyActive>
       <Diet></Diet>
       <Breastfeed></Breastfeed>
      <BirthControl></BirthControl>
      <TypesOfCancer></TypesOfCancer>
      <Screening></Screening>
    </div>
  )
}
