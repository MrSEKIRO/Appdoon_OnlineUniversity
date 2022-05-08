//import "../../assets/css/timeline/style.css";
import ChildStep from "./ChildStep";
import { useState } from "react";



const Step = ({ data , key , handleModalId}) => {

    const handleModal = (childStep) => {
        handleModalId(data.Id,childStep);
    }
    return(
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag">
                    {data.Title}
                </span>
                <p  dir="rtl">{data.Description}</p>
                <br/>

                <div>
                    <h4 dir="rtl">مراحل این قدم:</h4>
                    
                    <ol dir="rtl"  style = {{marginRight: "20px"}}>
                        {
                            data.ChildSteps.map((childstep, idx) => (
                                <li dir="rtl">
                                    <a href="#!" onClick={() => {handleModal(childstep)}}>{childstep.Title}</a>
                                </li>
                            ))
                            
                        }
                        {/*<ChildStep data={childstep} key={idx} />*/}
                    </ol>
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