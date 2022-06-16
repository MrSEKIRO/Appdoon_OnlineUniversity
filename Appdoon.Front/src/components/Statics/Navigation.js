import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import Exit from "../Modals/Exit";

const Navigation = () => {
    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    return(
        <div>
            {<Exit id={"myModal"}/>}
            <div class="nav-categories-overlay"></div>
            <div class="overlay-search-box"></div>
            <header class="header-main">
                <div class="container-main">
                    <div class="d-block">
                        <section style={{marginBottom:"0px"}} class="h-main-row">
                            <div class="col-lg-9 col-md-12 col-xs-12 pr">
                                
                                <div class="header-right">
                                    <div class="col-lg-3 pr">
                                        <div class="header-logo row text-right">
                                            <a href="#">
                                                <img src="../assets/images/logo.png" alt="Appdoon" width="200px"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-lg-3 col-md-0 col-xs-12 pl">
                                <div class="header-left">
                                    <div class="header-account text-left">
                                        <div class="d-block">
                                            <div class="account-box">
                                                <div class="nav-account d-block pl">
                                                    <span class="icon-account">
                                                        <img src="../assets/images/man.png" class="avator"/>
                                                    </span>
                                                    {cookies.Appdoon_Auth && <NavLink to="/profile"><span class="title-account">حساب کاربری</span></NavLink>}
                                                    {!cookies.Appdoon_Auth && <NavLink to="/login"><span class="title-account">ورود / ثبت‌نام</span></NavLink>}

                                                    <div class="dropdown-menu">
                                                        <ul class="account-uls mb-0">

                                                            <li class="account-item">
                                                                {cookies.Appdoon_Auth &&
                                                                    <NavLink className="account-link" to="/UserRoadmaps">
                                                                        رودمپ‌های من
                                                                    </NavLink>
                                                                }

                                                            </li>

                                                            <li class="account-item">
                                                                {cookies.Appdoon_Auth &&
                                                                    <NavLink className="account-link" to="/profile">
                                                                        پروفایل
                                                                    </NavLink>
                                                                }

                                                            </li>




                                                            <li class="account-item">
                                                                {!cookies.Appdoon_Auth &&
                                                                    <NavLink className="account-link" to="/register">
                                                                        ثبت نام
                                                                    </NavLink>
                                                                }
                                                            </li>
                                                            <li class="account-item">
                                                                {!cookies.Appdoon_Auth &&
                                                                    <NavLink className="account-link" to="/login">
                                                                        ورود
                                                                    </NavLink>
                                                                }
                                                            </li>
                                                            <li class="account-item">
                                                                {cookies.Appdoon_Auth &&
                                                                    <NavLink data-toggle="modal" data-target="#myModal" className="account-link" to="#!">
                                                                        خروج
                                                                    </NavLink>
                                                                }
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <nav class="header-main-nav">
                            <div class="d-block">
                                <div class="align-items-center">
                                    <ul class="menu-ul mega-menu-level-one">

                                        <li id="nav-menu-item" class="menu-item">
                                            
                                            <NavLink className="current-link-menu" to="/roadmaps">
                                                رودمپ‌ها
                                            </NavLink>

                                        </li>

                                        <li id="nav-menu-item" class="menu-item">
                                            <NavLink className="current-link-menu" to="/lessons">
                                                مقالات
                                            </NavLink>
                                        </li>

                                        <li id="nav-menu-item" class="menu-item">

                                            
                                            <NavLink className="current-link-menu" to="/categories">
                                              دسته‌ها
                                            </NavLink>


                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/*    responsive-megamenu-mobile----------------->*/}
                        <nav class="sidebar">
                            <div class="nav-header">
                                <div class="header-cover"></div>
                                <div class="logo-wrap">
                                    <a class="logo-icon" href="#"><img alt="logo-icon" src="../assets/images/logo.png"
                                            width="40px"/></a>
                                </div>
                            </div>
                            <ul class="nav-categories ul-base">

                                <li><NavLink className="current-link-menu" to="/roadmaps">رودمپ‌ها</NavLink></li>
                                <li><NavLink className="current-link-menu" to="/create_roadmap">ساخت رودمپ</NavLink></li>
                                <li><NavLink className="current-link-menu" to="/lessons">مقالات</NavLink></li>
                                <li><NavLink className="current-link-menu" to="/edit_roadmap">ویرایش رودمپ</NavLink></li>


                            </ul>
                        </nav>
                        <div class="nav-btn nav-slider">
                            <span class="linee1"></span>
                            <span class="linee2"></span>
                            <span class="linee3"></span>
                        </div>
                        <div class="overlay"></div>
                        {/* bottom-menu-joomy -->*/}
                        <div class="bottom-menu-joomy">
                            <ul class="mb-0">
                                <li>
                                    <a href="home-1.html">
                                        <i class="fa fa-home"></i>
                                        صفحه اصلی
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="nav-btn nav-slider">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                        دسته بندی ها
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">
                                        <i class="fa fa-shopping-cart"></i>
                                        سبد خرید
                                        <div class="shopping-bag-item">2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i class="fa fa-search"></i>
                                        جستجو
                                    </a>
                                </li>
                                <li>
                                    <a href="login.html">
                                        <i class="fa fa-user"></i>
                                        حساب کاربری
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/*    responsive-megamenu-mobile----------------->*/}
                    </div>
                </div>
            </header>

        </div>

    );
}

export default Navigation;