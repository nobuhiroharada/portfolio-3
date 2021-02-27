import React from "react";
import { Link } from "react-scroll";
import {
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Tokyo, Japan</p>
            </div>
            <div className="d-flex">
              <p>Nobuhiro Harada</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-110} className="footer-nav" >Home</Link>
                <br />
                <Link smooth={true} to="about" offset={-110} className="footer-nav" >About me</Link>
                <br />
                <Link smooth={true} to="services" offset={-110} className="footer-nav" >Services</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-110} className="footer-nav" >Experience</Link>
                <br />
                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" >Portfolio</Link>
                {/* <br />
                <a className="footer-nav">Contacts</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href='https://www.facebook.com/nobuhiroharada1026' target='_blank'>
                <FacebookIcon className="mx-3" size={36} />
              </a>
              <a href='https://twitter.com/nobuhiro_harada' target='_blank'>
                <TwitterIcon className="mx-3" size={36} />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;nobuhiroharada | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
