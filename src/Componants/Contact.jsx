import React from 'react'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { SlSocialTwitter } from 'react-icons/sl'
import Navbar from './Navbar';
import './Home.css';
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <>
            {/* <Navbar/> */}

            <div className='main-con' >

                <div className="side-div-con">
                    <p className={'h4'}>Helpful Links</p>
                    {/* <Link>Home</Link> */}
                    <Link to={"/"} className='link1' >Home</Link>
                    <Link to={"/About"} className='link1' >About</Link>
                    <Link to={"/skills"} className='link1' >Projects</Link>
                    <Link to={"/contact"} className='link1' >Contact Us</Link>
                </div>

                <div className="social-container">
                    <p className={'h4'}>Connect with us</p>
                    <div className="social-media">

                        <GrGithub style={{ paddingRight: "10px", fontSize: "19px", fill: "#fff" }} />
                        <span className="s1">
                            Github
                        </span>
                    </div>

                    <div className="social-media">
                        <GrLinkedin style={{ paddingRight: "10px", fontSize: "17px", fill: "#fff" }} />
                        <span className="s1">
                            LinkedIn
                        </span>
                    </div>
                    <div className="social-media">
                        <SlSocialTwitter style={{ paddingRight: "10px", fontSize: "17px", fill: "#fff" }} />
                        <span className="s1">
                            Twitter (x.com)
                        </span>
                    </div>
                    <div className="social-media">
                        <GrInstagram style={{ paddingRight: "10px", fontSize: "17px", fill: "#fff" }} />
                        <span className="s1">
                            Instagram
                        </span>

                    </div>

                </div>

            </div>
            <p className='copy' >© Copyright 2025</p>

        </>
    )
}

export default Contact;

