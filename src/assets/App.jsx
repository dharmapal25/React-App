import './App.css';
import { Link } from 'react-router-dom';
import Flash from '../public/Flash.png';
import Profile from '../public/Profile.jpg';
import aboutImg from '../public/Crop-Dharmapal.jpg';

import { FaAws, FaBars, FaClosedCaptioning, FaCrop, FaCross, FaCrow, FaCss3, FaCut, FaGithub, FaHtml5, FaInbox, FaInfinity, FaJs, FaLaptop, FaLeaf, FaLeanpub, FaMap, FaMarkdown, FaMarker, FaReact } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Bs123, BsCrosshair, BsCrosshair2, BsGlobe, BsLaptop, BsMenuApp, BsMenuButton, BsMenuDown, BsMenuUp } from 'react-icons/bs';
import { SiExpress, SiGreensock, SiLivechat, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { FaBarsProgress, FaBraveReverse } from 'react-icons/fa6';
import { MdCompress, MdMenu, MdMenuBook, MdMenuOpen, MdModeNight, MdWrongLocation } from 'react-icons/md';
import { IoMdCut } from 'react-icons/io';
import { IoWater } from 'react-icons/io5';
import { CgAdd, CgCross } from 'react-icons/cg';
import { DiNodejs } from 'react-icons/di';
import { GrMultiple } from 'react-icons/gr';
import { BiArrowBack, BiArrowToLeft, BiArrowToRight, BiExit } from 'react-icons/bi';
import { LuAArrowDown, LuDelete } from 'react-icons/lu';
import { RxExit } from 'react-icons/rx';


function App() {

  const [load, setLoad] = useState([40, 70, 80]);

  // function mainMouseover(e) {
  //   console.log(e.clientX = Flash);
  //   console.log(Flash)
  //   e.clientX = Flash
  // }

  return (
    <>
      <div className="mainContainer">
      {/* <div> <img src={ Flash} /> </div> */}
        <div id="main">
          <div className='navdiv'>

            <div className="Navbar">
              <div className="logo">
                <h2>Flash
                </h2>

                {/*
                <h1> < IoMdCut /> </h1>

                <h1> < BiExit /> </h1>
                <h1> < BiArrowToRight /> </h1> */}
                {/* <h1> < RxExit /> </h1> */}
                <img className='imgLogo' src={Flash} />

              </div>

              <div className="navside">
                <a to={'/'} className="Home link " > Home </a>
                <a to={'/'} className="About link " > About </a>
                <a to={'/'} className="Skills link " > Skills </a>
                <a to={'/'} className="Projects link " > Projects </a>
                <a to={'/'} className="Contact link " > Contact </a>
              </div>
              <h1 className='menuH1' > <MdMenu /> </h1>

            </div>
          </div>

          <div className="container">

            <div className="Contents">


              <div className="topCon">
                <h4>Hello,</h4>
                
                <div className="h1">
                  <h1 className='i' >I am,</h1>
                  <h1 className="myName">Dharmapal</h1>
                </div>

                <h3 className='h1show' >Web Design <span >|</span> MEARN Developer</h3>

                <p>I specialize in creating modern websites using React, Tailwind, Express.js, MongoDB, and more. I'm passionate about building clean and responsive designs.
                </p>

                <div className="mm"></div>

                <div className="download">
                  <button title=' Click Download Resume...' >
                    <a
                      href="/resume.pdf"
                      download="Dharmapal-Resume.pdf"
                    >Resume</a>
                  </button>

                  <div className="icons">
                    <a href="https://github.com/dharmapal25/" >
                      <h1 className='github'> <FaGithub /> </h1>
                    </a>
                  </div>

                </div>


              </div>

            </div>
            <div className="side">
              <img src={Profile} className='Profile' />
            </div>


          </div>


        </div>
        <div className="AboutSec">

          <h1 className='abouth1' >About</h1>

          <div className="details">

            <img src={aboutImg} className='aboutImg' />

            <div className="aboutCon">
              <h1 className='Name' >Dharmapal</h1>
              <h5>Diploma | CSE</h5>
              <p><span className='sp' ></span>I began my college journey with a Diploma in Computer Science, where I built strong fundamentals in programming and logic.</p>
              <p><span></span>Later, I entered directly into the 3rd semester of B.Tech, diving deeper into web basics, React, MongoDB, and backend APIs.
              </p>
              <p><span></span>During this phase, I explored web development through hands-on projects and real-world applications.
                From internships to hackathons, I actively worked on solving problems and building useful solutions.
                Each experience helped shape my skills, confidence, and passion for technology.
                Now, I’m focused on becoming a full-stack web developer — ready to create clean, creative, and impactful digital experiences.</p>
            </div>

          </div>

          <div className="Exprebox">

            <div className="achi" onMouseOver={(e)=>{
              e.clientX = 
              console.log(e.clientY);
              
            }} >
              <h3>💡 Achievements & Hackathons</h3>
            </div>
            <div className="goal">
              <h1>hi</h1>
            </div>
            <div className="educ">
              <h1>hi</h1>
            </div>
            <div className="hobb">
              <h1>hi</h1>
            </div>

          </div>


        </div>

        <h1 className='abouth1' >Skills</h1>
        <div className="skillsSec">

          <div className="skill" >

            <div className="pro">
              <div className="htmldiv sk">
                <h1 className="htmlH1"> <FaHtml5 style={{ fill: '#cf6f00' }} /> </h1>
                <progress value={95} max={100}></progress>
              </div>
              <div className="cssdiv sk">
                <h1 className="cssH1"> <FaCss3 style={{ fill: '#9251e7ff' }} /> </h1>
                <progress value={85} max={100}></progress>
              </div>
              <div className="jsdiv sk">
                <h1 className="jsH1"> <FaJs style={{ fill: '#ffee00ff' }} /> </h1>
                <progress value={85} max={100}></progress>
              </div>
              <div className="reactdiv sk">
                <h1 className="reactH1"> <FaReact style={{ fill: '#69c3ffff' }} /> </h1>
                <progress value={75} max={100}></progress>
              </div>

              <div className="exprediv sk">
                <h1 className="expreH1"> <SiExpress style={{ fill: '#fffffdff' }} /> </h1>
                <progress value={60} max={100}></progress>
              </div>
              <div className="mongodiv sk">
                <h1 className="mongoH1"> <SiMongodb style={{ fill: '#00f050ff' }} /> </h1>
                <progress value={90} max={100}></progress>
              </div>
              <div className="sqldiv sk">
                <h1 className="sqlH1"> <SiMysql style={{ fill: '#84fff9ff' }} /> </h1>
                <progress value={90} max={100}></progress>
              </div>


            </div>

            <div className="proSide">
              {/* <h1>Project</h1> */}
              <div className='p1' >
                <pre>Portfolio Website</pre>
                <p>Responsive React portfolio using CSS with scroll animations (GSAP) and routing.</p>
                <span>React</span><span>CSS</span><span>Gsap</span>
                <h2> <BsGlobe /> </h2>
                <h2> <BsLaptop /> </h2>
              </div>
              <div className='p1' >
                <pre>Trello Website</pre>
                <p>Simple projects Management tool with drag-drop board UI.</p>
                <span>React</span><span>Express</span><span>Gsap</span>
              </div>
            </div>

          </div>

        </div>

        <div className="contactUs">
          <div className="help">
            <h3>Helpful Links</h3>
            <h5 className="bottom">Home</h5>
            <h5 className="bottom">About</h5>
            <h5 className="bottom">Skills</h5>
            <h5 className="bottom">Project</h5>
            <h5 className="bottom">Contact</h5>
          </div>

          <div className="connect">
            <h3>Connect with us</h3>
            <a href="#" target='_blank' > github </a>
            <a href="#" target='_blank' > LinkedIn </a>
            <a href="#" target='_blank' > Instagram </a>
            <a href="#" target='_blank' > Twitter (X) </a>
          </div>
          <pre className='copyright' >Copyright © 2025</pre>
        </div>


      </div>
    </>
  );
}

export default App;

