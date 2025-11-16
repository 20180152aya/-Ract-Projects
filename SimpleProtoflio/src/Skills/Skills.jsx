function Skills() {
  return (
    <>
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0">
              <div style={{ position: "sticky", top: "100px" }}>
                <h2 className="fw-bold">My Skills</h2>
                <p className="fs-5 text-secondary">
                  I have developed strong technical skills in both front-end and
                  back-end development. These skills help me build responsive,
                  efficient, and scalable applications while collaborating
                  effectively in team environments.
                </p>
              </div>
            </div>

            <div className="col-md-7">
           
              <h6 className="fw-semibold mt-3">PHP</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <h6 className="fw-semibold">Node.js</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <h6 className="fw-semibold">Angular</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>

     
              <h6 className="fw-semibold">React</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "85%" }}
                ></div>
              </div>

           
              <h6 className="fw-semibold">JavaScript</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>

       
              <h6 className="fw-semibold">SQL</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>

            
              <h6 className="fw-semibold">MongoDB</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <h6 className="fw-semibold">Laravel</h6>
              <div
                className="progress bg-secondary mb-3"
                style={{ height: "25px" }}
              >
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
