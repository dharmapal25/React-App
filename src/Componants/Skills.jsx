import React from 'react'
import './Home.css'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BiLogoMongodb } from 'react-icons/bi'
import { SiExpress, SiMysql } from 'react-icons/si'
import Contact from './Contact'
import Navbar from './Navbar'
function Skills() {
    return (
        <>
        <Navbar/>
            <h1 className='head' >Skills & projects</h1>

            <div className="skills-container">

                <aside className='aside-skills-container' >

                    <div className="html lag ">
                        <FaHtml5 style={{ fill: "#eea24bff", fontSize: "26px" }} />
                        <progress value={85} max={100} ></progress>
                    </div>

                    <div className="css lag ">
                        <FaCss3 style={{ fill: "#cf56c9ff", fontSize: "26px" }} />
                        <progress value={85} max={100} ></progress>
                    </div>

                    <div className="js lag ">
                        <FaJs style={{ fill: "#fff134ff", fontSize: "26px" }} />
                        <progress value={90} max={100} ></progress>
                    </div>

                    <div className="react lag ">
                        <FaReact style={{ fill: "#ffffffff ", fontSize: "26px" }} />
                        <progress value={75} max={100} ></progress>
                    </div>

                    <div className="express lag ">
                        <SiExpress style={{ fill: "#ffffffff ", fontSize: "26px" }} />
                        <progress value={65} max={100} ></progress>
                    </div>

                    <div className="mongo lag ">
                        <BiLogoMongodb style={{ fill: "#56e929ff ", fontSize: "26px" }} />
                        <progress value={85} max={100} ></progress>
                    </div>

                    <div className="sql lag ">
                        <SiMysql style={{ fill: "#ffffffff ", fontSize: "26px" }} />
                        <progress value={80} max={100} ></progress>
                    </div>

                </aside>
        <span className="head">Projects</span>
                <div className="box">

                    <div id="skill-box-1">
                        <h1>First</h1>
                        <p>Show case you project detail</p>
                        <p>Also screen record projects preview</p>
                        
                    </div>
                    <div id="skill-box-2">
                        <h1>second</h1>
                    </div>

                </div>
            </div>

            <Contact/>
        </>
    )
}

export default Skills