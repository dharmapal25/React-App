import React, { useRef, useState } from 'react'
import jod from '../assets/Profile.JPG'
import Flash from '../assets/Flash.png'
import './Home.css'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { TbMenu } from 'react-icons/tb'
import { CgClose, CgMenu } from 'react-icons/cg'
import My_Profile from './My_Profile'
import { Link } from 'react-router-dom'
function Navbar() {

    let [open, setOpen] = useState();


    return (
        <>

            <header className="navbar-div">

                <nav className="navbar">

                    <div className=
                        {open ? "menu-nav" : "menu-div"}

                        onClick={(e) => {
                            console.log(e.target)
                            console.log(open)
                            setOpen(!open)
                            console.log(open)

                        }} >

                        <TbMenu style={{ fontSize: "35px" }} />

                    </div>


                    <div id="logo">
                        <h2 className="logo-h2">
                            Flash
                        </h2>
                        <img className='logo-img' src={Flash} />
                    </div>

                    <div className="side-nav">
                        <Link to={"/"} className='h5'>Home</Link>
                        <Link to={"/About"} className='h5'>About</Link>
                        <Link to={"/Skills"} className='h5'>Skills</Link>
                        <Link to={"/Contact"} className='h5'>Contact</Link>

                    </div>

                </nav>

            </header>
        </>
    )
}
export default Navbar;