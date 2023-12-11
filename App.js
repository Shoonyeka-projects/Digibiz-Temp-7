import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Component_8 from './components/Component_8';
import Contact from './pages/Contact';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/portfolio"}`} component={Portfolio} />
                <Route exact path={`${process.env.PUBLIC_URL + "/services"}`} component={Services} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}