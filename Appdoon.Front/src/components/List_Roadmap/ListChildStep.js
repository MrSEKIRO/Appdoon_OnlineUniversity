import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';

import DeleteChildStepModal from "../Modals/Delete/DeleteChildStepModal";
import EditChildStepModal from "../Modals/Edit/EditChildStepModal";

const ListChildStep = () => {
    
    const [url, setUrl] = useState(process.env.REACT_APP_API + "childstep");
    const [sensetive, setSensetive] = useState(false);
    const {data : childsteps, error} = useFetch(url,sensetive);


    const[id, setId] = useState(0);
    const {data : childstep, setData} = useFetch(url+"/"+id,sensetive);

    const HandleId = ((id) => {
        setId(id);
        setSensetive(!sensetive);
    })

    useEffect( ()=>{


    }, [childsteps]);

    const clear = () =>{
        document.getElementById("TitleChildStep").value = null;
        document.getElementById("DescriptionChildStep").value = null;
        document.getElementById("LinkChildStep").value = null;
        document.getElementById("result_message_edit_childstep").innerHTML = null;
        document.getElementById("result_message_delete_childstep").innerHTML = null;

        for(let i = 0; i < document.getElementsByName("LinkTitle").length; i++){
            document.getElementsByName("LinkTitle")[i].value = null;
            document.getElementsByName("LinkURL")[i].value = null;
        }
    }

    return(
        <div>
            {<EditChildStepModal id={"editModalChildStep"} childstep = {childstep} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteChildStepModal id={"deleteModalChildStep"} childstep = {childstep} sensetive = {sensetive} setSensetive = {setSensetive}/>}
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


                                    <div class="transparency-border activebox">
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
                                    <li class="breadcrumb-item active" aria-current="page">محتوا‌ها</li>
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
                                                    <th style={{width:"15%"}} scope="col" class="product-cart-name">استفاده شده در قدم</th>
                                                    <th style={{width:"15%"}} scope="col" class="product-cart-name">نام محتوا‌ها</th>
                                                    <th style={{width:"34%", paddingLeft:"25px"}} scope="col" class="product-cart-price">توضیحات محتوا‌ها</th>
                                                    <th style={{width:"20%"}} scope="col" class="product-cart-price">لینک‌ محتوا‌ها</th>
                                                    <th style={{textAlign:"center", width: "6%"} } scope="col" class="product-cart-Total">ویرایش</th>
                                                    <th style={{textAlign:"center", width: "5%"} } scope="col" class="product-cart-Total">حذف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {childsteps &&
                                                    childsteps.map((data,idx) => (
                                                        <tr>
                                                            <td style={{wordWrap:"break-word" ,width:"5%"}} class="product-cart-price">
                                                                <span>
                                                                    {idx+1}
                                                                </span>
                                                            </td>

                                                            <td style={{wordWrap:"break-word" ,width:"15%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                            <span>
                                                                {data.StepTitle}
                                                            </span>
                                                            </td>


                                                            <td style={{wordWrap:"break-word" ,width:"15%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                            <span>
                                                                {data.Title}
                                                            </span>
                                                            </td>

                                                            <td style={{wordWrap:"break-word" ,width:"34%"}} class="product-cart-price">
                                                                <span>
                                                                    {data.Description}
                                                                </span>
                                                            </td>

                                                            <td style={{textAlign:"left", wordWrap:"break-word" ,width:"20%", maxWidth:"150px"}} class="product-cart-price">
                                                                <span dir="ltr">
                                                                    {data.Link.length > 45 ? (data.Link.substr(0,45)+"...") : data.Link}
                                                                </span>
                                                            </td>

                                                            <td style={{textAlign:"center" ,width:"6%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#editModalChildStep" variant="primary" class="btn btn-primary" onClick={() => {HandleId(data.Id); clear();}}>ویرایش</button>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"5%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#deleteModalChildStep" variant="primary" class="btn btn-danger" onClick={() => {HandleId(data.Id); clear();}}>حذف</button>
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

export default ListChildStep;