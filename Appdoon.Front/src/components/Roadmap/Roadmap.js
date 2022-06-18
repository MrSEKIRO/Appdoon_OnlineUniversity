import Step from "./Step";
import React,{Component} from "react";
import "../../Modular_Css/RoadmapStyle.css";
import ReactDOM from 'react-dom';
import { Navigate, NavLink, useParams } from "react-router-dom";
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

import CreateRoadmapModal from "../Modals/Create/CreateRoadmapModal";
import CreateStepModal from "../Modals/Create/CreateStepModal";
import CreateChildStepModal from "../Modals/Create/CreateChildStepModal";

const Roadmap = () => {

    const {id} = useParams();
    
    const navigate = useNavigate();
    
    const [sensetive, setSensetive] = useState(false);

    //User
    const [urlAuth, setUrlAuth] = useState(process.env.REACT_APP_API + "Authentication/InfoFromCookie")
    const {data : userInfo} = useFetch(urlAuth,sensetive);

    const [urlHasRoadmap, setUrlHasRoadmap] = useState(process.env.REACT_APP_API + "Roadmap/HasUserRoadmap")
    const [query_string_has_roadmap, set_query_string_has_roadmap] = useState(`${urlHasRoadmap}?RoadmapId=${-1}`)
    const [HasRoadmap, setHasRoadmap] = useState(false);

    const [urlRegisterRoadmap, setUrlRegisterRoadmap] = useState(process.env.REACT_APP_API + "Roadmap/RegisterRoadmap")
    const [query_string_register_roadmap, set_query_string_register_roadmap] = useState(`${urlRegisterRoadmap}?RoadmapId=${-1}`)
    
    const [inProgressStepId, setInProgressStepId] = useState(null);


    const [urlPreview, setUrlPreview] = useState(process.env.REACT_APP_API + 'roadmap/Get/'+id);
    const [urlUserRoadmap, setUrlUserRoadmap] = useState(process.env.REACT_APP_API + 'roadmap/UserRoadmap/'+id);

    const {data : roadmap} = useFetch(HasRoadmap ? urlUserRoadmap : urlPreview, sensetive);


    useEffect (() => {
        if(roadmap && userInfo){
            set_query_string_has_roadmap(`${urlHasRoadmap}?RoadmapId=${roadmap.Id}`);
            set_query_string_register_roadmap(`${urlRegisterRoadmap}?RoadmapId=${roadmap.Id}`);

            fetch(`${urlHasRoadmap}?RoadmapId=${roadmap.Id}`, {credentials:"include"})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch!');
                }
                return res.json();
            })
            .then(data => {
                setHasRoadmap(data.Data);
                if(data.Data){
                    if(roadmap.Steps[0].StepProgresses[0].IsDone == 0){
                        setInProgressStepId(0);
                    }
                    else{
                        for(var i = 0; i < roadmap.Steps.length - 1; i++){
                            if(roadmap.Steps[i].StepProgresses[0].IsDone == 1 && roadmap.Steps[i+1].StepProgresses[0].IsDone == 0){
                                setInProgressStepId(i+1);
                            }
                        }
                    }

                }
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    console.log(err.message);
                }
            })



        }
    },[roadmap,userInfo,sensetive])

    const [urlStep, setUrlStep] = useState(process.env.REACT_APP_API + 'step/');
    const [urlChildStep, setUrlChildStep] = useState(process.env.REACT_APP_API + 'childstep/');
    
    const [idStep, setIdStep] = useState(0);
    const [idChildStep, setIdChildStep] = useState(0);

    
    
    
    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"Roadmap/");

    const {data : childStep} = useFetch(urlChildStep+idChildStep,sensetive);
    const {data : step} = useFetch(urlStep+idStep,sensetive);

    const clear = () =>{
        document.getElementById("TitleRoadmap").value = roadmap.Title;
        document.getElementById("DescriptionRoadmap").value = roadmap.Description;
        document.getElementById("PhotoRoadmap").value = null;
        document.getElementById("result_message_edit_roadmap").innerHTML = null;
        document.getElementById("result_message_delete_roadmap").innerHTML = null;
        document.getElementById("PreviewPhotoRoadmap").src = photoPath+roadmap.ImageSrc;
        setSensetive(!sensetive);
    }

    const clearStep = () =>{
        document.getElementById("CreateTitleStep").value = null;
        document.getElementById("CreateDescriptionStep").value = null;
        document.getElementById("CreateLinkStep").value = null;
        document.getElementById("result_message_create_step").innerHTML = null;
        setSensetive(!sensetive);
    }

    const [inputFields, setInputFields] = useState([]);
    const [editInputFields, setEditInputFields] = useState([]);


    const HandleEnroll = async() => {
        if(!userInfo.Role){
            navigate("/register");
        }
        else if(!HasRoadmap && (userInfo.Role != "Admin" && userInfo.Id != roadmap.CreatorId)){
            
            await fetch(query_string_register_roadmap, {method:"POST", credentials:"include"})
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

            window.location.reload();

        }
    }

    const CreateStatus = (stepIsDone,idx) =>{
        if(stepIsDone){
            return 1;
        }
        else{
            if(inProgressStepId == idx){
                return 0;
            }
            else{
                return -1;
            }
        }
    }

    
    return(

        <div>











            {<ChildStepModal inputFields={editInputFields} setInputFields={setEditInputFields} childStep={childStep} setIdChildStep={setIdChildStep} userInfo={userInfo} CreatorId = {roadmap.CreatorId}/>}
            
            {<EditRoadmapModal id={"editModalRoadmap"} roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteRoadmapModal id={"deleteModalRoadmap"} roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            {<EditStepModal id={"editModalStep"+idStep} step = {step} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteStepModal id={"deleteModalStep"+idStep} step = {step} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            {<EditChildStepModal id={"editModalChildStep"+idChildStep} inputFields={editInputFields} setInputFields={setEditInputFields} childstep = {childStep} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteChildStepModal id={"deleteModalChildStep"+idChildStep} childstep = {childStep} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            {<CreateStepModal id={"createModalStep"} roadmapId={roadmap.Id} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<CreateChildStepModal id={"createModalChildStep"+idStep} inputFields = {inputFields} setInputFields={setInputFields} stepId={idStep} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {userInfo.Role && (userInfo.Id == roadmap.CreatorId || userInfo.Role == "Admin") &&
            <div style={{float:"left" , marginTop:"20px", marginLeft:"20px"}}>

                
                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#createModalStep" variant="success" class="btn btn-success" onClick={() => {clearStep();}}><i class="far fa-plus-square"></i></button>
                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModalRoadmap" variant="primary" class="btn btn-primary" onClick={() => {clear();}}><i class="far fa-edit"></i></button>
                <button href="#!" data-toggle="modal" data-target="#deleteModalRoadmap" variant="primary" class="btn btn-danger" onClick={() => {clear();}}><i class="far fa-trash-alt"></i></button>
                
            </div>
            }
            {roadmap && roadmap.Id > 0 && (
                
                <div className='timelineBody'>
                    

                    <h1 dir="rtl">رودمپ {roadmap.Title}</h1>
                    <p  dir="rtl">{roadmap.Description}</p>
                    {!userInfo.Role && <p>.برای استفاده از رودمپ‌ و امکانات آن ابتدا در سایت <NavLink to="/register">ثبت‌نام</NavLink> کنید</p>}
                    
                    {userInfo.Role && !HasRoadmap && (userInfo.Role != "Admin" && userInfo.Id != roadmap.CreatorId) && <p>.برای شروع یادگیری این رودمپ همین حالا روی <button onClick={() => HandleEnroll()} type="button" class="btn btn-primary" style={{paddingBottom:"13px", backgroundColor:"#651fff", borderRadius:"50%"}}>شروع</button> کلیک کن</p>}

                    <span className={`BigCircle ${HasRoadmap && "Active"}`} style={{marginBottom:"-40px"}}>
                        <p style={{marginTop:"12px"}}><button onClick={() => HandleEnroll()} type="button" style={{backgroundColor:"rgb(255, 255, 255, 0)"}}>شروع</button></p>
                    </span>
                    
                    <div class="timeline-container">
                        
                        {(inProgressStepId !== null || !HasRoadmap) && roadmap.Steps.map((step, idx) => (
                            <Step setInputFields={setInputFields} step={step} key={idx} setIdChildStep={setIdChildStep} setIdStep={setIdStep} userInfo={userInfo} CreatorId = {roadmap.CreatorId} HasRoadmap={HasRoadmap} Status={HasRoadmap && CreateStatus(step.StepProgresses[0].IsDone,idx)} sensetive={sensetive} setSensetive ={setSensetive}/>
                        ))}
                    </div>

                    <span className="BigCircle" style={{marginTop:"-40px"}}>
                        <p style={{marginTop:"12px"}}>پایان</p>
                    </span>
                    
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



