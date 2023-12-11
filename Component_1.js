import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import component1Data from '../path-to-your-json/component1Data.json';

export default class Component_1 extends Component {
  render() {
    const { carouselItems } = component1Data;

    return (
      <div className="hero_area">
        <section className="slider_section">
          <div className="container-fluid">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      <div className="col-md-3 col-lg-2 offset-md-2">
                        <div className="detail-box">
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <div>
                            <Link to={item.readMoreLink}>Read More</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-lg-8">
                        <div className="img-box">
                          <img src={item.imageSrc} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
