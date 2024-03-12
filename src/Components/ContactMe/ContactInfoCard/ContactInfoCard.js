import React from "react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ text }) => {
    return (
        <div className="contact-details-card">
            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCard;
