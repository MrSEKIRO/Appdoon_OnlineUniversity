import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const ListCategory = () => {


    const[categories, setCategories] = useState([]);
    const url = process.env.REACT_APP_API + "category";
    const [error, setError] = useState(null);


    useEffect(() =>{
        
        fetch(url,{
            
            method : "Get",
            headers : {"Content-Type" : "application/json"}
            
        }).then(res => {
            
            if(!res.ok){
                throw Error('could not fetch!');
            }
            return res.json();
        })
        .then(data => {
            setCategories(data.Data);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
            }
        })
    },[url]);

    return(
        <div>
            <div class="container-main">
                <div class="d-block">
                    <div class="main-row">
                        <div id="breadcrumb">
                            <i class="mdi mdi-home"></i>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page">دسته‌ها</li>
                                </ol>
                            </nav>
                        </div>
                        <section class="cart-home">
                            <div class="post-item-cart d-block order-2">
                                <div class="content-page">
                                    <div class="cart-form">
                                        <table style={{tableLayout:"fixed"}} class="cart table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th style={{width:"20%"}} scope="col" class="product-cart-name">نام دسته</th>
                                                    <th style={{width:"70%"}} scope="col" class="product-cart-price">لینک دسته</th>
                                                    <th style={{textAlign:"left", width: "10%"} } scope="col" class="product-cart-Total">حذف/ویرایش</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories &&
                                                    categories.map((data,idx) => (
                                                        <tr>
                                                            {/*
                                                            <th scope="row" class="product-cart-name">
                                                                <div class="product-thumbnail-img">
                                                                    <a href="#">
                                                                        <img src="assets/images/slider-product/zenbook.jpg"/>
                                                                    </a>
                                                                    <div class="product-remove">
                                                                        <a href="#" class="remove">
                                                                            <i class="mdi mdi-close"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="product-title">
                                                                    <a href="#">
                                                                        لپ تاپ 13 اینچی ایسوس مدل ZenBook S13 UX392FN - A
                                                                    </a>
                                                                    
                                                                    <div class="variation">
                                                                        <div class="variant-color">
                                                                            <span class="variant-color-title">سفید</span>
                                                                            <div class="variant-shape"></div>
                                                                        </div>
                                                                        <div class="variant-guarantee">
                                                                            <i class="mdi mdi-check"></i>
                                                                            گارانتی ۱۸ ماهه
                                                                        </div>
                                                                        <div class="seller">
                                                                            <i class="mdi mdi-storefront"></i>
                                                                            فروشنده :
                                                                            <span>کالا مارکت</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </th>
                                                            */}
                                                            <td style={{wordWrap:"break-word"}} class="product-cart-price">
                                                            <span>
                                                                {data.Name}
                                                            </span>
                                                            </td>
                                                            <td style={{wordWrap:"break-word"}} class="product-cart-price">
                                                                <span>
                                                                    {data.Link}
                                                                </span>
                                                            </td>
                                                            <td style={{textAlign:"left"}}  class="product-cart-quantity">
                                                                <NavLink to = {`/edit_category/${data.Id}`}><button variant="primary" class="btn btn-primary btn-login">مشاهده</button></NavLink>
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

export default ListCategory;