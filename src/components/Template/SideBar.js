import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anthony Lieu</h2>
        <p>
          <a href="mailto:anthonylieu1@gmail.com">anthonylieu1@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      {/* <h2>About</h2>
      <p>Hi, I&apos;m Anthony.</p>
      <p>My background is in Web Management, IT Analytics, and small business
        ownership.  I&apos;m a Full Stack Developer who is ready to work together and work hard.
      </p> */}
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Anthony Lieu 2023.</p>
    </section>
  </section>
);

export default SideBar;
