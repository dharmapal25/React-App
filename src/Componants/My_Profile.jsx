import { useState } from "react";
import "./contact.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function My_Profile() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
        <Navbar/>
            <div className="contact-container">

                <div className="big-size">

                    <div className="side-info-contactUs">

                        <div className="user-cont">

                            <span className="head-line-con">
                                Get in Touch
                            </span>
                            <span className="user">I'd like to hear from you!</span>

                            <div className="line-div">

                                <span className="line1">
                                    If you have any inquiries or just want to say hi, please use the contact from!</span>
                            </div>

                        </div>


                        <div className="location">
                            <div className="location-div">
                                <GoLocation style={{ fontSize: "15px", padding: "8px", fill: "black", backgroundColor: "#ffffffff", borderRadius: "50%" }} />
                            </div>

                            <div className="location-cont">
                                <span className="social-media" >Address</span>
                                <span>----ni,----i America </span>
                                <span>(***304)</span>
                            </div>
                        </div>


                        <div className="Phone">
                            <div className="Phone-div">

                                <BiPhone style={{ fontSize: "15px", padding: "8px", fill: "black", backgroundColor: "#ffffffff", borderRadius: "50%" }} />
                            </div>
                            <div className="Phone-cont">
                                <span className="social-media" >Phone</span>
                                <span>+91 807384****</span>
                            </div>
                        </div>

                        <div className="Email">
                            <div className="Email-div">

                                <CgMail style={{ fontSize: "15px", padding: "8px", color: "black", backgroundColor: "#ffffffff", borderRadius: "50%" }} />
                            </div>

                            <div className="Email-cont">

                                <span className="social-media" >Email</span>
                                <span>dharmapalbharati2525@gmail.com</span>
                            </div>
                        </div>

                        <div className="social">
                            {/* <Link to={"https://github.com/dharmapal25"} target="_blank" > */}
                            <BsGithub style={{ cursor: "pointer", padding: "10px" }} />
                            {/* </Link> */}

                            <BsLinkedin style={{ cursor: "pointer", padding: "10px" }} />
                            <BsTwitterX style={{ cursor: "pointer", padding: "10px" }} />
                            <BsInstagram style={{ cursor: "pointer", padding: "10px" }} />
                        </div>

                    </div>


                    <div className="contact-card">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                title="please Enter your name..."

                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                title="please Enter Email..."
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Type your meassge"
                                title="please Type meassge..."
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            />

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
