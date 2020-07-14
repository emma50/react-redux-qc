import React from 'react';
import Image from '../../main/image/Image';
import Accordion from '../../main/accordion/Accordion';
import Card from '../../main/card/Card';
import NavBar from '../../navBar/NavBar';
import Footer from '../../footer/Footer';

export default function AppBarHeader() {
  return (
    <div style={{'overflow': 'hidden'}}>
      <NavBar/>
      <Image/>
      <div>
        <Accordion/>
        <Card/>
      </div>
      <Footer/>
    </div>
  );
}
