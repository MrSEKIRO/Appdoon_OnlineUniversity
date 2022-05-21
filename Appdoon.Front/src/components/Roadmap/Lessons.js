import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import useFetch from '../Common/useFetch';
import RoadmapBox from "./RoadmapBox";

//componentDidMount() {
//    document.title = "رودمپ‌ها"; 
//}


const Lessons = () =>{
    const {data : lessons, isLogin, error} = useFetch(process.env.REACT_APP_API+'lesson');
    //alert(roadmaps.Data.length);

    const photopath = process.env.REACT_APP_PHOTOPATH + "lesson/"

    return(
        <div>
            <main class="main-row mb-2 mt-2">
                <div class="container-main">
                    <div class="d-block">
                        <div class="col-lg-9 col-md-8 col-xs-12 pr mt-3">
                            <section class="content-widget">
                                {lessons.length > 0 && (
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
                                                    <span class="post-date">
                                                        <i class="fa fa-calendar"></i>
                                                        یکشنبه، 14 اردیبهشت 1399
                                                    </span>
                                                </div>

                                            </article>
                                        ))}
                                    </div>
                                    )
                                }
                    
                                {lessons.length == 0 && (
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
                        {/*
                        <div class="pagination-product pr-3 pl-3 pr">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link active" href="#">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">...</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">8</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        */}
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Lessons;












    


























