import photo from "../assets/photo.png";
import { GoNorthStar } from "react-icons/go";

const About = () => (
  <div className="main-wrapper" id="about">
    <div className="main">
      <div className="box">
        <div className="about">
          <h1>
            <span>01.</span> About Me
          </h1>
          <h5>
            My interest in technology began in high school when I chose to take
            a technical course in Systems Development.
            <span> My eyes lit up when I created my first web page </span>using
            HTML — even without knowing anything about programming, I felt that
            this was what I wanted to dedicate my time and energy to.
          </h5>
          <h5>
            After three years, I completed the technical course knowing for sure
            that I wanted to pursue this path. I was accepted into college and
            began studying <span>Systems Analysis and Development</span>, where
            I deepened my knowledge and graduated after another three years of
            hard work and dedication.
          </h5>
          <h5>
            Since then, I’ve been
            <span>
              {" "}
              constantly working to improve myself by taking courses{" "}
            </span>
            that strengthen my existing skills and exploring new areas. I’m
            passionate about technology, programming, and testing, and I’m
            always seeking new knowledge and giving my best in everything I do.
          </h5>
          <h5>
            Here are some of the technologies I’ve been studying recently:
          </h5>
          <div className="tech-stack">
            <ul>
              <li>
                <GoNorthStar className="star-icon" /> JavaScript
              </li>
              <li>
                <GoNorthStar className="star-icon" /> TypeScript
              </li>
              <li>
                <GoNorthStar className="star-icon" /> React.js
              </li>
              <li>
                <GoNorthStar className="star-icon" /> Node.js
              </li>
            </ul>
            <ul>
              <li>
                <GoNorthStar className="star-icon" /> Angular.js
              </li>
              <li>
                <GoNorthStar className="star-icon" /> Python
              </li>
              <li>
                <GoNorthStar className="star-icon" /> Dart
              </li>
              <li>
                <GoNorthStar className="star-icon" /> Flutter
              </li>
            </ul>
          </div>
        </div>
        <div className="photo">
          <img src={photo} alt="Beatriz's Photo" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
