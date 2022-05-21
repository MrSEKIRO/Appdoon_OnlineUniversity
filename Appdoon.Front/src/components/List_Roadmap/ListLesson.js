import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';

import DeleteLessonModal from "../Modals/Delete/DeleteLessonModal";
import EditLessonModal from "../Modals/Edit/EditLessonModal";

const ListLesson = () => {
    
    const [url, setUrl] = useState(process.env.REACT_APP_API + "lesson");
    const [sensetive, setSensetive] = useState(false);
    const {data : lessons, error} = useFetch(url,sensetive);
    const [photoPath, setPhotoPath] = useState(process.env.REACT_APP_PHOTOPATH+"lesson/");


    const[id, setId] = useState(0);
    const {data : lesson, setData} = useFetch(url+"/"+id,sensetive);

    const HandleId = ((id) => {
        setId(id);
        setSensetive(!sensetive);
    })

    useEffect( ()=>{

    }, [lessons]);

    const clear = () =>{
        document.getElementById("Title").value = null;
        document.getElementById("Text").value = null;
        document.getElementById("Photo").value = null;
        document.getElementById("result_message_edit").innerHTML = null;
        document.getElementById("result_message_delete").innerHTML = null;

        document.getElementById("PreviewPhoto").src = process.env.REACT_APP_PHOTOPATH+"lesson/"+lesson.TopBannerSrc;
    }

    return(
        <div>
            {<EditLessonModal lesson = {lesson} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteLessonModal lesson = {lesson} sensetive = {sensetive} setSensetive = {setSensetive}/>}
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


                                    <div class="transparency-border activebox">
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
                                    <li class="breadcrumb-item active" aria-current="page">درس‌ها</li>
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
                                                    <th style={{width:"20%"}} scope="col" class="product-cart-name">نام درس‌ها</th>
                                                    <th style={{width:"64%", paddingLeft:"25px"}} scope="col" class="product-cart-price">متن درس‌ها</th>
                                                    <th style={{textAlign:"center", width: "6%"} } scope="col" class="product-cart-Total">ویرایش</th>
                                                    <th style={{textAlign:"center", width: "5%"} } scope="col" class="product-cart-Total">حذف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lessons &&
                                                    lessons.map((data,idx) => (
                                                        <tr>
                                                            <td style={{wordWrap:"break-word" ,width:"5%"}} class="product-cart-price">
                                                                <span>
                                                                    {idx+1}
                                                                </span>
                                                            </td>
                                                            <th scope="row" class="product-cart-name" style={{wordWrap:"break-word" ,width:"20%"}}>
                                                                <div class="product-thumbnail-img">
                                                                    <a href="#!">
                                                                        <img src={photoPath+data.TopBannerSrc}/>
                                                                    </a>
                                                                </div>
                                                                
                                                                <div class="product-title">
                                                                    <a href="#!">
                                                                        {data.Title}
                                                                    </a>
                                                                    
                                                                    <div class="variation">
                                                                        <div class="variant-color">
                                                                        
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </th>

                                                            <td style={{wordWrap:"break-word" ,width:"64%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                            <span>
                                                                {data.Text}
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
    );
}

export default ListLesson;