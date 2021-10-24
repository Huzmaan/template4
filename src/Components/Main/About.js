import React from 'react';
import avatar from '../../Images/avatar3.png'

const About = () => {
    return (
        <div className="MainAbout-css">
            <h1 className="About-css">About Me</h1>
            <img  className="profile-css"src={avatar} alt="profile"/>
            <div className="MainAboutText">
            <h6 className="About-text">Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</h6>
            <h6 className="About-text">Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</h6>
            </div>
        </div>
    )
}

export default About
