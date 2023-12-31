import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import texts from '../json/Comp_7.json'; // Assuming the JSON file is in the same directory as your component

export default class Component_7 extends Component {
  render() {
    const formHeadings = texts.formHeadings;

    return (
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
              <h2 className="custom_heading">{formHeadings.contact}</h2>
              <form action="#">
                <div>
                  <label>{formHeadings.name}</label>
                  <input type="text" placeholder={formHeadings.name} />
                </div>
                <div>
                  <label>{formHeadings.email}</label>
                  <input type="email" placeholder={formHeadings.email} />
                </div>
                <div>
                  <label>{formHeadings.phone}</label>
                  <input type="text" placeholder={formHeadings.phone} />
                </div>
                <div>
                  <label>{formHeadings.message}</label>
                  <input type="text" className="message-box" placeholder={formHeadings.message} />
                </div>
                <div className="d-flex mt-4">
                  <button>
                    {formHeadings.sendButton}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src="images/contact.jpg" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
