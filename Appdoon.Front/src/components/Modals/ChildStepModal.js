import React from "react";
import "../../Modular_Css/ChildStepModal.css";

function ChildStepModal({ setStepId, childStep, setChildStep }) {


  return (


    <div dir="rtl" class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" onClick={() => {setStepId(0); setChildStep(0);}}>&times;</button>
            <h4 class="modal-title">{childStep.Title}</h4>
          </div>
          <div class="modal-body">
            <p>{childStep.Description}</p>
          </div>
          <div class="modal-footer">
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChildStepModal;