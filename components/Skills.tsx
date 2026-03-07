export function Skills() {
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Process engineering, Hyperautomation, Chatbots, RPA, Large
              Language Models (LLM), Retrieval-Augmented Generation (RAG), AI
              innovation.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>Generative AI</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-1" 
                    strokeDasharray="283" 
                    strokeDashoffset="28.3"
                    style={{ strokeDashoffset: "calc(283 - (283 * 90) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">90%</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>Conversational AI</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-2" 
                    strokeDasharray="283" 
                    strokeDashoffset="42.45"
                    style={{ strokeDashoffset: "calc(283 - (283 * 85) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">85%</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>Large Language Models (LLM)</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-3" 
                    strokeDasharray="283" 
                    strokeDashoffset="14.15"
                    style={{ strokeDashoffset: "calc(283 - (283 * 95) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">95%</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>RAG</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-4" 
                    strokeDasharray="283" 
                    strokeDashoffset="28.3"
                    style={{ strokeDashoffset: "calc(283 - (283 * 90) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">90%</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>LangChain</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-5" 
                    strokeDasharray="283" 
                    strokeDashoffset="42.45"
                    style={{ strokeDashoffset: "calc(283 - (283 * 85) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">85%</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate radial-chart-container">
              <h3>UI/UX</h3>
              <div className="radial-chart">
                <svg viewBox="0 0 100 100" className="radial-svg">
                  <circle cx="50" cy="50" r="45" className="radial-track" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    className="radial-progress color-6" 
                    strokeDasharray="283" 
                    strokeDashoffset="56.6"
                    style={{ strokeDashoffset: "calc(283 - (283 * 80) / 100)" }}
                  />
                  <text x="50" y="50" className="radial-text">80%</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

