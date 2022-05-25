//import "../../assets/css/timeline/style.css";
import ChildStep from "./ChildStep";
import { useState } from "react";


function Isdone(data){
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

const Step = ({ data , key , handleModalId}) => {

    const handleModal = (childStep) => {
        handleModalId(data.Id,childStep);
    }
    
    return(
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag">
                    {data.Title}
                   {AllDone==1 &&
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                    </svg>
                   }
                </span>
                <p dir="rtl">{data.Description}</p>
                <br/>

                <div>
                    <h4 dir="rtl">مراحل این قدم:</h4>
                    
                    <div dir="rtl" style = {{marginRight: "20px"}}>
                        {
                            data.ChildSteps.map((childstep, idx) => (
                                <div>
                                    {ChildDOne==1 &&
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>}
                                    {ChildDOne==1 && <a href="#!" onClick={() => {handleModal(childstep)}}>{childstep.Title}</a>}
                                    
                                    {ChildDOne==0 &&
                                        <li dir="rtl">
                                        <a href="#!" onClick={() => {handleModal(childstep)}}>{childstep.Title}</a>
                                    </li>}
                                </div>
                            ))
                            
                        }
                        {/*<ChildStep data={childstep} key={idx} />*/}
                    </div>
                </div>


                {data.Link && (
                    
                    <a
                    
                        href={data.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        
                        {data.Title}
                        
                    </a>

                    
                )}
                
                <span className="circle" />
                
            </div>
        </div>
    );
}

export default Step;