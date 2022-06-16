//import "../../assets/css/timeline/style.css";
import { event } from "jquery";
import { useEffect, useState } from "react";


const Step = ({ step , setInputFields ,key , setIdChildStep, setIdStep, userInfo, CreatorId}) => {


    const [doneState, changeState] = useState([{toggled: false}]);


    function toggleingactive (index){
        const arrCopy = doneState;

        arrCopy[index].toggled = !arrCopy[index].toggled;
        console.log(doneState);
        changeState([...doneState , arrCopy]);
        //changeState(arrCopy);
    }

    useEffect(() => {
        changeState([{toggled: false}]);
        for(var i = 0; i < step.ChildSteps.length; i++){
            changeState(doneState => [...doneState, {toggled: false}])
        }
    },[step])



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
            <div className="timeline-item-content">

                <span className="tag zoom">
                   {step.Title}
                    {userInfo.Role && 
                    <button className={doneState && doneState.at(0).toggled ? "hi1" : "hi3"} onClick={() => toggleingactive(0)}>
                        {doneState && doneState.at(0).toggled &&
                            <svg xmlns="http://www.w3.org/2000/svg"  height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        }
                        {doneState && !doneState.at(0).toggled &&
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
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
                                            {userInfo.Role && 
                                            <button className={doneState && doneState[idx+1] && doneState[idx+1].toggled ? "hi2" : "hi4"} onClick={() => toggleingactive(idx+1)}>
                                            {doneState && doneState[idx+1] && doneState[idx+1].toggled &&
                                                <svg xmlns="http://www.w3.org/2000/svg"  height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                                            }
                                            {doneState && doneState[idx+1] && !doneState[idx+1].toggled &&
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
                                            }
                                            </button>
                                            }

                                            

                                            <a href="#!" marginTop="0" data-toggle="modal" data-target="#myModal" onClick={() => {setIdChildStep(childstep.Id)}}>{!userInfo.Role && `. `}{childstep.Title}</a>
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
                
                <span className="circle" />
                
            </div>
        </div>
    );
}

export default Step;