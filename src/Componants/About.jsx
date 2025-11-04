import React from 'react'
import jod from "../assets/Crop-Dharmapal.JPG"
import './Home.css'
import Contact from './Contact';
import Navbar from './Navbar';
function About() {
  return (
    <>
    <Navbar/>
    <div className='About-container' >


      <h1>About</h1>

      <div className="info-section">

        <div className="info-img">
          <img src={jod} />
        </div>

        <div className="info-intro">
          <h2 className="name-intro">Dharmapal</h2>
          <h4>Diploma | CSE</h4>
          <p><span>hello i am </span>I began my college journey with a Diploma in Computer Science, where I built strong fundamentals in programming and logic. Later, I entered directly into the 3rd semester of B.Tech, diving deeper into web basics, React, MongoDB, and backend APIs.</p>

          <p><span>hello i </span> During this phase, I explored web development through hands-on projects and real-world applications. From internships to hackathons, I actively worked on solving problems and building useful solutions. Each experience helped shape my skills, confidence, and passion for technology. Now, I’m focused on becoming a full-stack web developer — ready to create clean, creative, and impactful digital experiences.</p>

        </div>

      </div>

      <h4 className='exp' >Experience</h4>

      <div className="achive-div">

        <div id="box-1">
          <span className='Internship info-head' >Internship</span>
          <span className='head-box' ><span className='learn' ></span> Eyesec cyber security, Belagavi (2025)
          </span>
          <span className="intern-data"><span className="learn">Learned basics:</span> Linux CMD, SQL Injection, Kali Linux utilities, Burp Suite, OWASP ZAP, Nmap (Port Scanner), JCrypt tool
          </span>
          <span className="intern-data">Gained hands-on knowledge of basic vulnerability assessment & penetration testing
          </span>
          <span className="intern-data">Explored web security, ethical hacking basics, and system protection techniques
          </span>
        </div>

        <div id="box-2">
          <span className='info-head' >Hackathons</span>
          <span className='hack-data'>Participated in 5+ Hackathons with certifications</span>
          <span className='hack-data'>Worked in team-based challenges to build working prototypes within deadlines
          </span>
          <span className='hack-data'>Improved problem-solving, collaboration, and presentation skills
          </span>
        </div>

        <div id="box-3">
          <span className='info-head' >Projects</span>
          <span className="project-data">Portfolio Website - Showcasing skills, projects, and achievements
          </span>
          <h5>Upcoming Projects:
          </h5>
          <span className="project-data">WhatsApp Mega Project (MERN + Socket.IO) – Real-time chat application with authentication
          </span>
          <span className="project-data">Interactive Animations (React + GSAP) – Advanced frontend animations & smooth UI/UX</span>
        </div>
      </div>

      <Contact/>
    </div>
</>
  )
}

export default About;