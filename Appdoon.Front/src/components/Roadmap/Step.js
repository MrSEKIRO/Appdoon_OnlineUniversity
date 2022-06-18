//import "../../assets/css/timeline/style.css";
import { event } from "jquery";
import { useEffect, useState } from "react";


const Step = ({ step , setInputFields ,key , setIdChildStep, setIdStep, userInfo, CreatorId, HasRoadmap, Status, sensetive, setSensetive}) => {


    const [doneState, changeState] = useState([{toggled: false}]);

    const [urlDoneChildStep, setUrlDoneChildStep] = useState(process.env.REACT_APP_API + 'roadmap/DoneChildStep')

    async function DoneChildStep (ChildStepId){
        await fetch(`${urlDoneChildStep}?ChildStepId=${ChildStepId}`, {method:"POST", credentials:"include"})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch!');
            }
            return res.json();
        })
        .then(data => {
            
        })
        .catch(err => {
            
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                
                console.log(err.message);
            }
        })

        setSensetive(!sensetive);


    }

    useEffect(() => {
        if(Status == 0){
            changeState([{toggled: false}]);
        }
        else if(Status == -1){
            changeState([{toggled: false}]);
        }
        else if(Status == 1){
            changeState([{toggled: true}]);
        }
        if(HasRoadmap){
            for(var i = 0; i < step.ChildSteps.length; i++){
                if(step.ChildSteps[i].ChildStepProgresses[0].IsDone){
                    changeState(doneState => [...doneState, {toggled: true}])
                }
                else{
                    changeState(doneState => [...doneState, {toggled: false}])
                }
            }
        }
    },[step,HasRoadmap])



    const clear = () =>{
        document.getElementById("TitleStep").value = step.Title;
        document.getElementById("DescriptionStep").value = step.Description;
        document.getElementById("LinkStep").value = step.Link;
        document.getElementById("result_message_edit_step").innerHTML = null;
        document.getElementById("result_message_delete_step").innerHTML = null;
    }

    const clearChildStep = () =>{
        document.getElementById("CreateTitleChildStep").value = null;
        document.getElementById("CreateDescriptionChildStep").value = null;
        document.getElementById("CreateLinkChildStep").value = null;
        document.getElementById("result_message_create_childstep").innerHTML = null;
        setInputFields([]);
    }


    return(
        
        <div className="timeline-item">
            <div className={`timeline-item-content ${Status == -1 && HasRoadmap && "NotActive"}`}>

                <span className="tag">
                   {step.Title}
                    {userInfo.Role && HasRoadmap &&
                    <button className={doneState && !doneState.at(0).toggled ? "hi1" : "hi3"}>
                        {doneState && doneState.at(0).toggled &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        }
                        {doneState && !doneState.at(0).toggled &&
                            <br/>
                        }
                    </button>
                    }

                </span>
                {step.Description &&
                <p dir="rtl">{step.Description}</p>
                }
                {!step.Description &&
                    <br/>  
                }
                   
                <br/>

                <div>
                    {step.ChildSteps.length > 0 &&  <h4 style={{color:"rgb(255, 255, 255, 0.9)", marginBottom:"20px", fontSize:"25px"}} dir="rtl">مراحل این قدم:</h4>}
                    
                    <div dir="rtl" style = {{marginRight: "20px"}}>
                        {
                            step.ChildSteps.map((childstep, idx) => (
                                
                                <div className="zoom">
                                    

                                    <ul>
                                        <li>
                                            {userInfo.Role && HasRoadmap &&
                                            <button className={doneState && doneState[idx+1] && doneState[idx+1].toggled ? "hi2" : "hi4"} onClick={(Status == 0 || Status == 1) && (() => DoneChildStep(childstep.Id))}>
                                            {doneState && doneState[idx+1] && doneState[idx+1].toggled &&
                                                <svg xmlns="http://www.w3.org/2000/svg"  height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                                            }
                                            {doneState && doneState[idx+1] && !doneState[idx+1].toggled &&
                                                <br/>
                                            }
                                            </button>
                                            }

                                            

                                            <a href="#!" marginTop="0" data-toggle="modal" data-target="#myModal" onClick={() => {setIdChildStep(childstep.Id)}}>{(!userInfo.Role || !HasRoadmap) && `. `}{childstep.Title}</a>
                                        </li>
                                    </ul>

                                </div>
                            ))
                        }
                    </div>
                </div>


                {step.Link && (
                    <div className="bilbilak zoom">
                        <a
                            style={{color:"rgb(255, 255, 255, 0.9)"}}
                            href={step.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {step.Title}
                            
                        </a>

                    </div>
                )}

                {userInfo.Role && (userInfo.Id == CreatorId || userInfo.Role == "Admin") && 
                    <div className="edit_delete" style={{marginTop:"10px"}}>
                        <button href="#!" data-toggle="modal" data-target={"#deleteModalStep"+step.Id} variant="primary" class="btn btn-danger" onClick={() => {clear(); setIdStep(step.Id);}}><i class="far fa-trash-alt"></i></button>
                        <button style={{marginLeft:"5px"}} href="#!" data-toggle="modal" data-target={"#editModalStep"+step.Id} variant="primary" class="btn btn-primary" onClick={() => {clear(); setIdStep(step.Id);}}><i class="far fa-edit"></i></button>
                        <button style={{marginLeft:"5px"}} href="#!" data-toggle="modal" data-target={"#createModalChildStep"+step.Id} variant="success" class="btn btn-success" onClick={() => {setIdStep(step.Id); clearChildStep();}}><i class="far fa-plus-square"></i></button>
                    </div>
                }
                
                <span className={`circle ${(Status == 0 || Status == 1) && HasRoadmap && "Active"}`} />
                
            </div>
        </div>
    );
}

export default Step;