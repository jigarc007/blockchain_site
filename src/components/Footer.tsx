import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contactInfo}>
        <h3>BUILD</h3>
        <p>
          Website:{" "}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            example.com
          </a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567789">+123 4567 789</a>
        </p>
      </div>
      <div className={styles.footerSections}>
        <div>
          <h4>Events</h4>
          <ul>
            <li>
              <a
                href="https://example.com/webinars"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webinars
              </a>
            </li>
            <li>
              <a
                href="https://example.com/sponsor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor an Event
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Consulting</h4>
          <ul>
            <li>
              <a
                href="https://example.com/student-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Services
              </a>
            </li>
            <li>
              <a
                href="https://example.com/customer-strategy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Strategy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <a
                href="https://example.com/architecture-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Architectural Design
              </a>
            </li>
            <li>
              <a
                href="https://example.com/research-papers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Papers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.borderDiv}></div>
      <div className={styles.copyRight}>
        <span>build</span>
        <span>©2018-2024</span>
      </div>
    </div>
  );
};

export default Footer;
