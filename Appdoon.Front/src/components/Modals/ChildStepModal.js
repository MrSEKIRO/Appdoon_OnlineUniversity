import React from "react";
import "../../Modular_Css/ChildStepModal.css";

function ChildStepModal({inputFields, setInputFields,childStep, setIdChildStep}) {

  const clear = async() =>{
    document.getElementById("TitleChildStep").value = childStep.Title;
    document.getElementById("DescriptionChildStep").value = childStep.Description;
    document.getElementById("LinkChildStep").value = childStep.Link;
    document.getElementById("result_message_edit_childstep").innerHTML = null;
    document.getElementById("result_message_delete_childstep").innerHTML = null;

    setInputFields([]);

    for(let i = 0; i < childStep.Linkers.length; i++){
        let newfield = { LinkTitle: childStep.Linkers[i].Title, LinkURL: childStep.Linkers[i].Link }
        await setInputFields(inputFields => [...inputFields, newfield])
    }

    for(let i = 0; i < childStep.Linkers.length; i++){
        //alert(document.getElementsByName("LinkTitle")[i].value)
        document.getElementsByName("LinkTitle")[i].value = childStep.Linkers[i].Title;
        document.getElementsByName("LinkURL")[i].value = childStep.Linkers[i].Link;
        
    }
  }


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
          <div class="modal-footer"  >
            <div style={{width: "100%"}}>
              <div className="edit_delete">
                  <button style={{marginLeft:"5px"}} href="#!" data-toggle="modal" data-target={"#editModalChildStep"+childStep.Id} variant="primary" class="btn btn-primary" onClick={() => {clear(); setIdChildStep(childStep.Id);}}><i class="far fa-edit"></i></button>
                  <button href="#!" data-toggle="modal" data-target={"#deleteModalChildStep"+childStep.Id} variant="primary" class="btn btn-danger" onClick={() => {clear(); setIdChildStep(childStep.Id);}}><i class="far fa-trash-alt"></i></button>
                  <a style={{float:"left"}} target="_blank" href={childStep.Link}><button type="button" class="btn btn-success">بیشتر بدانید ...</button></a>
              </div>
            </div>


          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChildStepModal;