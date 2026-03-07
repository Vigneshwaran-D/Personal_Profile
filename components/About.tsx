export function About() {
  return (
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(/images/bg_1.png)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  Currently, I lead advanced AI-driven initiatives at PepsiCo,
                  specializing in AI-powered document summarization, chatbots,
                  and predictive analytics. My expertise spans building
                  Generative AI applications, Retrieval-Augmented Generation
                  (RAG), and deploying custom LLM solutions tailored to business
                  needs.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Vigneshwaran D</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>April 29, 1991</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span>{" "}
                    <span>Chennai, Tamilnadu, India</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>600097</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>vignesh_dd.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+91-7200-21-7424</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number">600</span>{" "}
                  <span>Project complete</span>
                </p>
                <p>
                  <a
                    href="/Vigneshwaran_D_Resume_AI_Manager.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary py-3 px-3"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

