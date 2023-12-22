import React, { Component } from "react";
import './about-me.css'
import { Link } from "react-router-dom";


class AboutUs extends Component {
    render() {
        return (
            <div className="grid site-footer">
                <div className="widget-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <address> Company Name INC. 523 Burt Street, Omaha
                                    </address>
                                    Phone: +1 823 424 9134
                                    <a href="mailto:info@company.com">info@company.com</a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="widget">
                                    <h3 className="widget-title">Company</h3>
                                    <ul className="no-bullet">
                                        <li>About us</li>
                                        <li>Infoline</li>
                                        <li>Team</li>
                                        <li>Join us</li>
                                        <li>Cooperation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="widget">
                                    <h3 className="widget-title">Products</h3>
                                    <ul className="no-bullet">
                                        <li>Life insurance</li>
                                        <li>Home insurance</li>
                                        <li>Car insurance</li>
                                        <li>Business insurance</li>
                                        <li>Investment insurance</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="widget">
                                    <h3 className="widget-title">Our Solutions</h3>
                                    <ul className="no-bullet">
                                        <li>Presentation</li>
                                        <li>Testimonials</li>
                                        <li>Examples</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-2">
                                <div className="widget">
                                    <h3 className="widget-title">Resources</h3>
                                    <ul className="no-bullet">
                                        <li>Sed imperdiet magna</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="container">
                        <nav className="footer-navigation">
                            <Link to=''>Home</Link>
                            <Link to='about'>About</Link>
                            <Link to='contact'>Contact</Link>
                            <Link to='wrapper'>Wrapper</Link>
                        </nav>

                        <div className="colophon">Capston Project - University of Science and Technology Da Nang - Design By Luu Van Nghia.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;