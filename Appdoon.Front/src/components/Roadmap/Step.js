//import "../../assets/css/timeline/style.css";
import { useState } from "react";


function Isdone(){
    const done = 1;
    if(done == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }

}
const AllDone = Isdone();
const ChildDOne = Isdone();


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
                   {AllDone==1 &&
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                    </svg>
                   }
                </span>
                <p dir="rtl">{step.Description}</p>
                   
                <br/>

                <div>
                    {step.ChildSteps.length > 0 && <h4 dir="rtl">مراحل این قدم:</h4>}
                    
                    <div dir="rtl" style = {{marginRight: "20px"}}>
                        {
                            step.ChildSteps.map((childstep, idx) => (
                                <div className="zoom">
                                    {ChildDOne==1 &&
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>}
                                    {ChildDOne==1 && <a href="#!" data-toggle="modal" data-target="#myModal" onClick={() => {setIdChildStep(childstep.Id)}}>{childstep.Title}</a>}
                                    
                                    {ChildDOne==0 &&
                                        <li dir="rtl">
                                        <a href="#!" data-toggle="modal" data-target="#myModal" onClick={() => {setIdChildStep(childstep.Id)}}>{childstep.Title}</a>
                                    </li>}
                           
                                </div>
                            ))
                        }
                        {/*<ChildStep data={childstep} key={idx} />*/}
                    </div>

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