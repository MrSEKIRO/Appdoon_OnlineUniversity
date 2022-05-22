import React from "react";
import "../../Modular_Css/ChildStepModal.css";

function ChildStepModal({childStep}) {
  return (


    <div style={{top: "5%"}} dir="rtl" class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">{childStep.Title}</h4>
          </div>
          <div class="modal-body">
            <p>{childStep.Description}</p>
            <ol style={{marginRight:"15px"}}>
              {childStep.Linkers && childStep.Linkers.map((data, idx) => (
                <li>
                  <p style={{marginBottom:"-0px"}}>{data.Title}</p>
                  <a style={{display: "flex", justifyContent: "left", alignItems: "left", marginLeft:"-25px"}} target="_blank" href={data.Link}>{data.Link}</a>
                </li>
              ))}
            </ol>
          </div>
          <div class="modal-footer">
            <a target="_blank" href={childStep.Link}><button type="button" class="btn btn-success">بیشتر ...</button></a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChildStepModal;