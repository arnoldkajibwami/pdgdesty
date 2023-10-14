import React from 'react'
import GalleryContent from './Gallerycontent'
import Breadcrumb from "./Breadcrumb"
import WhatsappPop from './WhatsappPop'


export default function Gallery() {

    return (
        <>
            <WhatsappPop/>
          <Breadcrumb page={"Gallery"}/>
          <br />
          <GalleryContent/>  
        </>
    )
}