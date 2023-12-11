import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import testimonialData from '../json/Comp_6.json'; // Adjust the path accordingly

export default class Component_6 extends Component {
  render() {
    const { sectionHeading, testimonials } = testimonialData;

    return (
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="custom_heading-container">
            <h2>{sectionHeading}</h2>
          </div>
        </div>

        <div className="container">
          <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial) => (
                <div className={`carousel-item ${testimonial.id === "b-1" ? "active" : ""}`} key={testimonial.id}>
                  <div className="client_container layout_padding2">
                    <div className={`client_box ${testimonial.id}`}>
                      <div className="client-id">
                        <div className="img-box">
                          <img src={testimonial.imageSrc} alt="" />
                        </div>
                        <div className="name">
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{testimonial.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
