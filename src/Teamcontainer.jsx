import React from "react";
import Team1 from "./images/brand.png"
import Team2 from "./images/brand.png"

import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function TeamContainer() {
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-header text-center">
                    <h2>Notre Equipe</h2>
                    <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                </div>

                <div className="container row gy-4 mt-3">

                    <div className="col-lg-4 col-md-6 member">
                        <div className="member-img">
                            <img src={Team1} className="img-fluid" alt="" />
                            <div className="social">
                                <Link to="#"><i><BiLogoTwitter/></i></Link>
                                <Link to="#"><i><BiLogoInstagram/></i></Link>
                                <Link to="#"><i><BiLogoFacebook/></i></Link>
                                <Link to="#"><i><BiLogoLinkedin/></i></Link>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4>Destin Bulambo</h4>
                            <span>PDG Fondation Bulambo Destin</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 member">
                        <div className="member-img">
                            <img src={Team2} className="img-fluid" alt="" />
                            <div className="social">
                                <Link href="#"><i><BiLogoTwitter/></i></Link>
                                <Link href="#"><i><BiLogoInstagram/></i></Link>
                                <Link href="#"><i><BiLogoFacebook/></i></Link>
                                <Link href="#"><i><BiLogoLinkedin/></i></Link>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4>Personnel 2</h4>
                            <span>Post 2</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}