import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from "./images/brand.png"
import image2 from "./images/desty9.jpg"
import image3 from "./images/desty10.jpg"
// import image4 from "./images/4.jpg"

 
export default class HomeCarouselbg extends Component {
  render () {
    return (
        <BackgroundSlideshow images={[ image1,image2,image3 ]} 
        animationDelay={5000}
        />
    )
  }
}

