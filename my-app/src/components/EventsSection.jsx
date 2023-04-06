import React from 'react'
import img2 from '../assets/images/tim-mossholder-WE_Kv_ZB1l01-unsplash'

const EventsSection = () => {
  return (
    <div className="hero">
        <div className="container">
            <h2 className="text-center">Find a new possibilities</h2>
            <div className="hero-image">
                <img src={img2} alt=""/>
                <div className="hero-overlay">
                    <h3>Adventure path for your journey</h3>
                    <a href="/events" target="_blank"><button>READ</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsSection