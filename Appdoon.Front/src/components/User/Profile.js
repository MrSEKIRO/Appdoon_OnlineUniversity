import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from "../../useFetch";
import { Col, Form } from "react-bootstrap";

const Profile = () => {

    /*const {data : userss, isLogin, error} = useFetch(process.env.REACT_APP_API+'Register');*/

    return(
        <div class="container-main">
        <div class="d-block">
            <section class="profile-home">
                <div class="col-lg">
                    <div class="post-item-profile order-1 d-block">
                        <div class="col-lg-3 col-md-3 col-xs-12 pr">
                            <div class="sidebar-profile sidebar-navigation">
                                <section class="profile-box">
                                    <header class="profile-box-header-inline">
                                        <div class="profile-avatar user-avatar profile-img">
                                            <img src = "assets/images/man.png"></img>
                                        </div>
                                    </header>
                                    {/* <footer class="profile-box-content-footer">
                                        <span class="profile-box-nameuser">fdaS</span>
                                        <span class="profile-box-registery-date">{}</span>
                                        <span class="profile-box-phone">شماره همراه : *******0991</span>
                                        <div class="profile-box-tabs">
                                            <a href="#" class="profile-box-tab-sign-out"><i
                                                    class="mdi mdi-logout-variant"></i>خروج از حساب</a>
                                        </div>
                                    </footer> */}
                                </section>
                                <section class="profile-box">
                                    <ul class="profile-account-navs">
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/Profile" class="active"><i class="mdi mdi-account-outline"></i>
                                                پروفایل
                                            </a>
                                        </li>
                                        
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/UserRoadmaps" class=""><i class=""></i>
                                                لیست رودمپ های من
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/UserFavoriteRoadmaps" class=""><i class=""></i>
                                                رودمپ های مورد علاقه من
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/EditRoadmap" class=""><i class=""></i>
                                                 ویرایش اطلاعات
                                            </a>    
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-xs-12 pl">
                            <div class="profile-content">
                                <div class="profile-stats">
                                    <table class="table table-profile">
                                        <tbody>
                                            <tr>
                                                <td class="w-50">
                                                    <div class="title">نام کاربری</div>
                                                    <div class="value">سبا رضی</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="title">ایمیل</div>
                                                    <div class="value">info@digismart.com</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="profile-edit-action">
                                        <a href="/EditRoadmap" class="link-spoiler-edit btn btn-secondary">ویرایش اطلاعات</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
   
    );

}

export default Profile;