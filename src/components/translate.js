import React from "react";
import "./translate.css";

const Translate = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
            ></textarea>
            <textarea
              readOnly
              spellCheck="false"
              className="to-text"
              placeholder="Translation"
            ></textarea>
          </div>
          <ul className="controls">
            <li className="row from">
              <div className="icons">
                <i id="from" className="fas fa-volume-up"></i>
                <i id="from" className="fas fa-copy"></i>
              </div>
              <select></select>
            </li>
            <li className="exchange">
              <i className="fas fa-exchange-alt"></i>
            </li>
            <li className="row to">
              <select></select>
              <div className="icons">
                <i id="to" className="fas fa-volume-up"></i>
                <i id="to" className="fas fa-copy"></i>
              </div>
            </li>
          </ul>
        </div>
        <button>Translate Text</button>
      </div>
    </>
  );
};

export default Translate;
