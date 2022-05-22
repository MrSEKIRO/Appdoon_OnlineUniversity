//import "../../assets/css/timeline/style.css";
import { useState } from "react";




const Step = ({ step , key , setIdChildStep, setIdStep}) => {
    

    const clear = () =>{
        document.getElementById("TitleStep").value = null;
        document.getElementById("DescriptionStep").value = null;
        document.getElementById("LinkStep").value = null;
        document.getElementById("result_message_edit_step").innerHTML = null;
        document.getElementById("result_message_delete_step").innerHTML = null;
    }
    

    return(
        
        <div className="timeline-item">
            <div className="timeline-item-content">
                    <span className="tag">
                        {step.Title}
                    </span>

                <p dir="rtl">{step.Description}</p>
                <br/>

                <div>
                    {step.ChildSteps.length > 0 && <h4 dir="rtl">مراحل این قدم:</h4>}
                    
                    <ol dir="rtl"  style = {{marginRight: "20px"}}>
                        {
                            step.ChildSteps.map((childstep, idx) => (
                                <div className="zoom">
                                    <li dir="rtl">
                                        <a href="#!" data-toggle="modal" data-target="#myModal" onClick={() => {setIdChildStep(childstep.Id)}}>{childstep.Title}</a>
                                    </li>
                                </div>
                            ))
                        }
                    </ol>
                </div>


                {step.Link && (
                    <div className="bilbilak zoom">
                        <a
                            href={step.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {step.Title}
                            
                        </a>

                    </div>
                )}

                <div className="edit_delete" style={{marginTop:"10px"}}>
                    
                    <button href="#!" data-toggle="modal" data-target={"#deleteModalStep"+step.Id} variant="primary" class="btn btn-danger" onClick={() => {clear(); setIdStep(step.Id);}}>حذف</button>
                    <button style={{marginLeft:"5px"}} href="#!" data-toggle="modal" data-target={"#editModalStep"+step.Id} variant="primary" class="btn btn-primary" onClick={() => {clear(); setIdStep(step.Id);}}>ویرایش</button>
                    <button style={{marginLeft:"5px"}} href="#!" data-toggle="modal" data-target="#editModalLesson" variant="success" class="btn btn-success" onClick={() => {}}>افزودن محتوا</button>
                </div>
                
                <span className="circle" />
                
            </div>
        </div>
    );
}

export default Step;