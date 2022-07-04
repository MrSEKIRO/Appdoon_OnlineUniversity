import React,{Component} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';

import DeleteCategoryModal from "../Modals/Delete/DeleteCategoryModal";
import EditCategoryModal from "../Modals/Edit/EditCategoryModal";
import CreateCategoryModal from "../Modals/Create/CreateCategoryModal";
import Pagination from "../Pagination";

import '../../Modular_Css/SearchBox.css'

const ListCategory = () => {

    const [sensetive, setSensetive] = useState(false);
    const [urlGet, setUrlGet] = useState(process.env.REACT_APP_API + "category/get");
    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [query_string_categories, set_query_string_categories] = useState(`${urlGet}?PageNumber=${pageNumber}&PageSize=${pageSize}`)
    const {data} = useFetch(query_string_categories,sensetive);
    const [categories, setCategories] = useState(null);
    const [rowCount, setRowCount] = useState(null);
    const [allPagesNumber, setAllPagesNumber] = useState(0)
    const [urlSearch, setUrlSearch] = useState(process.env.REACT_APP_API+'category/search');

    const handleSearch = () => {
        if(document.getElementById("search_box_info").value == ""){
            document.getElementById("search_box_info").dir = "rtl";
            setPageNumber(1);
            set_query_string_categories(`${urlGet}?PageNumber=${1}&PageSize=${pageSize}`);
        }
        else{
            document.getElementById("search_box_info").dir = "auto";
            //Query String
            
            let searched_text = document.getElementById("search_box_info").value;
            setPageNumber(1);
            const query_string_search = `${urlSearch}?SearchedText=${searched_text}&PageNumber=${1}&PageSize=${pageSize}`
            set_query_string_categories(query_string_search);

        }
    }

    useEffect(()=>{
        let new_all_pages_number = Math.max(Math.ceil(rowCount/pageSize),1);
        if(new_all_pages_number){
            setAllPagesNumber(new_all_pages_number);
            handlePageNumber(Math.min(pageNumber,new_all_pages_number))
        }
        //alert(allPagesNumber)
    },[pageSize,rowCount])

    useEffect(()=>{
        setCategories(data.Categories);
        setRowCount(data.RowCount)
    },[data])

    const handlePageNumber = (page_number) =>{
        if(document.getElementById("search_box_info").value != ""){
            setPageNumber(page_number);
            let searched_text = document.getElementById("search_box_info").value;
            set_query_string_categories(`${urlSearch}?SearchedText=${searched_text}&PageNumber=${page_number}&PageSize=${pageSize}`);
        }
        else{
            setPageNumber(page_number);
            set_query_string_categories(`${urlGet}?PageNumber=${page_number}&PageSize=${pageSize}`);
        }
    }


    const[id, setId] = useState(0);
    const {data : category} = useFetch(urlGet+"/"+id,sensetive);

    const HandleId = ((id) => {
        setId(id);
        setSensetive(!sensetive);
    })

    const clear = () =>{

        document.getElementById("result_message_edit_category").innerHTML = null;
        document.getElementById("result_message_delete_category").innerHTML = null;
    }
    const clearCreate = () =>{
        document.getElementById("CreateNameCategory").value = null;
        document.getElementById("CreateLinkCategory").value = null;
        document.getElementById("result_message_create_category").innerHTML = null;
    }

    return(
        <div>
                {<EditCategoryModal id={"editModalCategory"} category = {category} sensetive = {sensetive} setSensetive = {setSensetive}/>}
                {<DeleteCategoryModal id={"deleteModalCategory"} category = {category} sensetive = {sensetive} setSensetive = {setSensetive}/>}
                {<CreateCategoryModal id={"createModalCategory"} sensetive = {sensetive} setSensetive = {setSensetive}/>}
                <div class="d-block">

                    <div class="container-main">

                    <div class="main-row">
                        <div style={{marginTop:"0px", marginBottom:"50px"}}>
                            <h1>دسته‌بندی‌ها</h1>
                        </div>
                        

                        <div style={{marginTop:"-15px", marginBottom:"20px"}}>
                            <div style={{float:"left" , marginTop:"0px", marginLeft:"10px", marginBottom:"10px"}}>
                                <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#createModalCategory" variant="success" class="btn btn-success" onClick={() => {clearCreate();}}>افزودن دسته</button>
                            </div>

                            <div style={{width:"25%", marginRight:"20px"}} class="input-group rounded">
                                <input id="search_box_info" onChange={handleSearch} type="search" class="form-control rounded" placeholder="جستجو کنید ..." aria-label="Search" aria-describedby="search-addon" />
                            </div>
                            
                        </div>


                        <div style={{marginTop:"-20px",marginBottom:"-20px"}} id="breadcrumb">
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
                                        
                                        <table class="cart table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th style={{width:"5%"}} scope="col" class="product-cart-name">شماره</th>
                                                    <th style={{width:"14%"}} scope="col" class="product-cart-name">نام دسته‌ها</th>
                                                    <th style={{width:"64%", paddingLeft:"25px"}} scope="col" class="product-cart-price">لینک‌ دسته‌ها</th>
                                                    <th style={{textAlign:"center", width: "6%"} } scope="col" class="product-cart-Total">ویرایش</th>
                                                    <th style={{textAlign:"center", width: "5%"} } scope="col" class="product-cart-Total">حذف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories &&
                                                    categories.map((data,idx) => (
                                                        <tr>
                                                            <td style={{wordWrap:"break-word" ,width:"5%"}} class="product-cart-price">
                                                                <span>
                                                                    {idx+1}
                                                                </span>
                                                            </td>

                                                            <td style={{wordWrap:"break-word" ,width:"14%" ,paddingLeft:"25px"}} class="product-cart-price">
                                                            <span>
                                                                {data.Name}
                                                            </span>

                                                            </td>
                                                            <td style={{textAlign:"left", wordWrap:"break-word", width:"70%" ,maxWidth:"150px"}} class="product-cart-price">
                                                                <span dir="ltr">
                                                                    {data.Link.length > 100 ? (data.Link.substr(0,100)+"...") : data.Link}
                                                                </span>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"6%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#editModalCategory" variant="primary" class="btn btn-primary" onClick={() => {HandleId(data.Id); clear();}}><i class="far fa-edit"></i></button>
                                                            </td>
                                                            <td style={{textAlign:"center" ,width:"5%"}}  class="product-cart-quantity">
                                                                <button href="#!" data-toggle="modal" data-target="#deleteModalCategory" variant="primary" class="btn btn-danger" onClick={() => {HandleId(data.Id); clear();}}><i class="far fa-trash-alt"></i></button>
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
                        <Pagination handlePageNumber={handlePageNumber} pageNumber={pageNumber} allPagesNumber={allPagesNumber}/>
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