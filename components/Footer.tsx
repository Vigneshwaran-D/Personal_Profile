export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                I am a seasoned Digital Transformation Manager with over 12+
                years of experience in process engineering and software
                development, specializing in AI solutions, Conversational AI,
                and Hyperautomation. With a strong focus on Generative AI and
                Large Language Models (LLM), I have delivered transformative
                projects that drive efficiency and business growth.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a
                    href="https://www.linkedin.com/in/vigneshwaran-dhanasekaran/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#home-section">
                    <span className="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#about-section">
                    <span className="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#projects-section">
                    <span className="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a href="#contact-section">
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Key Skills</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#skills-section">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Generation AI
                  </a>
                </li>
                <li>
                  <a href="#skills-section">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Conversational AI
                  </a>
                </li>
                <li>
                  <a href="#skills-section">
                    <span className="icon-long-arrow-right mr-2"></span>
                    LLM / Fine Tuning
                  </a>
                </li>
                <li>
                  <a href="#skills-section">
                    <span className="icon-long-arrow-right mr-2"></span>RAG
                  </a>
                </li>
                <li>
                  <a href="#skills-section">
                    <span className="icon-long-arrow-right mr-2"></span>
                    Hyperautomation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">Chennai, Tamilnadu, India</span>
                  </li>
                  <li>
                    <a href="tel:+917200217424">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 7200-21-7424</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:vignesh_dd@aol.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">vignesh_dd@aol.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{year} All rights reserved |{" "}
              <a
                href="https://vigneshwaran-d.github.io/Personal_Profile/"
                target="_blank"
                rel="noreferrer"
              >
                Viki
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

