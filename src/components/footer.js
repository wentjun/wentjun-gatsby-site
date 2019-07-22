import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faFreeCodeCamp,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import footerStyles from './footer.module.css';

export default () => (
  <footer>
    <div className="row">
      <a
        href="https://twitter.com/wentjun"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className={footerStyles.footer__icon}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/wentjun/"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className={footerStyles.footer__icon}
        />
      </a>
      <a
        href="https://github.com/wentjun"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={footerStyles.footer__icon}
        />
      </a>
      <a
        href="https://medium.com/@wentjun"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faMediumM}
          className={footerStyles.footer__icon}
        />
      </a>
      <a
        href="https://www.freecodecamp.org/news/author/wentjun/"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faFreeCodeCamp}
          className={footerStyles.footer__icon}
        />
      </a>
      <a
        href="mailto: wentjun@u.nus.edu"
        className={footerStyles.footer__iconContainer}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className={footerStyles.footer__icon}
        />
      </a>
      <span className={footerStyles.footer__label}>
        Made with{' '}
        <span className={footerStyles.footer__heartIcon}>&#9829;</span> using{' '}
        <a
          href="https://www.gatsbyjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          GatsbyJS
        </a>
      </span>
    </div>
  </footer>
);