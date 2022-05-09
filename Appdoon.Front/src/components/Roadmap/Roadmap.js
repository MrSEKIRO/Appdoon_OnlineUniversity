import Step from "./Step";
import React,{Component} from "react";
import "../../Modular_Css/RoadmapStyle.css";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import ChildStepModal from '../Modals/ChildStepModal';
import { useState } from "react";


const Roadmap = () => {
    

    //e.preventDefault();

    //setIsPending(true);


    const {id} = useParams();

    const [isPending, setIsPending] = useState(false)

    const history = useNavigate()
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true)
    const url = process.env.REACT_APP_API + 'RoadMaps/IndividualRoadMap';



    const [stepId, setStepId] = useState(0);
    const [childStep, setChildStep] = useState(0);

    useEffect(() => {

    
    

        fetch(url,{
            
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify({
                RoadMapId:id
            })
            
        }).then(res => {
            
            //console.log(res);
            
            if(!res.ok){
                
                throw Error('could not fetch!');
            }
            
            return res.json();
        })
        .then(data => {
            
            //alert(data.Data.length);
            console.log(data);
            //alert(data.Data.Id);
            setData(data.Data);
            setIsLogin(false);
            setError(null);
            //alert("sfd");
            
        }).then(() =>{
            
            //setIsPending(false);
            //console.log("New Blog added");
            //history.push(`/timeline/${id}`);
            
        })
        .catch(err => {
            
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsLogin(false);
            }
        })
    }, [url]);

    const handleModal = (stepId, childStep) =>{
        setStepId(stepId);
        setChildStep(childStep);
    }
    return(

        <div>
            
            {data && data.Id > 0 && (
                
                <div className='timelineBody'>
                    <button className = "butten_Edit" onclick="activateLasers()" type="button">ویرایش</button>
                   
                    <h1 dir="rtl">رودمپ {data.Title}</h1>
                    <p  dir="rtl" style={{color:"white"}}>{data.Description}</p>
                    <div class="timeline-container">
                        
                        {data.Steps.map((step, idx) => (
                            <Step data={step} key={idx} handleModalId={handleModal}/>
                        ))}
                    </div>
                    {stepId && <ChildStepModal setStepId={setStepId} childStep={childStep} setChildStep={setChildStep}/>}
                </div>
                )
            }

            {data && data.Id == 0 && (
                <div>
                    .رودمپ خالی است
                </div>)
            }

            
        </div>

    );
}


export default Roadmap;



