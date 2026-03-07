export function Projects() {
  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">My Projects</h2>
            <p>Below are my few of the projects and architectures.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(/images/project-4.gif)" }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">SQL &amp; RAG</a>
                </h3>
                <span>GenAI Solution - LLM</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(/images/project-5.svg)" }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">AI-Driven Research Data Solutions</a>
                </h3>
                <span>Azure AI Search</span>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(/images/project-1.jpg)" }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Admin Chatbot</a>
                </h3>
                <span>AWS Lex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

