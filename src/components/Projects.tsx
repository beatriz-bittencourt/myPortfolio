import ViaCruzeiro from "../assets/via_crz.png";
import Birdhouse from "../assets/birdhouse.png";
import NextScene from "../assets/nextscene.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GrCircleQuestion } from "react-icons/gr";
import { useState } from "react";

const Projects = () => {
  const [openExplanations, setOpenExplanations] = useState<number[]>([]);

  const toggleExplanation = (index: number) => {
    setOpenExplanations((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const closeExplanation = (index: number) => {
    setOpenExplanations((prev) => prev.filter((i) => i !== index));
  };

  const projects = [
    {
      id: 1,
      title: "Via Cruzeiro",
      image: ViaCruzeiro,
      description1:
        "Via Cruzeiro was developed as my Graduation Thesis. The idea came from a real problem in my city: the lack of reliable information about public buses, such as their current location, schedules, and estimated arrival times.",
      description2:
        "To address this issue, I built a web application that allows users to track, in real-time, the location of buses on the Via Cruzeiro line, check routes, schedules, and get accurate arrival predictions.",
      techs: ["React", "Leaflet", "Express", "Socket.IO", "MongoDB"],
      explanation:
        "The project was developed using React for the frontend, Leaflet for interactive maps, Node.js with Express for the backend, Socket.IO for real-time communication, and MongoDB as the database.",
    },
    {
      id: 2,
      title: "Birdhouse",
      image: Birdhouse,
      description1:
        "Birdhouse is a university project developed using web technologies, Linux, and Arduino. It is a website designed to control various functionalities of an automated bird cage, such as tracking bird movements (entries and exits), setting feeding schedules, and providing information about the birds, their food, and the cage.",
      description2:
        "Although the web interface is fully functional and responsive, the complete operation of the project relies on Arduino hardware and embedded code to manage sensors and actuators inside the cage.",
      techs: ["HTML", "CSS", "JavaScript", "Linux", "Arduino"],
      explanation:
        "The site was developed using HTML, CSS, and JavaScript for a responsive and user-friendly interface. Linux hosts the web server, while Arduino handles sensor data and actuator control.",
    },
    {
      id: 3,
      title: "NextScene",
      image: NextScene,
      description1:
        "NextScene is a personal project developed to learn and practice TailwindCSS, Next.js, and TypeScript. It is a movie catalog website that allows users to search for and view detailed information about movies, including synopses, genres, release dates, and ratings.",
      description2:
        "The project integrates with The Movie Database (TMDB) API to fetch real-time data about movies, offering a dynamic and updated user experience.",
      techs: ["Next.js", "TailwindCSS", "TypeScript", "TMDB API"],
      explanation:
        "Next.js was used for the frontend and server-side rendering. TailwindCSS handled the responsive UI. TypeScript ensured type safety. TMDB API provided all movie data like descriptions and images.",
    },
  ];

  return (
    <div className="main-wrapper" id="projects">
      <div className="main-project">
        <div className="my-projects">
          <h1>
            <span>02.</span> Some projects I've built
          </h1>
        </div>

        {projects.map((project, index) => (
          <div
            className={`project-card ${index % 2 === 0 ? "" : "reverse"}`}
            key={project.id}
          >
            <div className="image-section">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div
              className={`description-section ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              {openExplanations.includes(index) && (
                <div className="explanation-box">
                  <IoCloseCircleOutline
                    size={22}
                    className="close-icon"
                    onClick={() => closeExplanation(index)}
                    style={{ cursor: "pointer" }}
                  />
                  <p>{project.explanation}</p>
                </div>
              )}

              <h2 className="project-title">{project.title}</h2>

              <p className="project-description">{project.description1}</p>
              <p className="project-description">{project.description2}</p>

              <ul className="tech-list">
                {project.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
                <li
                  className="info-icon"
                  onClick={() => toggleExplanation(index)}
                  style={{ cursor: "pointer" }}
                >
                  <GrCircleQuestion size={20} />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
