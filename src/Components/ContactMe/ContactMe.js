import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
const handleGitHubClick = () => {
    window.open("https://github.com/RohankumarV", "_blank");
};

const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rohankumar-v-1332b4240", "_blank");
};

const handleEmailClick = () => {};
const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1Szm2mhtMft4ENxDnOSibTT1vx9GVaX6S/view?usp=sharing","_blank");
}
const  ContactMe = () => {
    return (
        <section id="contact" className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div className="contact-content-info" style={{flex:1}} onClick={handleEmailClick}>
                <div className="icon">
                    <EmailOutlinedIcon />
                </div>
                    <ContactInfoCard 
                    text="rohankumarvjuly2002@gmail.com"
                    />
                </div>
                <div className="contact-content-info" style={{flex:1}} onClick={handleGitHubClick}>
                <div className="icon">
                    <GitHubIcon />
                </div>
                    <ContactInfoCard 
                    text="https://github.com/RohankumarV"
                    />
                </div>
                <div className="contact-content-info" style={{flex:1}} onClick={handleLinkedInClick}>
                <div className="icon">
                    <LinkedInIcon />
                </div>
                    <ContactInfoCard 
                    text="www.linkedin.com/in/rohankumar-v-1332b4240"
                    />
                </div>
                <div className="contact-content-info" style={{flex:1}} onClick={handleDownloadResume}>
                <div className="icon">
                    <DownloadIcon />
                </div>
                    <ContactInfoCard 
                    text="Download Resume"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactMe;