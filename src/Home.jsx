import React from "react";
import HomeCarouselbg from "./HomeCarouselbg";
import Aboutcomponent from "./Aboutcomponent";
import Dataitems from "./Dataitems";
// import HomeNews from "./homeNews";
import Contactcontent from "./Contactcontent";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./images/flag.jpg"
import Image2 from "./images/destin2.jpg"
import Image3 from "./images/brand.png"
import WhatsappPop from "./WhatsappPop";

export default function Home() {
    return (
        <>
            {/* <div style={{ height: "600px" }}></div> */}
            <section>
                {/* <HomeCarouselbg /> */}
            <WhatsappPop/>
                <Carousel>
                    <Carousel.Item>
                        <img className="bgimagescarousel" src={Image1} text="First slide" />
                        <Carousel.Caption>
                            <h3>Activite</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="bgimagescarousel" src={Image2} text="Second slide" />
                        <Carousel.Caption>
                            <h3>but</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="bgimagescarousel" src={Image3} text="Third slide" />
                        <Carousel.Caption>
                            <h3>Vision</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Aboutcomponent />
                <h1 className="text-center">Some Activities </h1>
                <Dataitems />
                {/* <HomeNews/> */}
                <Contactcontent />
            </section>

        </>
    )
}