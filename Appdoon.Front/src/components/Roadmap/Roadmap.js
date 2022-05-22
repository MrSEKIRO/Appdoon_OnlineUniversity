import Step from "./Step";
import React,{Component} from "react";
import "../../Modular_Css/RoadmapStyle.css";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import ChildStepModal from '../Modals/ChildStepModal';
import { useState } from "react";
import EditRoadmapModal from "../Modals/Edit/EditRoadmapModal";
import DeleteRoadmapModal from "../Modals/Delete/DeleteRoadmapModal";

const Roadmap = () => {

    const {id} = useParams();
    
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true)
    const url = process.env.REACT_APP_API + 'roadmap/'+id;
    const [sensetive, setSensetive] = useState(false);
    
    const[childStep, setChildStep] = useState(0);



    useEffect(() => {

        fetch(url,{
            
            method : "GET",
            headers : {"Content-Type" : "application/json"},
            
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
            //alert(data.Data.Steps[0].ChildSteps.length);
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
    }, [url,sensetive]);


    const clear = () =>{
        document.getElementById("Title").value = null;
        document.getElementById("Description").value = null;
        document.getElementById("Photo").value = null;
        document.getElementById("result_message_edit").innerHTML = null;
        document.getElementById("result_message_delete").innerHTML = null;
        document.getElementById("PreviewPhoto").src = process.env.REACT_APP_PHOTOPATH+"roadmap/"+data.ImageSrc;
    }
    
    return(

        <div>
            {<EditRoadmapModal roadmap = {data} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteRoadmapModal roadmap = {data} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<ChildStepModal childStep={childStep}/>}
            <div style={{float:"left" , marginTop:"20px", marginLeft:"20px"}}>

                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModal" variant="primary" class="btn btn-primary" onClick={() => {clear();}}>ویرایش</button>
                <button href="#!" data-toggle="modal" data-target="#deleteModal" variant="primary" class="btn btn-danger" onClick={() => {clear();}}>حذف</button>
            </div>
            {data && data.Id > 0 && (
                
                <div className='timelineBody'>
                    
                   
                    <h1 dir="rtl">رودمپ {data.Title}</h1>
                    <p  dir="rtl" style={{color:"black"}}>{data.Description}</p>
                    <div class="timeline-container">
                        
                        {data.Steps.map((step, idx) => (
                            <Step data={step} key={idx} setChildStep={setChildStep}/>
                        ))}
                    </div>
                    
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



