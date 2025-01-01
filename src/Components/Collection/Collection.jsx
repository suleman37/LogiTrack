import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from '../Hero/Hero';
import Second from '../About Us/second';
import Services from '../Services/services';
import Choice from '../Choice/choice';
import Team from '../Team/team';
import Contract from '../Contract/Contract';
import Companies from '../Companies/Companies';
import Contact from '../Contact/Contact';

const Collection = () => {
  return (
    <>
      <Hero/>
      <Contract/>
      <Services/>
      <Second/>
      <Choice/>
      <Team/>
      <Contact/>
      <Companies/>
    </>
  )
}

export default Collection;