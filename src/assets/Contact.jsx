import React from "react";


// to use js inside a jsx code we use {} for js code
//but it is good practise to have js logic before the return section 

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.mail}</p>
            </div>
        </div>
    )
}

