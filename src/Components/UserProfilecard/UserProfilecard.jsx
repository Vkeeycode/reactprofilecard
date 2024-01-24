import React from "react";
import "./UserProfilecard.css";
// import Vkeeycode from "../assets/Vkeeycode.JPG";
import Vkeeycode from "../images/Vkeeycode.JPG";

const UserProfilecard = () => {
  return (
    <div className="UPC">
      <img className="round" src={Vkeeycode} alt="profile-icon" />
      <h3>Ikeme Chinomso</h3>
      <p>
        Graphics Designer and <br />
        Full Stack Software Developer
      </p>
      <h5>Nomso Faith@Facebook.com</h5>
      <div className="buttons">
        <button className="FirstB">Message</button>
        <button className="SecondB">Following</button>
      </div>
      <div className="Skills">
        <h5> Skills</h5>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Illustrator</li>
          <li>Indesign</li>
          <li>Html/Css</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>C#</li>
          <li>MySql</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfilecard;
