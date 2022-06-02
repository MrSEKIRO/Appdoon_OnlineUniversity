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

function EditRoadmapModal({ id, roadmap, sensetive, setSensetive }) {


    //Categories
    const [urlCategories, setUrlCategories] = useState(process.env.REACT_APP_API + "category/get");
    const [pageSizeCategories, setPageSize] = useState(9999);
    const [pageNumberCategories, setPageNumber] = useState(1);
    const [query_string_categories, set_query_string_categories] = useState(`${urlCategories}?page_number=${pageNumberCategories}&page_size=${pageSizeCategories}`)
    const {data} = useFetch(query_string_categories,sensetive);
    const [categories, setCategories] = useState(data.Categories);
    const [rowCount, setRowCount] = useState(data.RowCount);
    useEffect(()=>{
        setCategories(data.Categories);
        setRowCount(data.RowCount)
    },[data])


    

    const [urlput, setUrlPost] = useState(process.env.REACT_APP_API + "roadmap/put/");

    const [boxPhotoPath, setBoxPhotoPath] = useState("");

    const HandleMessage = (resmess,colormess,id = "result_message_edit_roadmap") => {
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
        formData.append("Description",event.target.Description.value);
        formData.append("PhotoFileName",imagesrc);

        
        
        let i = 0;
        for (var option of selectedOptions)
        {
            i++;
            formData.append("CategoriesId"+i,option.value);
        }
        

        let body = formData;

        const [resmess, colormess] = await useUpdate(urlput+roadmap.Id,body);
        HandleMessage(resmess,colormess);
    }

    const [options, setOptions] = useState([]);

    const [selectedOptions,setSelectedOptions] = useState();

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    useEffect(()=> {
        if(roadmap.Categories && categories){
            const tempOptions = [];
            for(var i = 0; i < categories.length; i++){
                tempOptions.push({value: categories[i].Name, label:categories[i].Name});
            }
            const tempSelectedOptions = [];
            for(var i = 0; i < roadmap.Categories.length; i++){
                tempSelectedOptions.push({value: roadmap.Categories[i].Name, label:roadmap.Categories[i].Name});
            }
            setOptions(tempOptions);
            setSelectedOptions(tempSelectedOptions);
        }
    },[roadmap,categories,sensetive])


    const handleClick = () =>{
        document.getElementById("PhotoRoadmap").click();
    }

    const handlePhotoChange = (event) =>{
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#PreviewPhotoRoadmap')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    const customStyleForTestsList = {
        menuList:(provided) => ({
            ...provided,
            maxHeight:"200px",
            
        }),
    };

    const findPlaceHolderDirection = (text) => {
        if(!text){
            return "rtl";
        }
        if(text.length == 0){
            return "rtl";
        }
        else{
            if(text.charCodeAt(0) >= 1000){
                return "rtl";
            }
            else{
                return "ltr";
            }
        }
    }
      
    return (
        <div style={{top: "1%"}} dir="rtl" class="modal fade" id={id} role="dialog">
            <div style={{marginBottom:"50px", maxWidth: "550px"}} class="modal-dialog">
            
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">ویرایش رودمپ : {roadmap.Title}</h4>
                    </div>
                    <div style={{overflowY: "scroll", height:"500px"}} class="modal-body">
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
                                                                <form onSubmit={HandleUpdate} id="editformroadmap" action="#" class="form-account text-right">

                                                                    <div class="form-account-title">
                                                                        <label for="Title">نام رودمپ</label>
                                                                        <input dir='auto' id="TitleRoadmap" type="text" class="number-email-input" name="Title"/>
                                                                    </div>

                                                                    
                                                                    <div  class="form-account-title">
                                                                        <label for="Description">توضیحات</label>
                                                                        <textarea dir='auto' id="DescriptionRoadmap" class="number-email-input" name="Description"/>
                                                                    </div>

                                                                    <div style={{textAlign:"right", width:"100%" ,marginBottom:"50px"}} class="form-account-title">
                                                                        
                                                                        <label style={{float:"right"}} for="Photo">تصویر رودمپ</label>
                                                                        
                                                                        <input dir='auto' id="PhotoRoadmap" name='Photo' onChange={handlePhotoChange} class="form-control" type="File" hidden="hidden" />
                                                                        
                                                                        <br/>
                                                                        <button type="button" class="btn btn-primary" onClick={handleClick}>آپلود تصویر</button>
                                                                        <img id="PreviewPhotoRoadmap" class="img-thumbnail" src={process.env.REACT_APP_PHOTOPATH+"roadmap/"+roadmap.ImageSrc} style={{float:"left" , width:"100px"}}/>
                                                                    </div>

                                                                    <div style={{marginBottom:"0px"}} class="form-account-title">
                                                                        <label for="Categories">دسته‌بندی‌ها</label>


                                                                        {categories && (
                                                                            <Select 
                                                                                className="reactselect"
                                                                                menuPlacement="top"
                                                                                placeholder="دسته‌ها را انتخاب کنید ..."
                                                                                isMulti={true}
                                                                                value={selectedOptions}
                                                                                onChange={handleChange}
                                                                                options={options}
                                                                                styles={customStyleForTestsList}
                                                                            />


                                                                            )
                                                                        }
                                                                        
                                                                        {roadmap && 
                                                                            (
                                                                                <div></div>
                                                                            )
                                                                        }

                                                                        
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
                            <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_edit_roadmap"></p>
                            <button style={{float:"left"}} type="submit" class="btn btn-primary" form="editformroadmap">ویرایش رودمپ</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default EditRoadmapModal;