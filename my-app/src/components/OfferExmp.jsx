import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/lohp-category-marketing-v2.jpg"
import Img2 from "../assets/images/lohp-category-design-v2.jpg"
import Img3 from "../assets/images/lohp-category-business-v2.jpg"


function Main() {
  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card img={Img01} text="MARKETING"/>
        <Card img={Img2} text="DESIGN"/>
        <Card img={Img3} text="BUSINESS"/>
      </div>
    </div>
  );
}

export default Main;
