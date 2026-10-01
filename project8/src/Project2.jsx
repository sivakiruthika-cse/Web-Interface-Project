import React, { useState } from "react";
import "./Project2.css";

function Project2() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>

      <nav>
        <h2>Kiruthika.S</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HOME */}

      <section id="home" className="home">
        <p>Hello, I'm</p>

        <h1>Kiruthika S</h1>

        <h3>Computer Science Student</h3>

        <p>
          I am interested in web development and building simple,
          useful applications.
        </p>

        <a href="#about" className="btn">
          Know More
        </a>
      </section>

      {/* ABOUT */}

      <section id="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student passionate about
          programming, web development and learning new technologies.
          I have a strong interest in entrepreneurship. I'm curious about
          how ideas can be turned into useful products and solutions,
          and I enjoy exploring opportunities where technology and
          business can come together.
        </p>
      </section>

      {/* SKILLS */}

      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-container">
          <div>Java</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>HTML & CSS</div>
          <div>SQL</div>
          <div>Data Structures</div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects">
        <h2>Projects</h2>

        <div className="projects-container">

          <div className="project-card">

            <div className="project-content">
              <h3>Aadhaar Registration</h3>

              <p>
                React registration form with validations and profile
                photo upload.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
              </div>
            </div>

            <a
              href="YOUR_AADHAAR_PROJECT_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="project-arrow"
            >
              ↗
            </a>

          </div>


          <div className="project-card">

            <div className="project-content">
              <h3>Habit Garden</h3>

              <p>
                A simple React application for tracking daily habits
                and progress.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>LocalStorage</span>
              </div>
            </div>

            <a
              href="YOUR_HABIT_GARDEN_PROJECT_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="project-arrow"
            >
              ↗
            </a>

          </div>

        </div>
      </section>

      <section id="contact">
  <h2>Contact</h2>

  <p>kiruthisiva79@gmail.com</p>

  <div className="contact-buttons">

    <a
      href="https://www.linkedin.com/in/%F0%9D%96%AA%F0%9D%97%82%F0%9D%97%8B%F0%9D%97%8E%F0%9D%97%8D%F0%9D%97%81%F0%9D%97%82%F0%9D%97%84%F0%9D%96%BA-%F0%9D%96%B2%F0%9D%97%82%F0%9D%97%8F%F0%9D%96%BA-211b78386/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/sivakiruthika-cse"
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
    >
      GitHub
    </a>

    <a
      href="mailto:kiruthisiva79@gmail.com"
      className="social-btn"
    >
      Email Me
    </a>

  </div>
</section>

      <footer>
        kiruthisiva79@gmail.com
      </footer>

    </div>
  );
}

export default Project2;