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
import useFetch from "../Common/useFetch";

import EditStepModal from "../Modals/Edit/EditStepModal";
import DeleteStepModal from "../Modals/Delete/DeleteStepModal";

import EditChildStepModal from "../Modals/Edit/EditChildStepModal";
import DeleteChildStepModal from "../Modals/Delete/DeleteChildStepModal";

const Roadmap = () => {

    const {id} = useParams();
    
    
    const [sensetive, setSensetive] = useState(false);

    const [url, setUrl] = useState(process.env.REACT_APP_API + 'roadmap/'+id);

    const {data : roadmap} = useFetch(url,sensetive);

    const [urlStep, setUrlStep] = useState(process.env.REACT_APP_API + 'step/');
    const [urlChildStep, setUrlChildStep] = useState(process.env.REACT_APP_API + 'childstep/');
    
    const [idStep, setIdStep] = useState(0);
    const [idChildStep, setIdChildStep] = useState(0);


    
    
    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"Roadmap/");

    const {data : childStep} = useFetch(urlChildStep+idChildStep,sensetive);
    const {data : step} = useFetch(urlStep+idStep,sensetive);

    const clear = () =>{
        document.getElementById("TitleRoadmap").value = null;
        document.getElementById("DescriptionRoadmap").value = null;
        document.getElementById("PhotoRoadmap").value = null;
        document.getElementById("result_message_edit_roadmap").innerHTML = null;
        document.getElementById("result_message_delete_roadmap").innerHTML = null;
        document.getElementById("PreviewPhotoRoadmap").src = photoPath+roadmap.ImageSrc;
        setSensetive(!sensetive);
    }

    
    return(

        <div>
            
            {<EditRoadmapModal id={"editModalRoadmap"} roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteRoadmapModal id={"deleteModalRoadmap"} roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            {<EditStepModal id={"editModalStep"+idStep} step = {step} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteStepModal id={"deleteModalStep"+idStep} step = {step} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            {<ChildStepModal childStep={childStep} setIdChildStep={setIdChildStep}/>}

            {<EditChildStepModal id={"editModalChildStep"+idChildStep} childstep = {childStep} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteChildStepModal id={"deleteModalChildStep"+idChildStep} childstep = {childStep} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            
            
            <div style={{float:"left" , marginTop:"20px", marginLeft:"20px"}}>

                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModalLesson" variant="success" class="btn btn-success" onClick={() => {}}>افزودن قدم</button>
                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModalRoadmap" variant="primary" class="btn btn-primary" onClick={() => {clear();}}>ویرایش</button>
                <button href="#!" data-toggle="modal" data-target="#deleteModalRoadmap" variant="primary" class="btn btn-danger" onClick={() => {clear();}}>حذف</button>
                
            </div>
            {roadmap && roadmap.Id > 0 && (
                
                <div className='timelineBody'>
                    
                   
                    <h1 dir="rtl">رودمپ {roadmap.Title}</h1>
                    <p  dir="rtl" style={{color:"black"}}>{roadmap.Description}</p>
                    <div class="timeline-container">
                        
                        {roadmap.Steps.map((step, idx) => (
                            <Step step={step} key={idx} setIdChildStep={setIdChildStep} setIdStep={setIdStep}/>
                        ))}
                    </div>
                    
                </div>
                )
            }

            {roadmap && roadmap.Id == 0 && (
                <div>
                    .رودمپ خالی است
                </div>)
            }


            
        </div>

    );
}


export default Roadmap;



