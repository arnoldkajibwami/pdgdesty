import React from "react";
import English from "./images/en.png"
import French from "./images/fr.png"
import "./translate.css"

export default function Translate() {
    return (
        <>
            <section className='translate'>
                    <button className='btn btn-success translateimg'><img src={English} alt='en' />EN</button>
                {/* <hr style={{color:"black", fontSize:"100px"}}/> */}
                    <button className='btn btn-danger translateimg'><img src={French} alt='fr' />FR</button>
            </section>
        </>
    );
}