import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';
import "../../Modular_Css/RoadmapBox.css";
import "../../Modular_Css/ListRoadmap.css";


const ListRoadmap = () => {
    const [url, setUrl] = useState(process.env.REACT_APP_API + "roadmap");
    const [sensetive, setSensetive] = useState(false);
    const {data : roadmaps, error} = useFetch(url,sensetive);

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

    return(
        <div>
            <div class="container-main">
                <div class="d-block">
                    <div class="main-row">
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
                                                                        <img src={process.env.REACT_APP_PHOTOPATH+data.ImageSrc}/>
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
                                                                <NavLink to = {`/edit_roadmap/${data.Id}`}><button variant="primary" class="btn btn-primary">ویرایش</button></NavLink>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"5%"}}  class="product-cart-quantity">
                                                                <NavLink to = {`/edit_roadmap/${data.Id}`}><button variant="primary" class="btn btn-danger">حذف</button></NavLink>
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

export default ListRoadmap;