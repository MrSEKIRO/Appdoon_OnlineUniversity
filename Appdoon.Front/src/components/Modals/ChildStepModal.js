import React from "react";
import "../../Modular_Css/ChildStepModal.css";

function ChildStepModal({ setStepId, childStep, setChildStep }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setStepId(0);
              setChildStep(0);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 dir="rtl" style={{color:"black"}}>{childStep.Title}</h1>
        </div>
        <div className="body">
          <p dir="rtl">{childStep.Description}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setStepId(0);
              setChildStep(0);
            }}
            id="cancelBtn"
          >
            برگشت
          </button>
          <a href={childStep.Link} target="_blank"><button dir="rtl">بیشتر ...</button></a>
        </div>
      </div>
    </div>
  );
}

export default ChildStepModal;