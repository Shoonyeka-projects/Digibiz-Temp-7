import React, { Component } from 'react';
import skillsData from '../json/Comp_4.json'; // Adjust the path accordingly
import './Component_4.css'; // Import your CSS file

export default class Component_4 extends Component {
  render() {
    const { sectionHeading, skills } = skillsData;

    return (
      <section className="skill_section layout_padding2">
        <div className="container">
          <div className="custom_heading-container">
            <h2>{sectionHeading}</h2>
          </div>
          <div className="skill_padding">
            <div className="row">
              {skills.map((skill) => (
                <div className="col-md-3 col-sm-6" key={skill.id}>
                  <div className="box">
                    <div className="circle" id={skill.id}></div>
                    <h6>{skill.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
