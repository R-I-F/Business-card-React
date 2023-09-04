import React from "react";

export default function Header(){
    return (
        <div className="header">
            <h1>Ibrahim El-Refaee</h1>
            <h3>Frontend Developer</h3>
            <p>ibrahimrefaeei@gmail.com</p>
            <div className="buttons">
                <button className="email-btn"><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin-btn"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}