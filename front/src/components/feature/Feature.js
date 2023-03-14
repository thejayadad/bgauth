import React from 'react'
import "./feature.css"

const Feature = () => {
  return (
    <div>
            <div className="main-banner header-text">
      <div className="container-fluid">
        <div className="owl-banner owl-carousel">

        <div className="item">
            <img src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="item-content">
              <div className="main-content">
                <div className="meta-category">
                  <span>Fashion</span>
                </div>
                <a href="post-details.html"><h4>Lorem Ipsum is simply</h4></a>
                <ul className="post-info">
                  <li><a href="/">Admin</a></li>
                  <li><a href="/">May 28, 2021</a></li>
                  <li><a href="/">12 Comments</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Feature