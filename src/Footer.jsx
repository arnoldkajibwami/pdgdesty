import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./footer.css"
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    function Alertdon() {
        alert("contact nous au +243 999 888 777 ")
    }

    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <NavLink style={{ color: "white", textDecoration: "none" }} onClick={BackToTOP} to="/login"><h3><span style={{ color: "#FD841F" }}>Fondation</span>BULAMBO DESTIN</h3></NavLink>
                                    <p>
                                        Bukavu <br />
                                        Sud-kivu /RDC<br /><br />
                                        <strong>Phone:</strong> +243 999 888 777<br />
                                        <strong>Email:</strong> fondationbulambodestin@gmail.com<br />
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i><BiLogoFacebook /></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i><BiLogoInstagram /></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i><BiLogoTwitter /></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i><BiLogoLinkedin /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Links</h4>
                                <ul>
                                    <li><NavLink to="/home" onClick={BackToTOP} className="nav-links"> Home</NavLink></li>
                                    <li><NavLink to="/about" onClick={BackToTOP} className="nav-links"> About</NavLink></li>
                                    <li><NavLink to="/items" onClick={BackToTOP} className="nav-links"> Activite</NavLink></li>
                                    <li><NavLink to="/contact" onClick={BackToTOP} className="nav-links"> Gallery</NavLink></li>
                                    <button onClick={Alertdon} className='btn btn-danger donbuttons mt-2'>Donation</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div onClick={BackToTOP} className="m-3 backtotop">
                            <button className="buttonfooter">
                                <div className="text">
                                    <span>Back</span>
                                    <span>to</span>
                                    <span>top</span>
                                </div>
                                <div className="clone">
                                    <span>Back</span>
                                    <span>to</span>
                                    <span>top</span>
                                </div>
                                <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <strong><span><NavLink style={{ color: "skyblue", textDecoration: "none" }} to="/adminpage" onClick={BackToTOP} className="Madename">FondationdestinRent</NavLink></span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made by <NavLink to="https://Ng-technology.netlify.app" style={{ color: "skyblue", textDecoration: "none", fontWeight: "bold" }} className="Madename">Fondationdestin</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}