import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import useDelete from '../../Common/useDelete';
import useUpdate from '../../Common/useUpdate';
import $ from 'jquery';
import Select from 'react-select';

import "../../../Modular_Css/EditRoadmapModal.css";

import chroma from 'chroma-js';

import { StylesConfig } from 'react-select';
import useCreate from "../../Common/useCreate";

function CreateChildStepModal({ id, inputFields, setInputFields,stepId, sensetive, setSensetive }) {

    const [urlpost, setUrlPost] = useState(process.env.REACT_APP_API + "childstep/");

    const HandleMessage = (resmess,colormess,id = "result_message_create_childstep") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }
    
    const HandleUpdate = async(event) => {
        event.preventDefault();
        
        let headers = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }

        
        
        let body = JSON.stringify({
            Title:event.target.Title.value,
            Description:event.target.Description.value,
            Link:event.target.Link.value,
            Linkers:inputFields,
            StepId:stepId
        });

        const [resmess, colormess] = await useCreate(urlpost,body,headers);
        HandleMessage(resmess,colormess);
    }

    

    const handleFormChange = (index, event) => {
        //alert(event.target.name)
        let linkdata = [...inputFields];
        linkdata[index][event.target.name] = event.target.value;
        setInputFields(linkdata);
    }

    const addFields = () => {
        let newfield = { LinkTitle: '', LinkURL: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = () => {
        if(inputFields.length > 0){
            let linkdata = [...inputFields];
            linkdata.splice(inputFields.length-1, 1)
            setInputFields(linkdata)
        }
    }
    

      
    return (
        <div style={{top: "1%"}} dir="rtl" class="modal fade" id={id} role="dialog">
            <div style={{marginBottom:"50px", maxWidth: "550px"}} class="modal-dialog">
            
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">ساخت محتوا</h4>
                    </div>
                    <div style={{overflowY: "scroll", maxHeight:"500px"}} class="modal-body">
                        <div>
                            <div style={{marginTop:"-40px"}} class="container">
                                <div class="row">
                                    <div  class="col-lg">
                                        <section  class="page-account-box">
                                            <div>
                                                <div  class="ds-userlogin">
                                                    <div  class="account-box">
                                                        <div  class="Login-to-account mt-4">
                                                            <div style={{marginTop:"-20px", marginBottom:"40px"}} class="account-box-content">
                                                                <form onSubmit={HandleUpdate} id="createformchildstep" action="#" class="form-account text-right">

                                                                    <div class="form-account-title">
                                                                        <label for="Title">نام محتوا</label>
                                                                        <input dir='auto' id="CreateTitleChildStep" type="text" class="number-email-input" name="Title"/>
                                                                    </div>

                                                                    
                                                                    <div class="form-account-title">
                                                                        <label for="Description">توضیحات</label>
                                                                        <textarea dir='auto' id="CreateDescriptionChildStep" class="number-email-input" name="Description"/>
                                                                    </div>


                                                                    <div class="form-account-title">
                                                                        <label for="Link">لینک</label>
                                                                        <input dir='auto' id="CreateLinkChildStep" class="number-email-input" name="Link"/>
                                                                    </div>


                                                                    <div class="form-account-title">
                                                                    <p style={{fontSize:"15px"}}>لینک‌های محتوا</p>
                                                                    </div>
                                                                    
                                                                    <div style={{display:"flex", textAlign:"center"}}>
                                                                        <div style={{flex:"50%"}} class="form-account-title">
                                                                            <label for="LinkTitle">عنوان لینک</label>
                                                                        </div>

                                                                        <div style={{flex:"50%"}} class="form-account-title">
                                                                            <label for="LinkURL">URL لینک</label>
                                                                        </div>
                                                                    </div>

                                                                    {inputFields.map((input, index) => {
                                                                    return (
                                                                        <div style={{display:"flex", textAlign:"center"}}  key={index}>
                                                                            <div style={{flex:"50%"}} class="form-account-title">
                                                                                
                                                                                <input dir='auto' style={{width:"95%"}}
                                                                                class="number-email-input"
                                                                                name='LinkTitle'
                                                                                
                                                                                onChange={event => handleFormChange(index, event)}/>
                                                                            </div>

                                                                            <div style={{flex:"50%"}} class="form-account-title">
                                                                                
                                                                                <input dir='auto' style={{width:"95%"}}
                                                                                class="number-email-input"
                                                                                name='LinkURL'
                                                                                

                                                                                onChange={event => handleFormChange(index, event)}/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                    })}
                                                                    <div class="form-row-account">
                                                                        <div>
                                                                            <a style={{width:"25%" , marginLeft:"10px" ,color:"black"}} class="btn btn-primary btn-login" onClick={addFields}>لینک بیشتر</a>
                                                                            <a style={{width:"25%" ,color:"black"}} class="btn btn-primary btn-login" onClick={() => removeFields()}>حذف لینک</a>
                                                                        </div>
                                                                    </div>
                                                                    


                                                                </form>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <div style={{width:"100%"}}>
                            <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_create_childstep"></p>
                            <button style={{float:"left"}} type="submit" class="btn btn-success" form="createformchildstep">ساخت محتوا</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    );
}

export default CreateChildStepModal;