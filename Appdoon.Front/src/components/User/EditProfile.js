import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";

const EditProfile = () => {

    const {data : roadmaps, isLogin, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/Index');
    
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
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-xs-12 pl">
                        <div class="profile-content">
                                <div class="profile-stats">
                                    <div class="profile-address">
                                        <div class="middle-container">
                                            <form action="#" class="form-checkout">
                                                <div class="form-checkout-row">
                                                    <label for="namefirst">نام </label>
                                                    <input type="text" id="namefirst"
                                                        class="input-namefirst-checkout form-control"/>
                                                    <label for="namelast">نام خانوادگی </label>
                                                    <input type="text" id="namelast"
                                                        class="input-namelast-checkout form-control"/>
                                                    <label for="email">ایمیل </label>
                                                    <input type="text" id="email"
                                                        class="input-email-checkout form-control"/>
                                                    <label for="password">شماره تلفن</label>
                                                    <input type = "text" id='phone'/>
                                                    <label for="password">رمز عبور قبلی </label>
                                                    <input type="text" id="password"
                                                        class="input-password-checkout form-control"/>
                                                    <label for="password">رمز عبور جدید </label>
                                                    <input type="text" id="password"
                                                        class="input-password-checkout form-control"/>
                                                    <label for="password">تکرار رمز عبور جدید</label>
                                                    <input type="text" id="password"
                                                        class="input-password-checkout form-control"/>
                                                    <div class="AR-CR">
                                                        <button class="btn-registrar"> ثبت تغییرات </button>
                                                        <a href="#" class="cancel-edit-address" data-dismiss="modal"
                                                            aria-label="Close">بازگشت</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

export default EditProfile;