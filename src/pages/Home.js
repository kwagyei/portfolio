import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Kwabena!</h2>
        <div className="prompt">
          <p>A budding software developer with a passion for solving problems with code.</p>
          <a href="https://www.linkedin.com/in/kwabena-sasu-boakye-34326913a" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

          <a href="mailto:kwabenasasuboakye@gmail.com">
            <EmailIcon />
          </a>

          <a href="https://github.com/kwagyei" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          </a>
           
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;