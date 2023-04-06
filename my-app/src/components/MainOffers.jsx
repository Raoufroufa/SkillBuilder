import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/lohp-category-marketing-v2.jpg"
import Img2 from "../assets/images/lohp-category-design-v2.jpg"
import Img3 from "../assets/images/lohp-category-business-v2.jpg"
import Img4 from "../assets/images/lohp-category-development-v2.jpg"
import Img5 from "../assets/images/lohp-category-music-v2.jpg"
import Img6 from "../assets/images/lohp-category-photography-v2.jpg"
import Img7 from "../assets/images/lohp-category-it-and-software-v2.jpg"


function Main() {
  return (
    <div className='container offers'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            <Card img={Img01} text="MARKETING"/>
            <Card img={Img2} text="DESIGN"/>
            <Card img={Img3} text="BUSINESS"/>
            <Card img={Img4} text="DEVELOPMENT"/>
            <Card img={Img5} text="MUSIC"/>
            <Card img={Img6} text="PHOTOGRAPHY"/>
            <Card img={Img7} text="IT"/>
        </div>
    </div>
  );
}

export default Main;
