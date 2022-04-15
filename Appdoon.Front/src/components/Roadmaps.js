import React,{Component} from "react";

export class Roadmaps extends Component{


    componentDidMount() {
        document.title = "رودمپ‌ها"; 
    }

    render(){
        return(
          <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">جستجو</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="header-search text-right">
                                <div class="header-search-box">
                                    <form action="#" class="form-search">
                                        <input type="search" class="header-search-input" name="search-input"
                                            placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"/>
                                        <div class="action-btns">
                                            <button class="btn btn-search" type="submit">
                                                <img src="assets/images/search.png" alt="search"/>
                                            </button>
                                            <div class="search-filter">
                                                <div class="form-ui">
                                                    <div class="custom-select-ui">
                                                        <select class="right">
                                                            <option>همه دسته ها</option>
                                                            <option>کالای دیجیتال</option>
                                                            <option>آرایشی بهداشتی</option>
                                                            <option>ابزاری اداری</option>
                                                            <option>مد پوشاک</option>
                                                            <option>خانه آشپز خانه</option>
                                                            <option>لوازم تحریر و هنر</option>
                                                            <option>کودک و نوزاد</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="search-result">
                                        <ul class="search-result-list mb-0">
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    کالای دیجیتال
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    آرایشی و بهداشتی
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    گوشی موبایل
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    تبلت
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    لپ تاپ
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="mdi mdi-clock-outline"></i>
                                                    دوربین
                                                    <button class="btn btn-light btn-continue-search" type="submit">
                                                        <i class="fa fa-angle-left"></i>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="localSearchSimple"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="nav-categories-overlay"></div>
            <div class="overlay-search-box"></div>



            <main class="main-row mb-2 mt-2">
                <div class="container-main">
                    <div class="d-block">
                        <section class="content-widget">





                            <div class="col-12 col-md-4 col-lg-4 col-xl-5 items-1 pr">



                                <article class="blog-item">
                                    <figure class="figure">



                                        
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/fortnite-battle-royale-iphone.jpg"
                                                alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر کاهش پیدا کرد"/>
                                        </div>



                                        <div class="post-title">


                                            <a href="#" class="d-block">
                                                <h4>تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر کاهش پیدا کرد</h4>
                                            </a>


                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>



                                    </figure>
                                </article>




                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/fortnite-battle-royale-money-revenue-earnings-2018-how-much.jpg"
                                                alt="تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر کاهش پیدا کرد"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>تعداد بازی‌کننده‌های فورتنایت، به خاطر آپدیت اخیر کاهش پیدا کرد</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>




                                
                            </div>









                            <div class="col-12 col-md-4 col-lg-4 col-xl-4 items-2 pr">
                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/2017 Home Selling Results.jpg"
                                                alt="رسیدن به بهترین نتیجه در کمترین زمان ممکن!"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>رسیدن به بهترین نتیجه در کمترین زمان ممکن!</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>
                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/iphone-7-plus-water-damage-repair-.jpg"
                                                alt="آیفون ۲۰۱۹ از آنتن بهتری بهره خواهد برد"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>آیفون ۲۰۱۹ از آنتن بهتری بهره خواهد برد</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>
                            </div>
















                            <div class="col-12 col-md-4 col-lg-4 col-xl-3 items-3 pr">
                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/women-calligrapher-in-cozy-home-working.jpg"
                                                alt="۴ فایده مهم نگهداری از گیاهان در منزل"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>۴ فایده مهم نگهداری از گیاهان در منزل</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>
                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/inRqLEr.jpg"
                                                alt="منتقدان می‌گویند «نمای دور» جان تازه‌ای به کمدی رمانتیک بخشیده"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>منتقدان می‌گویند «نمای دور» جان تازه‌ای به کمدی رمانتیک بخشیده</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>
                                <article class="blog-item">
                                    <figure class="figure">
                                        <div class="post-thumbnail">
                                            <img src="assets/images/blog/shutterstock.jpg"
                                                alt="سفید کننده‌های دندان می‌توانند کلاژن دندان را از بین ببرند!"/>
                                        </div>

                                        <div class="post-title">
                                            <a href="#" class="d-block">
                                                <h4>سفید کننده‌های دندان می‌توانند کلاژن دندان را از بین ببرند!</h4>
                                            </a>
                                            <span class="post-date">
                                                <i class="fa fa-calendar"></i>
                                                یکشنبه، 14 اردیبهشت 1399
                                            </span>
                                        </div>
                                    </figure>
                                </article>
                            </div>










                        </section>

                    </div>
                </div>
            </main>




            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>



            
            {/*<div class="P-loader">
                <div class="P-loader-content">
                    <div class="logo-loader">
                        <img src="assets/images/logo.png" alt="logo"/>
                    </div>
                    <div class="pic-loader text-center">
                        <img src="assets/images/three-dots.svg" width="50" alt=""/>
                    </div>
                </div>
            </div>
            */}


          </div>
        );
    }
}