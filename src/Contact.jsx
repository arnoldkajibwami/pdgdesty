import React from "react";
import Breadcrumb from "./Breadcrumb";
import Contactcontent from "./Contactcontent";
import WhatsappPop from "./WhatsappPop";

export default function Contact (){
    return(
        <>
            <WhatsappPop/>
            <Breadcrumb page={"Contact"} />
            <Contactcontent/>
        </>
    );  
}