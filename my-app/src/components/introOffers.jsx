import React from 'react'
import Img1 from "../assets/images/formation.jpg"

const introOffers = () => {
  return (
    <div className="container intro">
        <div className="row">
            <div className="col-md-12">
                <img src={Img1} alt="" className="img-fluid center-block" />
            </div>
        </div>
    </div>
  )
}

export default introOffers