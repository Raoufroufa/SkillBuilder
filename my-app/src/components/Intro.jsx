import React from 'react'
import img1 from "../assets/images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg"

const Intro = () => {
  return (
    <div className="container intro">
        <div className="row">
            <div className="col-md-12">
                <img src={img1} alt="" className="img-fluid center-block" />
                <div className="search-bar">
                    <form action="">
                        <div className="form-group row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Enter your recherche" />
                            </div>
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-primary btn-block"><i className="fa fa-search"></i>Recherche</button>
                            </div>
                        </div>
                    </form>
                </div>
                <h1 className="title">Join the millions learning with <strong>SkillBuilder</strong></h1>
            </div>
        </div>
    </div>
  )
}

export default Intro