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

function EditStepModal({ id, step, sensetive, setSensetive }) {

    const [urlput, setUrlPost] = useState(process.env.REACT_APP_API + "step/");

    const HandleMessage = (resmess,colormess,id = "result_message_edit_step") => {
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

        let temptitle = "";
        let tempdescription = "";
        let templink = "";

        if(event.target.Title.value == ""){
            temptitle = step.Title
        }
        else{
            temptitle = event.target.Title.value;
        }

        if(event.target.Description.value == ""){
            tempdescription = step.Description
        }
        else{
            tempdescription = event.target.Description.value;
        }

        if(event.target.Link.value == ""){
            templink = step.Link
        }
        else{
            templink = event.target.Link.value;
        }
        
        let body = JSON.stringify({
            Title:temptitle,
            Description:tempdescription,
            Link:templink,
        });

        const [resmess, colormess] = await useUpdate(urlput+step.Id,body,headers);
        HandleMessage(resmess,colormess);
    }

    useEffect(()=> {

    },[step])


      
    return (
        <div style={{top: "1%"}} dir="rtl" class="modal fade" id={id} role="dialog">
            <div style={{marginBottom:"50px", maxWidth: "550px"}} class="modal-dialog">
            
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">ویرایش قدم : {step.Title}</h4>
                    </div>
                    <div style={{overflowY: "scroll", maxHeight:"500px"}} class="modal-body">
                        <div>
                            <div style={{marginTop:"-110px"}} class="container">
                                <div class="row">
                                    <div  class="col-lg">
                                        <section  class="page-account-box">
                                            <div>
                                                <div  class="ds-userlogin">
                                                    <div  class="account-box">
                                                        <div  class="Login-to-account mt-4">
                                                            <div style={{marginTop:"-20px", marginBottom:"40px"}} class="account-box-content">
                                                                <form onSubmit={HandleUpdate} id="editformstep" action="#" class="form-account text-right">

                                                                    <div class="form-account-title">
                                                                        <label for="Title">نام قدم</label>
                                                                        <input dir='auto' id="TitleStep" placeholder={step.Title} type="text" class="number-email-input" name="Title"/>
                                                                    </div>

                                                                    
                                                                    <div class="form-account-title">
                                                                        <label for="Description">توضیحات</label>
                                                                        <textarea dir='auto' id="DescriptionStep" placeholder={step.Description} class="number-email-input" name="Description"/>
                                                                    </div>


                                                                    <div class="form-account-title">
                                                                        <label for="Link">لینک</label>
                                                                        <input dir='auto' id="LinkStep" placeholder={step.Link} class="number-email-input" name="Link"/>
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
                            <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_edit_step"></p>
                            <button style={{float:"left"}} type="submit" class="btn btn-primary" form="editformstep">ویرایش قدم</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default EditStepModal;