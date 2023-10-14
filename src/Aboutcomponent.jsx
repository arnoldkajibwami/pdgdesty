import React from "react";
import aboutImg from "./images/desty9.jpg";

export default function Aboutcomponent() {
   return (
      <>
         <div className="about_section layout_padding">
            <div className="container">
               <h1 className="about_taital wow fadeInLeft">NOTRE VISION</h1>
               <p className="about_text">Favoriser la croissance des entreprises aussi bien locales qu'internationales</p>
               <div className="container about_section_2">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="about_image">
                           <img src={aboutImg} alt="about"/>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="about_taital_main">
                           <p className="lorem_text">Nous avons une stratégie à long terme claire, fondée sur notre objectif, notre vision, notre mission et nos valeurs. C'est la base à partir de laquelle nous construisons un avenir pérenne pour l'entreprise
                              Nous avons une stratégie à long terme claire, fondée sur notre objectif, notre vision, notre mission et nos valeurs. C'est la base à partir de laquelle nous construisons un avenir pérenne pour l'entreprise
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}