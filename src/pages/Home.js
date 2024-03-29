import React from 'react';
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Kwabena.</h2>
        <div className="prompt">
            <p>A budding software engineer with a passion for solving problems with code</p>
            <EmailIcon/>
            <LinkedInIcon/>
            <GithubIcon/>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, REACT Native, Flutter, NPM, Iconic, BootStrap, MaterialUI, YArn, TailwindCSS, StyledComponents
            </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, C#, C, C++, TypeScript, Go
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home