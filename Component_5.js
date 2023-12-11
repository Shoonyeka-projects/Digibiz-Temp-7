import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../json/Comp_5.json'; // Adjust the path accordingly

export default class Component_5 extends Component {
  render() {
    const { sectionHeading, items } = portfolioData;

    return (
      <section className="portfolio_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h2>{sectionHeading}</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {items.map((item) => (
              <div className="col-md-2" key={item.id}>
                <div className={`box ${item.id}`}>
                  <img src={item.imageSrc} alt="" />
                  <h4>{item.title}</h4>
                  <Link to={item.link}></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
