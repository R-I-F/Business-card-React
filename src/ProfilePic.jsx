import React from "react";
import Profile from "./assets/Nice Selfie.jpg"

export default function ProfilePic(){
    return(
        <div className="profile-pic-container">
            <img className="profile-pic" src={Profile}/>
        </div>
    );
}