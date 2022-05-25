import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../Modular_Css/RoadmapBox.css";
import "../../Modular_Css/ListRoadmap.css";
import EditRoadmapModal from "../Modals/Edit/EditRoadmapModal";
import DeleteRoadmapModal from "../Modals/Delete/DeleteRoadmapModal";
import $ from "jquery";

const TeacherEditRoadmap = () => {

    const [url, setUrl] = useState(process.env.REACT_APP_API + "roadmap");
    const [sensetive, setSensetive] = useState(false);
    const {data : roadmaps, error} = useFetch(url,sensetive);
    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"Roadmap/");

    

    function stars(num){
        let A = "";
        for(var i = 0; i < 5-num; i++){
            A += '<span class="fa fa-star"></span>';
        }
        for(var i = 0; i < num; i++){
            A += '<span class="fa fa-star checked"></span>';
        }
        return A;
    }


    const[id, setId] = useState(0);
    const {data : roadmap, setData} = useFetch(url+"/"+id,sensetive);

    const HandleId = ((id) => {
        setId(id);
        setSensetive(!sensetive);
    })

    useEffect( ()=>{
        if(roadmaps){
            for(var i = 0; i < roadmaps.length; i++){
                document.getElementById("star"+roadmaps[i].Id).innerHTML = stars(roadmaps[i].Stars);
                let temp = "";
                for(var j = 0; j < roadmaps[i].Categories.length; j++){
                    temp += roadmaps[i].Categories[j].Name;
                    if(j != roadmaps[i].Categories.length-1){
                        temp +=", ";
                    }
                }
                document.getElementById("cat"+roadmaps[i].Id).innerHTML = temp;
            }
        }

    }, [roadmaps]);

    const clear = () =>{
        document.getElementById("Title").value = null;
        document.getElementById("Description").value = null;
        document.getElementById("Photo").value = null;
        document.getElementById("result_message_edit").innerHTML = null;
        document.getElementById("result_message_delete").innerHTML = null;

        document.getElementById("PreviewPhoto").src = process.env.REACT_APP_PHOTOPATH+"roadmap/"+roadmap.ImageSrc;
    }

    return(
        <div class="container-main">
        <div class="d-block">
            <section class="profile-home">
                <div class="col-lg">
                    <div class="post-item-profile order-1 d-block">
                        <div class="col-lg-3 col-md-3 col-xs-12 pr">
                            <div class="sidebar-profile sidebar-navigation">
                                <section class="profile-box">
                                    <header class="profile-box-header-inline">
                                        <div class="profile-avatar user-avatar profile-img">
                                            <img src = "assets/images/man.png"></img>
                                        </div>
                                    </header>
                                </section>
                                <section class="profile-box">
                                    <ul class="profile-account-navs">
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherProfile" class=""><i class="mdi mdi-account-outline"></i>
                                                پروفایل
                                            </a>
                                        </li>
                                        
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherRoadmaps" class=""><i class=""></i>
                                                 رودمپ های من
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/create_roadmap" class=""><i class=""></i>
                                            ساخت رودمپ
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherRoadmaps" class="active"><i class=""></i>
                                                ویرایش رودمپ
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="TeacherProfileEdit" class=""><i class=""></i>
                                                ویرایش اطلاعات      
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-xs-12 pl">
                        <div>
            {<EditRoadmapModal roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteRoadmapModal roadmap = {roadmap} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            <div class="container-main">
                
                <div class="d-block">
                    <div class="main-row">
                        <div class="info-page-faq">
                            <div id="content-bottom">
                                <div class="content-bottom-title">
                                    
                                    
                                    <div class="transparency-border activebox">
                                        <NavLink  class="Liknkk" to="/edit_roadmap">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>رودمپ‌ها</h3>
                                        </NavLink>
                                    </div>


                                    <div class="transparency-border">
                                        <NavLink to="/edit_step">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>قدم‌ها</h3>
                                        </NavLink>
                                    </div>


                                    <div class="transparency-border">
                                        <NavLink to="/edit_child_step">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>محتوا‌ها</h3>
                                        </NavLink>
                                    </div>


                                    <div class="transparency-border">
                                        <NavLink class="Liknkk" to="/edit_lesson">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>درس‌ها</h3>
                                        </NavLink>
                                    </div>


                                    <div class="transparency-border">
                                        <NavLink class="Liknkk" to="/edit_category">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>دسته‌ها</h3>
                                        </NavLink>
                                    </div>


                                    <div class="transparency-border">
                                        <NavLink to="/edit_link">
                                            <div class="transparency"></div>
                                            <img src="assets/images/page-faq/transparency.png" alt="fag"/>
                                            <h3>لینک‌ها</h3>
                                        </NavLink>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                        <div id="breadcrumb">
                            <i class="mdi mdi-home"></i>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page">رودمپ‌ها</li>
                                </ol>
                            </nav>
                        </div>
                        <section class="cart-home">
                            <div class="post-item-cart d-block order-2">
                                
                                <div class="content-page">
                                    <div class="cart-form">
                                        
                                        <table class="cart table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th style={{width:"5%"}} scope="col" class="product-cart-name">شماره</th>
                                                    <th style={{width:"20%"}} scope="col" class="product-cart-name">نام رودمپ‌ها</th>
                                                    <th style={{width:"35%", paddingLeft:"25px"}} scope="col" class="product-cart-price">توضیحات رودمپ‌ها</th>
                                                    <th style={{width:"29%"}} scope="col" class="product-cart-price">دسته‌های رودمپ‌ها</th>
                                                    <th style={{textAlign:"center", width: "6%"} } scope="col" class="product-cart-Total">ویرایش</th>
                                                    <th style={{textAlign:"center", width: "5%"} } scope="col" class="product-cart-Total">حذف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roadmaps &&
                                                    roadmaps.map((data,idx) => (
                                                        <tr>
                                                            <td style={{wordWrap:"break-word" ,width:"5%"}} class="product-cart-price">
                                                                <span>
                                                                    {idx+1}
                                                                </span>
                                                            </td>
                                                            <th scope="row" class="product-cart-name" style={{wordWrap:"break-word" ,width:"20%"}}>
                                                                <div class="product-thumbnail-img">
                                                                    <a href="#!">
                                                                        <img src={photoPath+data.ImageSrc}/>
                                                                    </a>
                                                                    {/*
                                                                    <div class="product-remove">
                                                                        <a href="#" class="remove">
                                                                            <i class="mdi mdi-close"></i>
                                                                        </a>
                                                                    </div>
                                                                    */}
                                                                </div>
                                                                
                                                                <div class="product-title">
                                                                    <a href="#!">
                                                                        {data.Title}
                                                                    </a>
                                                                    
                                                                    <div class="variation">
                                                                        <div class="variant-color">
                                                                            
                                                                            <span class="variant-color-title" id = {`star${data.Id}`}><span className="star" ></span></span>
                                                                        </div>
                                                                        {/*
                                                                        <div class="variant-guarantee">
                                                                            <i class="mdi mdi-check"></i>
                                                                            گارانتی ۱۸ ماهه
                                                                        </div>
                                                                        <div class="seller">
                                                                            <i class="mdi mdi-storefront"></i>
                                                                            فروشنده :
                                                                            <span>کالا مارکت</span>
                                                                        </div>
                                                                        */}
                                                                    </div>
                                                                </div>
                                                                
                                                            </th>

                                                            <td style={{wordWrap:"break-word" ,width:"35%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                            <span>
                                                                {data.Description}
                                                            </span>
                                                            </td>
                                                            <td style={{wordWrap:"break-word" ,width:"29%"}} class="product-cart-price">
                                                                <span id = {`cat${data.Id}`}>
                                                                    
                                                                </span>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"6%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#editModal" variant="primary" class="btn btn-primary" onClick={() => {HandleId(data.Id); clear();}}>ویرایش</button>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"5%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#deleteModal" variant="primary" class="btn btn-danger" onClick={() => {HandleId(data.Id); clear();}}>حذف</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                </div>
                
                
            </div>

            
            {/*
            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <div class="P-loader">
                <div class="P-loader-content">
                    <div class="logo-loader">
                        <img src="assets/images/logo.png" alt="logo">
                    </div>
                    <div class="pic-loader text-center">
                        <img src="assets/images/three-dots.svg" width="50" alt="">
                    </div>
                </div>
            </div>
            */}

            
        </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    </div>
        );

    }
    
    export default TeacherEditRoadmap;