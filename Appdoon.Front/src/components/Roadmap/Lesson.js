import React,{Component} from "react";
import "../../Modular_Css/RoadmapStyle.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../Common/useFetch";

import DeleteLessonModal from "../Modals/Delete/DeleteLessonModal";
import EditLessonModal from "../Modals/Edit/EditLessonModal";


const Lesson = () => {



    const {id} = useParams();
    const [sensetive, setSensetive] = useState(false);
    const [url, setUrl] = useState(process.env.REACT_APP_API + 'lesson/get/'+id);
    const {data : lesson} = useFetch(url,sensetive);
    const photopath = process.env.REACT_APP_PHOTOPATH + "lesson/";

    const clear = () =>{
        document.getElementById("TitleLesson").value = lesson.Title;
        document.getElementById("TextLesson").value = lesson.Text;
        document.getElementById("PhotoLesson").value = null;
        document.getElementById("result_message_edit_lesson").innerHTML = null;
        document.getElementById("result_message_delete_lesson").innerHTML = null;

        document.getElementById("PreviewPhotoLesson").src = photopath+lesson.TopBannerSrc;
    }

    return(
        <div>
            {<EditLessonModal id={"editModalLesson"} lesson = {lesson} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            {<DeleteLessonModal id={"deleteModalLesson"} lesson = {lesson} sensetive = {sensetive} setSensetive = {setSensetive}/>}
            <main class="main-row mb-2 mt-2 d-block">
                <div class="container-main">
                    <div class="d-block">
                        <div class="col-lg-9 col-md-8 col-xs-12 pr mt-3">

                            {lesson && lesson.Id > 0 &&
                                <section class="blog-home">
                                    
                                    <article class="post-item">
                                        <div style={{float:"left" , marginTop:"-5px", marginLeft:"5px", marginBottom:"10px"}}>

                                            <button style={{marginLeft:"10px"}} href="#!" data-toggle="modal" data-target="#editModalLesson" variant="primary" class="btn btn-primary" onClick={() => {clear();}}><i class="far fa-edit"></i></button>
                                            <button href="#!" data-toggle="modal" data-target="#deleteModalLesson" variant="primary" class="btn btn-danger" onClick={() => {clear();}}><i class="far fa-trash-alt"></i></button>

                                        </div>
                                        <header class="entry-header mb-3">
                                            <div class="post-meta date">
                                                <i class="mdi mdi-calendar-month"></i>1399/02/14
                                            </div>
                                            <div class="post-meta author">
                                                <i class="mdi mdi-account-circle-outline"></i>
                                                ارسال شده توسط <a href="#"> مدیریت </a>
                                            </div>
                                            <div class="post-meta category">
                                                <i class="mdi mdi-folder"></i>
                                                <a href="#">دسته‌بندی نشده</a> ، <a href="#">بازی آنلاین</a> ، <a href="#">معرفی
                                                    بازی</a>
                                            </div>
                                            <div class="post-meta Visit">
                                                <i class="mdi mdi-eye"></i>
                                                996 بازدید
                                            </div>
                                        </header>
                                        <div class="post-thumbnail">
                                            <img src={photopath+lesson.TopBannerSrc} alt={lesson.Title}/>
                                        </div>
                                        <div class="title">
                                            <a href="#">
                                                <h1 class="title-tag">{lesson.Title}</h1>
                                            </a>
                                        </div>
                                        <div class="content-blog">
                                            <p>
                                                {lesson.Text}
                                            </p>
                                        </div>
                                    </article>
                                    <div class="post-comments">
                                        <div class="comments-area">
                                            <h2 class="comments-title">
                                                <i class="fa fa-comment-o"></i>
                                                نظرات کاربران
                                                <p class="count-comment">1 نظر</p>
                                            </h2>
                                            <ol class="comment-list">
                                                <li class="comment-even">
                                                    <div class="comment-body">
                                                        <header class="comment-meta">
                                                            <div class="comment-author">
                                                                <img src={photopath+"1.jpg"} class="avator"/>
                                                                توسط حسن شجاعی در تاریخ 14 اردیبهشت ۱۳۹۹
                                                            </div>
                                                        </header>
                                                        <p>لوریم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
                                                            گرافیک گفته می‌شود. طراح گرافیک از این متن به‌عنوان عنصری از ترکیب‌بندی
                                                            برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح
                                                            سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و
                                                            اندازهٔ قلم و ظاهرِ متن باشد</p>
                                                        <div class="reply text-left">
                                                            <a href="#" class="comment-reply-link">پاسخ دادن</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div class="form-comment">
                                                <div class="col-md-12 col-sm-12">
                                                    <div class="form-ui">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <br/>
                                                                <br/>
                                                                <div class="form-row-title mb-2"> نام شما (اجباری)</div>
                                                                <div class="form-row">
                                                                    <input dir='auto' class="input-ui pr-2" type="text"
                                                                        placeholder=" نام خود را بنویسید"/>
                                                                </div>
                                                                <br/>
                                                                <div class="form-row-title mb-2">عنوان نظر شما (اجباری)</div>
                                                                <div class="form-row">
                                                                    <input dir='auto' class="input-ui pr-2" type="text"
                                                                        placeholder="عنوان نظر خود را بنویسید"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 mt-5">
                                                                <div class="form-row-title mb-2">متن نظر شما (اجباری)</div>
                                                                <div class="form-row">
                                                                    <textarea dir='auto' class="input-ui pr-2 pt-2" rows="5"
                                                                        placeholder="متن خود را بنویسید"
                                                                        style={{height:"120px"}}></textarea>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                            <br/>
                                                            <br/>
                                                            <div class="col-12 mt-5 px-0">
                                                                <button class="btn comment-submit-button">
                                                                    ثبت نظر
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            }
                            {lesson && lesson.Id == 0 &&
                                <h1>این مقاله موجود نمی‌باشد!</h1>
                            }
                        </div>
                        <div class="col-lg-3 col-md-4 col-xs-12 pr mt-3 sticky-sidebar">
                            <div class="shortcode-widget-area-sidebar">
                                <section class="widget-posts">
                                    <div class="header-sidebar mb-3">
                                        <h3>مقالات مرتبط</h3>
                                    </div>

                                    <div class="content-sidebar">
                                        <div class="item">
                                            <div class="item-inner">
                                                <div class="item-thumb">
                                                    <a href="#" class="img-holder d-block">
                                                        <img src={photopath+"1.jpg"}
                                                            alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر
                                                            کاهش پیدا کرد"/>
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
                                                        <img src={photopath+"1.jpg"}
                                                            alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر
                                                            کاهش پیدا کرد"/>
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
                                                        <img src={photopath+"1.jpg"}
                                                            alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر
                                                            کاهش پیدا کرد"/>
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
                                                        <img src={photopath+"1.jpg"}
                                                            alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر
                                                            کاهش پیدا کرد"/>
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

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

export default Lesson;