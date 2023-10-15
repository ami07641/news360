import React from "react";

const Footer = () => {
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto">
        <footer className="footer p-10 text-base-content">
          <aside>
            <h1 className=" text-6xl font-serif font-semibold mt-4 mb-2 text-basicColor">
              News 360
            </h1>
            <p>
              M360 Ltd.
              <br />
              Providing reliable tech since
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer footer-center p-4 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by M360 LTD.</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
