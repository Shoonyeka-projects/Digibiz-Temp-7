import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="hero_area">
        {/* header section starts */}
        <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
            <span>
              Brainwave
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-2">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portfolio </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/service">Services</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact us</a>
              </li>
            </ul>
            <div class="user_option">
              <div class="login_btn-container">
                <a href="">
                  Login
                </a>
              </div>
              <form class="form-inline my-2 my-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
          <div class="call_btn">
            <a href="">
              Call: +01234567890
            </a>
          </div>
        </nav>
      </div>
    </header>
        {/* end header section */}

        <section class="slider_section">
      <div class="container-fluid">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-3 col-lg-2 offset-md-2">
                  <div class="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-8">
                  <div class="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-3 col-lg-2 offset-md-2">
                  <div class="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-8">
                  <div class="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-3 col-lg-2 offset-md-2">
                  <div class="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-lg-8">
                  <div class="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
        <div class="custom_menu-container ">
            <div class="container">
              <div class="custom_menu">
                <ul class="navbar-nav ">
                  <li class="nav-item active">
                    <a class="nav-link pl-0" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/portfolio">Portfolio </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/services">Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact us</a>
                  </li>
                </ul>
                <div class="user_option">
                  <div class="login_btn-container">
                    <a href="">
                      Login
                    </a>
                  </div>
                  <form class="form-inline my-2 my-lg-0">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
