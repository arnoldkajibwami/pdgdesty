import React from "react";

import ImageGallery from "react-image-gallery";
import Image1 from "./images/desty8.jpg"
import Image2 from "./images/destin2.jpg"
import Image3 from "./images/brand.png"
import Image4 from "./images/flag.jpg"
import Image5 from "./images/5.jpg"
import Image6 from "./images/6.jpg"


const images = [
    {
        original: Image1,
        thumbnail: Image1,
      },
      {
        original: Image2,
        thumbnail: Image2,
      },
      {
        original: Image3,
        thumbnail: Image3,
      },
      {
        original: Image4,
        thumbnail: Image4,
      },
      {
        original: Image5,
        thumbnail: Image5,
      },
      {
        original: Image6,
        thumbnail: Image6,
      },
];

export default class GalleryContent extends React.Component {
  render() {
    return <div className="container"><ImageGallery items={images} /></div>;
  }
}
