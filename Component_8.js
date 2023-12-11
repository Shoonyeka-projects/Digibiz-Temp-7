import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_8.json'; 

export default class Component_8 extends Component {
  render() {
    const {
      menu,
      location,
      socialLinks,
      newsletter
    } = texts;

    return (
      <section className="info_section layout_padding-top layout_padding2-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="info_links pl-lg-5">
                <h4>{menu.heading}</h4>
                <ul>
                  {Object.keys(menu).map((key) => (
                    key !== 'heading' && (
                      <li key={key}>
                        <Link to="/">{menu[key]}</Link>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_contact">
                <h4>{location.heading}</h4>
                {Object.keys(location).map((key) => (
                  key !== 'heading' && (
                    <div key={key}>
                      <img src={`images/${key}.png`} alt="" />
                      <p>{location[key]}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_social">
                <h4>{socialLinks.heading}</h4>
                <div className="social_container">
                  {socialLinks.links.map((link, index) => (
                    <div key={index}>
                      <a href={link.url}>
                        <img src={link.icon} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_form">
                <h4>{newsletter.heading}</h4>
                <form action="#">
                  <input type="text" placeholder={newsletter.placeholder} />
                  <button type="submit">{newsletter.buttonText}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
