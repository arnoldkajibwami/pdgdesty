import React from "react";
import Dataitems from "./Dataitems";
import Breadcrumb from "./Breadcrumb";
import WhatsappPop from "./WhatsappPop";

export default function News() {

    return (
        <>
            <Breadcrumb page={"Activite"}/>
            <WhatsappPop/>
            <div style={{height:"50px"}}></div>
                <h1 className="text-center">Nos Activites </h1>
                <Dataitems/>
        </>
    )
}