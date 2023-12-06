import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <button className="frame">
            <span className="START">START</span>
        </button>
        <div className="overlap-group">
          <img
            className="line"
            alt="Line"
            src="https://cdn.animaapp.com/projects/657047c3051cb6b4d642c20b/releases/657047f1804cad6eeb2512a1/img/line-1-1@2x.png"
          />
          <img
            className="img"
            alt="Line"
            src="https://cdn.animaapp.com/projects/657047c3051cb6b4d642c20b/releases/657047f1804cad6eeb2512a1/img/line-1-1@2x.png"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://cdn.animaapp.com/projects/657047c3051cb6b4d642c20b/releases/657047f1804cad6eeb2512a1/img/line-1-1@2x.png"
          />
          <p className="welcome-to-DOOP">
            <span className="span">
              Welcome <br />
              to <br />
              DOOP
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
