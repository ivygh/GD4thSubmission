import React, { Component } from "react";

import "./TeamPage.css";

const TeamMember = ({ name, image }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

export default class TeamPage extends Component {
  render() {
    const teamMembers = [
      { name: "Abdu, Aimen", image: "/aimen.png" },
      { name: "Wing Sau chun", image: "/wing.png" },
      { name: "Pallavi Mishra", image: "/pallavi.png" },
      { name: "Samiya Sadiqa Fatima", image: "/fathima.png" },
      { name: "Dilakshan Sivaruban", image: "/Dilakshan.png" },
    ];

    return (
      <div>
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-row">
            {teamMembers.slice(0, 3).map((member) => (
              <TeamMember key={member.name} name={member.name} image={member.image} />
            ))}
          </div>
          <div className="team-row">
            {teamMembers.slice(3).map((member) => (
              <TeamMember key={member.name} name={member.name} image={member.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
