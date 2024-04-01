import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-10">
      <section className="flex flex-col justify-evenly space-y-7 text-center text-gray-100 md:flex-row md:space-y-0 md:!text-left">
        <div>
          <img
            className="m-auto invert filter md:m-0"
            src="images/logo.svg"
            alt="shortly-logo"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="pb-2 md:!pb-4">Features</h3>
          <a href="#link-shortening" className="footer-link">
            Link Shortening
          </a>
          <a href="#branded-links" className="footer-link">
            Branded Links
          </a>
          <a href="#analytics" className="footer-link">
            Analytics
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="pb-2 md:!pb-4">Resources</h3>
          <a href="#blog" className="footer-link">
            Blog
          </a>
          <a href="#developers" className="footer-link">
            Developers
          </a>
          <a href="#support" className="footer-link">
            Support
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="pb-2 md:!pb-4">Company</h3>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#our-team" className="footer-link">
            Our Team
          </a>
          <a href="#careers" className="footer-link">
            Careers
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
        <div className="m-auto flex h-10 space-x-4 text-3xl md:m-0">
          <i className="fa fa-facebook-square footer-link"></i>
          <i className="fa fa-twitter footer-link"></i>
          <i className="fa fa-pinterest footer-link"></i>
          <i className="fa fa-instagram footer-link"></i>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
