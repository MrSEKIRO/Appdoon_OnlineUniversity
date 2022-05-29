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

function CreateLessonModal({ id, sensetive, setSensetive }) {

    const [urlpost, setUrlPost] = useState(process.env.REACT_APP_API + "lesson/post/");

    const HandleMessage = (resmess,colormess,id = "result_message_create_lesson") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }
    
    const HandleUpdate = async(event) => {
        event.preventDefault();
        
        
        let imagesrc = "1.jpg";
        const formData = new FormData();
        

        if(event.target.Photo.files.length){
            imagesrc = event.target.Photo.files[0].name;
            formData.append("myFile",event.target.Photo.files[0]);
        }


        formData.append("Title",event.target.Title.value);
        formData.append("Text",event.target.Text.value);
        formData.append("PhotoFileName",imagesrc);
        

        let body = formData;

        const [resmess, colormess] = await useCreate(urlpost,body);
        HandleMessage(resmess,colormess);
    }


    useEffect(()=> {

    },[])


    const handleClick = () =>{
        document.getElementById("PhotoLesson").click();
    }

    const handlePhotoChange = (event) =>{
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#PreviewPhotoLesson')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(event.target.files[0]);
    }

      
    return (
        <div style={{top: "1%"}} dir="rtl" class="modal fade" id={id} role="dialog">
            <div style={{marginBottom:"50px", maxWidth: "550px"}} class="modal-dialog">
            
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">ساخت مقاله</h4>
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
                                                                <form onSubmit={HandleUpdate} id="createformlesson" action="#" class="form-account text-right">

                                                                    <div class="form-account-title">
                                                                        <label for="Title">نام مقاله</label>
                                                                        <input dir='auto' id="TitleLesson" type="text" class="number-email-input" name="Title"/>
                                                                    </div>

                                                                    
                                                                    <div class="form-account-title">
                                                                        <label for="Text">متن</label>
                                                                        <textarea dir='auto' id="TextLesson" class="number-email-input" name="Text"/>
                                                                    </div>

                                                                    <div style={{textAlign:"right", width:"100%" ,marginBottom:"50px"}} class="form-account-title">
                                                                        
                                                                        <label style={{float:"right"}} for="Photo">تصویر مقاله</label>
                                                                        
                                                                        <input dir='auto' id="PhotoLesson" name='Photo' onChange={handlePhotoChange} class="form-control" type="File" hidden="hidden" />
                                                                        
                                                                        <br/>
                                                                        <button type="button" class="btn btn-primary" onClick={handleClick}>آپلود تصویر</button>
                                                                        <img id="PreviewPhotoLesson" class="img-thumbnail" src={process.env.REACT_APP_PHOTOPATH+"lesson/"+"1.jpg"} style={{float:"left" , width:"100px"}}/>
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
                            <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_create_lesson"></p>
                            <button style={{float:"left"}} type="submit" class="btn btn-success" form="createformlesson">ساخت مقاله</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default CreateLessonModal;