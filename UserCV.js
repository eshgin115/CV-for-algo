import React, { Component } from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class UserCV extends Component {
  render() {
    return (
      <div className="cv">
        <center>
          <h2>CV</h2>
        </center>
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
    );
  }
}

export default UserCV;
