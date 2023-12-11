import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doSectionData from '../json/Comp_3.json'; 

export default class Component_3 extends Component {
  render() {
    const { sectionHeading, boxes } = doSectionData;

    return (
      <section className="do_section layout_padding-bottom">
        <div className="container">
          <div className="custom_heading-container">
            <h2>{sectionHeading}</h2>
          </div>
          <div className="row">
            {boxes.map((box, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className={`content-box ${box.bgColor}`}>
                  <div className="img-box">
                    <img src={box.imgSrc} alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>{box.title}</h6>
                    <p>{box.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
