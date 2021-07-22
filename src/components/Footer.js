import React from 'react'
import Button from "@material-tailwind/react/Button";

function Footer() {
  return (
    <>
      <div className="bg-violet flex flex-col justify-center items-center p-12 bg-footer-texture-xl">
        <h1 className="text-white font-bold text-2xl mb-4">Boost your links today</h1>
        <Button
          rounded={true}
          size="xl"
          ripple="light"
          className="bg-cyan ml-3 capitalize"
        >
          Get Started
        </Button>
      </div>
      <footer className="py-10 bg-gray-900">
        <section className="space-y-7 md:space-y-0 flex justify-evenly text-center flex-col md:flex-row md:!text-left text-gray-100">
          <div>
            <img className="filter invert m-auto md:m-0" src="images/logo.svg" alt="shortly-logo" />
          </div>
          <div className="flex flex-col">
            <h3 className="pb-2 md:!pb-4">Features</h3>
            <a href="#link-shortening" className="footer-link">Link Shortening</a>
            <a href="#branded-links" className="footer-link">Branded Links</a>
            <a href="#analytics" className="footer-link">Analytics</a>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-2 md:!pb-4">Resources</h3>
            <a href="#blog" className="footer-link">Blog</a>
            <a href="#developers" className="footer-link">Developers</a>
            <a href="#support" className="footer-link">Support</a>
          </div>
          <div className="flex flex-col">
            <h3 className="pb-2 md:!pb-4">Company</h3>
            <a href="#about" className="footer-link">About</a>
            <a href="#our-team" className="footer-link">Our Team</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="flex m-auto md:m-0 text-3xl space-x-4 h-10">
            <i className="fa fa-facebook-square footer-link"></i>
            <i className="fa fa-twitter footer-link"></i>
            <i className="fa fa-pinterest footer-link"></i>
            <i className="fa fa-instagram footer-link"></i>
          </div>
        </section>

      </footer>
    </>
  )
}

export default Footer
