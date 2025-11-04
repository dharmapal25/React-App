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
import Navbar from './Navbar'
function Home() {

  let [open, setOpen] = useState();


  return (
    <>
      <div className="main-container">

{/* 
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

        </header> */}

        <Navbar/>

        <div className={open ? "menu-nav" : "second-div"} >


          <div className="items" >
            <p className='h5'>Home</p>
            <p className='h5'>About</p>
            <p className='h5'>Skills</p>
            <p className='h5'>Contact</p>
          </div>

          <div className="cut"
            onClick={(e) => {
              console.log(e.target)
              console.log(open)
              setOpen(!open)
              console.log(open)

            }}
          >
            <CgClose style={{ fontSize: "35px" }} />
          </div>

        </div>


        <aside className='aside-container' >

          <div className="aside-row">

            <div className="aside-name">
              <p className="top-h2-home">Hello,</p>
              <h1 className="top-im">I am,
                <span className="home-name"> Dharmapal</span>
              </h1>

            </div>

            <div className="web-intro">

              <div className="works">
                <h2 className="work-text">
                  Work Experience
                </h2>

                <div className="hack">
                  <span className="work-contant">
                    3+ Hackathons
                  </span>

                  <span className="work-contant">
                    Real-time Projects
                  </span>

                </div>

              </div>

              <h2 className="web-text">
                Web Design <span id='bar'>|</span> MEARN Developer
              </h2>
              <p className="web-contant">
                <span>hello</span> I specialize in creating modern websites using React, Tailwind, Express.js, MongoDB, and more. I'm passionate about building clean and responsive designs.
              </p>



              <button className='btn' >
                <a download={Flash} href='#' >Resume</a>
              </button>
            </div>

            <div className="div-social">
              <Link target='_blank' to={"https://google.com"} className='social-logo' >
                <GrGithub className='okey' style={{ fill: 'white', fontSize: "20px" }} />Github
              </Link>

              <Link target='_blank' to={"https://google.com"} className='social-logo' id='linked' >
                <GrLinkedin style={{ fill: '#0077c7', fontSize: "20px" }} />Linkedin
              </Link>

            </div>
          </div>

          <div className="my-image-home">
            <img className='profile-home' src={jod} />
          </div>

        </aside>

        {/* <About /> */}
        {/* <Skills /> */}
        {/* <My_Profile /> */}
        <Contact />
      </div>

    </>
  )
}

export default Home

