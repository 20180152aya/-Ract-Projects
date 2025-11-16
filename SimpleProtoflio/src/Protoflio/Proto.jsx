import myIMage from "../assets/Screenshot from 2025-10-27 23-05-18.png";
import myIMg2 from "../assets/Screenshot from 2025-11-14 00-08-11.png";
import myIMg3 from "../assets/Screenshot from 2025-11-15 15-29-15.png";
import myIMg4 from "../assets/Screenshot from 2025-11-15 15-30-35.png";
import myIMg5 from "../assets/Screenshot from 2025-11-15 15-32-29.png";
import "./Proto.css";

import React from "react";
function Proto() {
  return (
    <>
      <div className="container px-4 mt-5">
        <h2 className="text-uppercase text-black fw-bold">Portfolio</h2>

        <div className="row gx-4 gy-4 mt-4 text-center">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMage} alt="" className="project-img" />
              <div className="p-3 fw-semibold">Angular Projects</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMg2} alt="" className="project-img" />
              <div className="p-3 fw-semibold">WordPress Projects</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMg3} alt="" className="project-img" />
              <div className="p-3 fw-semibold">Bootstrap Projects</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMg4} alt="" className="project-img" />
              <div className="p-3 fw-semibold">HTML & CSS Projects</div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMg5} alt="" className="project-img" />
              <div className="p-3 fw-semibold">JavaScript Projects</div>
            </div>
          </div>
                    <div className="col-12 col-sm-6 col-md-4">
            <div className="project-card">
              <img src={myIMg5} alt="" className="project-img" />
              <div className="p-3 fw-semibold">JavaScript Projects</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Proto;
