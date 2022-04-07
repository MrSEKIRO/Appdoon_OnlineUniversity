import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';

export class Navigation extends Component{

    render(){
          return(
            <div>

                {/*
                <Navbar bg="dark" expand="lg">
                  <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                                Home
                            </NavLink>

                            <NavLink className="d-inline p-2 bg-dark text-white" to="/register">
                                Register
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                */}
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
                <header class="header-main">
                    <div class="container-main">
                        <div class="d-block">
                            <section class="h-main-row">
                                <div class="col-lg-9 col-md-12 col-xs-12 pr">
                                    <div class="header-right">
                                        <div class="col-lg-3 pr">
                                            <div class="header-logo row text-right">
                                                <a href="#">

                                                    <img src="../assets/images/logo.png" alt="دیجی اسمارت"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 pr">
                                            <div class="header-search row text-right">
                                                <div class="header-search-box">
                                                    <form action="#" class="form-search">
                                                        <input type="search" class="header-search-input" name="search-input"
                                                            placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"/>
                                                        <div class="action-btns">
                                                            <button class="btn btn-search" type="submit">
                                                                <img src="../assets/images/search.png" alt="search"/>
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
                                <div class="col-lg-3 col-md-0 col-xs-12 pl">
                                    <div class="header-left">
                                        <div class="header-account text-left">
                                            <div class="d-block">
                                                <div class="account-box">
                                                    <div class="nav-account d-block pl">
                                                        <span class="icon-account">
                                                            <img src="../assets/images/man.png" class="avator"/>
                                                        </span>
                                                        <span class="title-account">حساب کاربری</span>
                                                        <div class="dropdown-menu">
                                                            <ul class="account-uls mb-0">
                                                                <li class="account-item">
                                                                    <a href="#" class="account-link">پنل کاربری</a>
                                                                </li>
                                                                <li class="account-item">
                                                                    <a href="#" class="account-link">سفارشات من</a>
                                                                </li>
                                                                <li class="account-item">
                                                                    <a href="#" class="account-link">تنظیمات</a>
                                                                </li>
                                                                <li class="account-item">
                                                                    <a href="#" class="account-link">خروج</a>
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
                                                <NavLink className="current-link-menu" to="/">
                                                    صفحه اصلی
                                                </NavLink>
                                            </li>

                                            <li id="nav-menu-item" class="menu-item">
                                                <NavLink className="current-link-menu" to="/register">
                                                    ثبت نام
                                                </NavLink>
                                            </li>

                                            {/*

                                            <li id="nav-menu-item" class="menu-item nav-overlay">
                                                <a href="#" class="current-link-menu">
                                                    کالای دیجیتال
                                                </a>
                                                <ul class="sub-menu is-mega-menu mega-menu-level-two">
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            موبایل
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اپل
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سامسونگ
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    نوکیا
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ایسوس
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    هواوی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    الجی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اچ تی سی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سونی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            تبلت و کتابخوان
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اپل
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سامسونگ
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    نوکیا
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ایسوس
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ایسر
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    الجی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اچ تی سی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            کامپیوتر و تجهیزات جانبی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    هارد دیسک
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ماوس
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کیبورد
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    نمایشگر
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    پردازنده
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    مادربرد
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کارت گرافیک
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            دوربین
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    دوربین عکاسی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    دوربین فیلم برداری
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تلسکوپ
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    میکروسکوپ و ذره بین
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    لوازم جانبی عکاسی و فیلم برداری
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="bg-image">
                                                        <img src="../assets/images/menu-main/digital.png" alt=""/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item nav-overlay" data-id="190">
                                                <a href="#" class="current-link-menu">
                                                    آرایشی و بهداشتی
                                                </a>
                                                <ul class="sub-menu is-mega-menu mega-menu-level-two">
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم آرایشی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش چشم و ابرو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش لب
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش صورت
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تجهیزات جانبی آرایش
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سنگ پا و زیبایی ناخن
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    مواد آرایش مو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کرم و مراقبت پوست
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    شامپو و مراقبت مو
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم شخصی برقی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ماشین اصلاح صورت
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ماشین اصلاح سر
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سشوار
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اصلاح بدن آقایان
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اصلاح موی گوش، بینی و ابرو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    برس پاک سازی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اتو مو و حالت دهنده
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم بهداشتی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کرم و مراقبت پوست
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    شامپو و مراقبت مو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    بهداشت دهان و دندان
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    بهداشت و مراقبت بدن
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ضد تعریق
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            ابزار سلامت و طبی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    مچ بند و ساعت هوشمند
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ترازو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کالای خواب و استراحت طبی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تست قند خون
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تب سنج
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    فشارسنج
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ابزار مراقبت پا
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    نمایشگر ضربان قلب
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="bg-image">
                                                        <img src="../assets/images/menu-main/cosmetic.png" alt=""/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item">
                                                <a href="#" class="current-link-menu">
                                                    ابزار و اداری
                                                </a>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item">
                                                <a href="#" class="current-link-menu">
                                                    مد و پوشاک
                                                </a>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item nav-overlay">
                                                <a href="#" class="current-link-menu">
                                                    خانه و آشپزخانه
                                                </a>
                                                <ul class="sub-menu is-mega-menu mega-menu-level-two">
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم آرایشی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش چشم و ابرو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش لب
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    آرایش صورت
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تجهیزات جانبی آرایش
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سنگ پا و زیبایی ناخن
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    مواد آرایش مو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کرم و مراقبت پوست
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    شامپو و مراقبت مو
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم شخصی برقی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ماشین اصلاح صورت
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ماشین اصلاح سر
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    سشوار
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اصلاح بدن آقایان
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اصلاح موی گوش، بینی و ابرو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    برس پاک سازی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    اتو مو و حالت دهنده
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم بهداشتی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کرم و مراقبت پوست
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    شامپو و مراقبت مو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    بهداشت دهان و دندان
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    بهداشت و مراقبت بدن
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ضد تعریق
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu">
                                                        <a href="#" class="mega-menu-link">
                                                            ابزار سلامت و طبی
                                                        </a>
                                                        <ul class="sub-menu mega-menu-level-three">
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    مچ بند و ساعت هوشمند
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ترازو
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    کالای خواب و استراحت طبی
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تست قند خون
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    تب سنج
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    فشارسنج
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    ابزار مراقبت پا
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item-three">
                                                                <a href="#">
                                                                    نمایشگر ضربان قلب
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="bg-image">
                                                        <img src="../assets/images/menu-main/kitchen.png" alt=""/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item nav-overlay">
                                                <a href="#" class="current-link-menu">
                                                    لوازم تحریر و هنر
                                                </a>
                                                <ul class="sub-menu is-mega-menu-small">
                                                    <li class="menu-mega-item menu-item-type-mega-menu item-small">
                                                        <a href="#" class="mega-menu-link">
                                                            کتاب و مجله
                                                        </a>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu item-small">
                                                        <a href="#" class="mega-menu-link">
                                                            کتاب صوتی
                                                        </a>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu item-small">
                                                        <a href="#" class="mega-menu-link">
                                                            محتوای آموزشی
                                                        </a>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu item-small">
                                                        <a href="#" class="mega-menu-link">
                                                            لوازم تحریر
                                                            <i class="fa fa-angle-left"></i>
                                                        </a>
                                                        <ul class="sub-menu is-mega-menu-small-three">
                                                            <li class="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                                <a href="#">
                                                                    چراغ مطالعه
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                                <a href="#">
                                                                    نوشت افزار
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                                <a href="#">
                                                                    دفتر و کاغذ
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                                <a href="#">
                                                                    میز تحریر
                                                                </a>
                                                            </li>
                                                            <li class="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                                <a href="#">
                                                                    البوم عکس
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-mega-item menu-item-type-mega-menu item-small">
                                                        <a href="#" class="mega-menu-link">
                                                            نرم افزار
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="nav-menu-item" class="menu-item">
                                                <a href="#" class="current-link-menu">
                                                    کودک و نوزاد
                                                </a>
                                            </li>

                                            */}


                                            <li class="divider-space-card d-block">
                                                <div class="header-cart-basket">
                                                    <a href="#" class="cart-basket-box">
                                                        <span class="icon-cart">
                                                            <i class="mdi mdi-shopping"></i>
                                                        </span>
                                                        <span class="title-cart">سبد خرید</span>
                                                        <span class="price-cart">25,000,000
                                                            <span>تومان</span>
                                                        </span>
                                                        <span class="count-cart">2</span>
                                                    </a>
                                                    <div class="widget-shopping-cart">
                                                        <div class="widget-shopping-cart-content">
                                                            <div class="wrapper">
                                                                <div class="scrollbar" id="style-1">
                                                                    <div class="force-overflow">
                                                                        <ul class="product-list-widget">
                                                                            <li class="mini-cart-item">
                                                                                <div class="mini-cart-item-content">
                                                                                    <a href="#" class="mini-cart-item-close">
                                                                                        <i class="mdi mdi-close"></i>
                                                                                    </a>
                                                                                    <a href="#"
                                                                                        class="mini-cart-item-image d-block">
                                                                                        <img
                                                                                            src="../assets/images/menu-main/img-card.jpg"/>
                                                                                    </a>
                                                                                    <span class="product-name-card">لپ تاپ چووی
                                                                                        الترابوک 14
                                                                                        اینچ پرو</span>
                                                                                    <div class="variation">
                                                                                        <span class="variation-n">فروشنده :
                                                                                        </span>
                                                                                        <p class="mb-0">کالامارکت </p>
                                                                                    </div>
                                                                                    <div
                                                                                        class="header-basket-list-item-color-badge">
                                                                                        رنگ:
                                                                                        {/*<span style="background: #000"></span>*/}
                                                                                    </div>
                                                                                    <div class="quantity">
                                                                                        <span class="quantity-Price-amount">
                                                                                            15,000,000
                                                                                            <span>تومان</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li class="mini-cart-item">
                                                                                <div class="mini-cart-item-content">
                                                                                    <a href="#" class="mini-cart-item-close">
                                                                                        <i class="mdi mdi-close"></i>
                                                                                    </a>
                                                                                    <a href="#"
                                                                                        class="mini-cart-item-image d-block">
                                                                                        <img
                                                                                            src="../assets/images/menu-main/img-card-2.jpg"/>
                                                                                    </a>
                                                                                    <span class="product-name-card">هواوای میت
                                                                                        بوک X پرو
                                                                                        13.9 اینچ</span>
                                                                                    <div class="variation">
                                                                                        <span class="variation-n">فروشنده :
                                                                                        </span>
                                                                                        <p class="mb-0">کالامارکت </p>
                                                                                    </div>
                                                                                    <div
                                                                                        class="header-basket-list-item-color-badge">
                                                                                        رنگ:
                                                                                        {/*<span style="background: #ccc"></span>*/}
                                                                                    </div>
                                                                                    <div class="quantity">
                                                                                        <span class="quantity-Price-amount">
                                                                                            10,000,000
                                                                                            <span>تومان</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mini-card-total">
                                                                <strong>قیمت کل : </strong>
                                                                <span class="price-total"> 25,000,000
                                                                    <span>تومان</span>
                                                                </span>
                                                            </div>
                                                            <div class="mini-card-button">
                                                                <a href="cart.html" class="view-card">مشاهده سبد خرید</a>
                                                                <a href="checkout.html" class="card-checkout">تسویه حساب</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                width="40"/></a>
                                    </div>
                                </div>
                                <ul class="nav-categories ul-base">

                                    {/*
                                    <li>
                                        <a href="#" class="collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i
                                                class="mdi mdi-chevron-down"></i>کالای دیجیتال</a>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                            data-parent="#accordionExample">
                                            <ul>
                                                <li class="has-sub"><a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">کیف و کاور گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                        <li><a href="#" class="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">گوشی موبایل</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">سامسونگ</a></li>
                                                        <li><a href="#" class="category-level-3">هوآوی</a></li>
                                                        <li><a href="#" class="category-level-3">اپل</a></li>
                                                        <li><a href="#" class="category-level-3">شیائومی</a></li>
                                                        <li><a href="#" class="category-level-3">آنر</a></li>
                                                        <li><a href="#" class="category-level-3">نوکیا</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">دوربین</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین چاپ سریع</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#" class="collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i
                                                class="mdi mdi-chevron-down"></i>آرایشی و بهداشتی</a>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                            data-parent="#accordionExample">
                                            <ul>
                                                <li class="has-sub"><a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">کیف و کاور گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                        <li><a href="#" class="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">گوشی موبایل</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">سامسونگ</a></li>
                                                        <li><a href="#" class="category-level-3">هوآوی</a></li>
                                                        <li><a href="#" class="category-level-3">اپل</a></li>
                                                        <li><a href="#" class="category-level-3">شیائومی</a></li>
                                                        <li><a href="#" class="category-level-3">آنر</a></li>
                                                        <li><a href="#" class="category-level-3">نوکیا</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">دوربین</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین چاپ سریع</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">ابزار و اداری</a></li>
                                    <li><a href="#">مد و پوشاک</a></li>
                                    <li><a href="#" class="collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i
                                                class="mdi mdi-chevron-down"></i>خانه و آشپزخانه</a>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <ul>
                                                <li class="has-sub"><a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">کیف و کاور گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                        <li><a href="#" class="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">گوشی موبایل</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">سامسونگ</a></li>
                                                        <li><a href="#" class="category-level-3">هوآوی</a></li>
                                                        <li><a href="#" class="category-level-3">اپل</a></li>
                                                        <li><a href="#" class="category-level-3">شیائومی</a></li>
                                                        <li><a href="#" class="category-level-3">آنر</a></li>
                                                        <li><a href="#" class="category-level-3">نوکیا</a></li>
                                                        <li><a href="#" class="category-level-3">همه موارد این دسته</a></li>
                                                    </ul>
                                                </li>
                                                <li class="has-sub"><a href="#" class="category-level-2">دوربین</a>
                                                    <ul>
                                                        <li><a href="#" class="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                        <li><a href="#" class="category-level-3">دوربین چاپ سریع</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">لوازم تحریر و هنر</a></li>
                                    <li><a href="#">کودک و نوزاد</a></li>


                                    */}

                                    <li><NavLink className="current-link-menu" to="/">صفحه اصلی</NavLink></li>
                                    <li><NavLink className="current-link-menu" to="/register">ثبت نام</NavLink></li>


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
}