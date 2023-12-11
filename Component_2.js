import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import textData from '../json/Comp_2.json'; // Adjust the path based on your project structure

export default class Component2 extends Component {
  render() {
    return (
      <section className="about_section layout_padding mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="custom_heading-container">
                  <h2>{textData.heading}</h2>
                </div>

                <p>{textData.paragraph}</p>
                <div>
                  <Link to="/about">
                    {textData.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
