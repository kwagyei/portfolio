import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

        {/* <a href="https://www.linkedin.com/in/kwabena-sasu-boakye-34326913a" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        </a> */}

        <a href="https://x.com/kwagyei_?t=ecvgpC3Ztuu4HmqeyVxbMg&s=09" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
        </a>

        {/* <a href="https://www.linkedin.com/in/kwabena-sasu-boakye-34326913a" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
        </a> */}

        <a href="https://www.linkedin.com/in/kwabena-sasu-boakye-34326913a" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
        </a>
        
      </div>
      <p> &copy; 2024 avivsolutionsgh.com</p>
    </div>
  );
}

export default Footer;