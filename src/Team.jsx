import React from "react";
import Breadcrumb from "./Breadcrumb";
import TeamContainer from "./Teamcontainer";

export default function Team() {
    return (
        <>
            <Breadcrumb page ={"Team"}/>
            <TeamContainer />
        </>
    );
}