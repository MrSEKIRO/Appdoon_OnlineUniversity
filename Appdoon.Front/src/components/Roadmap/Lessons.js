import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';
import RoadmapBox from "./RoadmapBox";
import CreateLessonModal from "../Modals/Create/CreateLessonModal"
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../Pagination";



const Lessons = () =>{
    const [sensetive, setSensetive] = useState(false);

    //User
    const [urlAuth, setUrlAuth] = useState(process.env.REACT_APP_API + "Authentication/InfoFromCookie")
    const {data : userInfo} = useFetch(urlAuth,sensetive);

    //Lessons
    const [urlGet, setUrlGet] = useState(process.env.REACT_APP_API + "lesson/get");
    const [pageSize, setPageSize] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [query_string_lessons, set_query_string_lessons] = useState(`${urlGet}?PageNumber=${pageNumber}&PageSize=${pageSize}`)
    const {data} = useFetch(query_string_lessons,sensetive);
    const [lessons, setCategories] = useState(null);
    const [rowCount, setRowCount] = useState(null);
    const [allPagesNumber, setAllPagesNumber] = useState(0);

    useEffect(()=>{
        setCategories(data.Lessons);
        setRowCount(data.RowCount)
    },[data])
    useEffect(()=>{
        let new_all_pages_number = Math.max(Math.ceil(rowCount/pageSize),1);
        if(new_all_pages_number){
            setAllPagesNumber(new_all_pages_number);
            handlePageNumber(Math.min(pageNumber,new_all_pages_number))
        }
        //alert(allPagesNumber)
    },[pageSize,rowCount])

    //Search Lesson
    const [urlSearch, setUrlSearch] = useState(process.env.REACT_APP_API+'lesson/search');
    const handleSearch = () => {
        if(document.getElementById("search_box_info").value == ""){
            document.getElementById("search_box_info").dir = "rtl";
            setPageNumber(1);
            set_query_string_lessons(`${urlGet}?PageNumber=${1}&PageSize=${pageSize}`);
        }
        else{
            document.getElementById("search_box_info").dir = "auto";
            //Query String
            
            let searched_text = document.getElementById("search_box_info").value;
            setPageNumber(1);
            const query_string_search = `${urlSearch}?SearchedText=${searched_text}&PageNumber=${1}&PageSize=${pageSize}`
            set_query_string_lessons(query_string_search);

        }
    }

    //Pagination Lesson
    const handlePageNumber = (page_number) =>{
        if(document.getElementById("search_box_info").value != ""){
            setPageNumber(page_number);
            let searched_text = document.getElementById("search_box_info").value;
            set_query_string_lessons(`${urlSearch}?SearchedText=${searched_text}&PageNumber=${page_number}&PageSize=${pageSize}`);
        }
        else{
            setPageNumber(page_number);
            set_query_string_lessons(`${urlGet}?PageNumber=${page_number}&PageSize=${pageSize}`);
        }
    }

    const photopath = process.env.REACT_APP_PHOTOPATH + "lesson/"

    const clear = () =>{
        document.getElementById("TitleLesson").value = null;
        document.getElementById("TextLesson").value = null;
        document.getElementById("PhotoLesson").value = null;
        document.getElementById("result_message_create_lesson").innerHTML = null;
        document.getElementById("PreviewPhotoLesson").src = photopath+"1.jpg";
    }

    return(
        <div>
            {<CreateLessonModal id={"createModalLesson"} sensetive = {sensetive} setSensetive = {setSensetive}/>}

            <main class="main-row mb-2 mt-2">
                <div style={{marginTop:"-10px", marginBottom:"60px"}}>
                    <h1>مقالات</h1>
                </div>

                <div style={{marginBottom:"10px", marginTop:"-23px"}}>
                    <div style={{float:"left" , marginTop:"0px", marginLeft:"10px", marginBottom:"10px"}}>
                    {userInfo.Role && (userInfo.Role == "Teacher" || userInfo.Role == "Admin") && <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#createModalLesson" variant="success" class="btn btn-success" onClick={() => {clear();}}>افزودن مقاله</button>}
                    </div>
                    <div style={{width:"25%", marginRight:"20px"}} class="input-group rounded">
                        <input id="search_box_info" onChange={handleSearch} type="search" class="form-control rounded" placeholder="جستجو کنید ..." aria-label="Search" aria-describedby="search-addon" />
                    </div>
                </div>

                <div class="container-main">
                
                    <div class="d-block">
                        <div class="col-lg-9 col-md-8 col-xs-12 pr mt-3">
                            <section class="content-widget">
                                {lessons && lessons.length > 0 && (
                                    <div>
                                        {lessons.map((data, idx) => (
                                            <article style={{display : "flex"}} class="post-item">

                                                <div class="post-thumb">
                                                    <NavLink to={`/lesson/`+data.Id}>
                                                        <img src={photopath+data.TopBannerSrc}
                                                            alt={data.Title}/>
                                                    </NavLink>
                                                </div>
                                                <div class="post-content">
                                                    <div class="title">
                                                        <NavLink to={`/lesson/`+data.Id}>
                                                            <h2 class="title-tag">{data.Title}</h2>
                                                        </NavLink>
                                                    </div>
                                                    <br/>
                                                    <div class="excerpt">{data.Text}</div>
                                                    {/*
                                                    
                                                    <span class="post-date">
                                                        <i class="fa fa-calendar"></i>
                                                        یکشنبه، 14 اردیبهشت 1399
                                                    </span>
                                                    
                                                    */}
                                                </div>

                                            </article>
                                        ))}
                                    </div>
                                    )
                                }
                    
                                {lessons && lessons.length == 0 && (
                                    <div>
                                        
                                    </div>)
                                }

                            </section>
                        </div>
                        <div class="col-lg-3 col-md-4 col-xs-12 pr mt-3 sticky-sidebar">
                            <div class="shortcode-widget-area-sidebar">
                                <section class="widget-posts">
                                    <div class="header-sidebar mb-3">
                                        <h3>جدیدترین مقالات</h3>
                                    </div>
                                    <div class="content-sidebar">
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src="assets/images/blog/fortnite-battle-royale-iphone.jpg"
                                                            alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر کاهش پیدا کرد"/>
                                                    </a>
                                                </div>
                                                <div class="title">
                                                    <a href="#">
                                                        <h2 class="title-tag">تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر
                                                            کاهش پیدا کرد</h2>
                                                    </a>
                                                    <span class="post-date">
                                                        14 اردیبهشت 1399
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src="assets/images/blog/2017 Home Selling Results.jpg"
                                                            alt="رسیدن به بهترین نتیجه در کمترین زمان ممکن!"/> </a>
                                                </div>
                                                <div class="title">
                                                    <a href="#">
                                                        <h2 class="title-tag">رسیدن به بهترین نتیجه در کمترین زمان ممکن!</h2>
                                                    </a>
                                                    <span class="post-date">
                                                        14 اردیبهشت 1399
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src="assets/images/blog/iphone-7-plus-water-damage-repair-.jpg"
                                                            alt="آیفون ۲۰۱۹ از آنتن بهتری بهره خواهد برد"/> </a>
                                                </div>
                                                <div class="title">
                                                    <a href="#">
                                                        <h2 class="title-tag">آیفون ۲۰۱۹ از آنتن بهتری بهره خواهد برد</h2>
                                                    </a>
                                                    <span class="post-date">
                                                        14 اردیبهشت 1399
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src="assets/images/blog/women-calligrapher-in-cozy-home-working.jpg"
                                                            alt="۴ فایده مهم نگهداری از گیاهان در منزل"/> </a>
                                                </div>
                                                <div class="title">
                                                    <a href="#">
                                                        <h2 class="title-tag">۴ فایده مهم نگهداری از گیاهان در منزل</h2>
                                                    </a>
                                                    <span class="post-date">
                                                        14 اردیبهشت 1399
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src="assets/images/blog/inRqLEr.jpg"
                                                            alt="منتقدان می‌گویند «نمای دور» جان تازه‌ای به کمدی رمانتیک بخشیده"/>
                                                    </a>
                                                </div>
                                                <div class="title">
                                                    <a href="#">
                                                        <h2 class="title-tag">منتقدان می‌گویند «نمای دور» جان تازه‌ای به کمدی
                                                            رمانتیک بخشیده</h2>
                                                    </a>
                                                    <span class="post-date">
                                                        14 اردیبهشت 1399
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <Pagination handlePageNumber={handlePageNumber} pageNumber={pageNumber} allPagesNumber={allPagesNumber}/>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Lessons;












    


























