import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';

import DeleteLinkModal from "../Modals/Delete/DeleteLinkModal";
import EditLinkModal from "../Modals/Edit/EditLinkModal";

const ListLink = () => {
    
    const [url, setUrl] = useState(process.env.REACT_APP_API + "linker");
    const [sensetive, setSensetive] = useState(false);
    const {data : linkers, error} = useFetch(url,sensetive);


    const[id, setId] = useState(0);
    const {data : link, setData} = useFetch(url+"/"+id,sensetive);

    const HandleId = ((id) => {
        setId(id);
        setSensetive(!sensetive);
    })

    useEffect( ()=>{

    }, [linkers]);

    const clear = () =>{
        document.getElementById("TitleLink").value = null;
        document.getElementById("LinkLink").value = null;
        document.getElementById("result_message_edit_link").innerHTML = null;
        document.getElementById("result_message_delete_link").innerHTML = null;

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
                                            <a href="/TeacherEditRoadmap" class=""><i class=""></i>
                                                ویرایش رودمپ
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="TeacherProfileEdit" class="active"><i class=""></i>
                                                ویرایش اطلاعات      
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-xs-12 pl">

        <div>
            {<EditLinkModal id={"editModalLink"} link = {link} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteLinkModal id={"deleteModalLink"} link = {link} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            <div class="container-main">
                
                <div class="d-block">
                    <div class="main-row">
                        <div class="info-page-faq">
                            <div id="content-bottom">
                                <div class="content-bottom-title">
                                    <h2 class="box-rounded-headline"> <span>ویرایش</span> / <span>حذف</span> </h2>

                                    <div class="transparency-border">
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


                                    <div class="transparency-border activebox">
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
                                    <li class="breadcrumb-item active" aria-current="page">لینک‌ها</li>
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
                                                    <th style={{width:"20%"}} scope="col" class="product-cart-name">استفاده شده در محتوا</th>
                                                    <th style={{width:"20%", paddingLeft:"25px"}} scope="col" class="product-cart-price">نام لینک‌ها</th>
                                                    <th style={{width:"44%"}} scope="col" class="product-cart-price">لینک‌ لینک‌ها</th>
                                                    <th style={{textAlign:"center", width: "6%"} } scope="col" class="product-cart-Total">ویرایش</th>
                                                    <th style={{textAlign:"center", width: "5%"} } scope="col" class="product-cart-Total">حذف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {linkers &&
                                                    linkers.map((data,idx) => (
                                                        <tr>
                                                            <td style={{wordWrap:"break-word" ,width:"5%"}} class="product-cart-price">
                                                                <span>
                                                                    {idx+1}
                                                                </span>
                                                            </td>



                                                            <td style={{wordWrap:"break-word" ,width:"20%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                                <span>
                                                                    {data.ChildStepTitle}
                                                                </span>
                                                            </td>

                                                            <td style={{wordWrap:"break-word" ,width:"20%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                                <span>
                                                                    {data.Title}
                                                                </span>
                                                            </td>

                                                            <td style={{textAlign:"left", wordWrap:"break-word", width:"44%" ,maxWidth:"150px"}} class="product-cart-price">
                                                                <span dir="ltr">
                                                                    {data.Link.length > 70 ? (data.Link.substr(0,70)+"...") : data.Link}
                                                                </span>
                                                            </td>

                                                            <td style={{textAlign:"center" ,width:"6%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#editModalLink" variant="primary" class="btn btn-primary" onClick={() => {HandleId(data.Id); clear();}}>ویرایش</button>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"5%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#deleteModalLink" variant="primary" class="btn btn-danger" onClick={() => {HandleId(data.Id); clear();}}>حذف</button>
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

export default ListLink;