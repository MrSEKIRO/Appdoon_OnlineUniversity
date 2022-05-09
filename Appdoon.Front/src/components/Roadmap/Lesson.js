import React,{Component} from "react";
import "../../Modular_Css/RoadmapStyle.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";



const Lesson = () => {



    const {id} = useParams();
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const url = process.env.REACT_APP_API + 'RoadMaps/IndividualRoadMap';

    useEffect(() => {

    
    

        fetch(url,{
            
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify({
                RoadMapId:id
            })
            
        }).then(res => {
            
            //console.log(res);
            
            if(!res.ok){
                
                throw Error('could not fetch!');
            }
            
            return res.json();
        })
        .then(data => {
            
            //alert(data.Data.length);
            //console.log(data);
            //alert(data.Data.Id);
            setData(data.Data);

            setError(null);
            //alert(data.Data.Steps[0].ChildSteps.length);
            
        }).then(() =>{
            
            //setIsPending(false);
            //console.log("New Blog added");
            //history.push(`/timeline/${id}`);
            
        })
        .catch(err => {
            
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
            }
        })
    }, [url]);





    return(
        <div>
            <main class="main-row mb-2 mt-2 d-block">
                <div class="container-main">
                    <div class="d-block">
                        <div class="col-lg-9 col-md-8 col-xs-12 pr mt-3">
                            <section class="blog-home">
                                <article class="post-item">
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
                                        <img src={process.env.REACT_APP_PHOTOPATH+data.ImageSrc} alt={data.Description}/>
                                    </div>
                                    <div class="title">
                                        <a href="#">
                                            <h1 class="title-tag">{data.Title}</h1>
                                        </a>
                                    </div>
                                    <div class="content-blog">
                                        <p>
                                            {data.Description}
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
                                                            <img src={process.env.REACT_APP_PHOTOPATH+"1.jpg"} class="avator"/>
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
                                                                <input class="input-ui pr-2" type="text"
                                                                    placeholder=" نام خود را بنویسید"/>
                                                            </div>
                                                            <br/>
                                                            <div class="form-row-title mb-2">عنوان نظر شما (اجباری)</div>
                                                            <div class="form-row">
                                                                <input class="input-ui pr-2" type="text"
                                                                    placeholder="عنوان نظر خود را بنویسید"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mt-5">
                                                            <div class="form-row-title mb-2">متن نظر شما (اجباری)</div>
                                                            <div class="form-row">
                                                                <textarea class="input-ui pr-2 pt-2" rows="5"
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
                                                        <img src={process.env.REACT_APP_PHOTOPATH+"1.jpg"}
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
                                                        <img src={process.env.REACT_APP_PHOTOPATH+"1.jpg"}
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
                                                        <img src={process.env.REACT_APP_PHOTOPATH+"1.jpg"}
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
                                                        <img src={process.env.REACT_APP_PHOTOPATH+"1.jpg"}
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