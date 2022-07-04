import {NavLink} from 'react-router-dom';
import { useEffect, useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    
    const [sensetive, setSensetive] = useState(false);
    const [url, setUrl] = useState(process.env.REACT_APP_API + 'profile/');

    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    const navigate = useNavigate();

    const {data : info} = useFetch(url+'Info',sensetive);
    
    useEffect(()=>{
        if(!cookies.Appdoon_Auth){
            navigate('/login')
        }
    },[cookies])

    
    return(
        cookies.Appdoon_Auth &&
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
                                            <NavLink to="/Profile" class="active"><i class="mdi mdi-account-outline"></i>
                                                پروفایل
                                            </NavLink>
                                        </li>
                                        
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/UserRoadmaps" class=""><i class=""></i>
                                                لیست رودمپ‌های من
                                            </NavLink>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/UserFavoriteRoadmaps" class=""><i class=""></i>
                                                رودمپ‌های مورد علاقه من
                                            </NavLink>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/EditProfile" class=""><i class=""></i>
                                                ویرایش اطلاعات      
                                            </NavLink>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/EditPassword" class=""><i class=""></i>
                                                تغییر رمز عبور
                                            </NavLink>
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
                                                    <div class="title">نام کاربری  :</div>
                                                    <div class="value">{info.Username || "_____"}</div>
                                                </td>
                                                <td class="w-50">
                                                    <div class="title">نقش  :</div>
                                                    <div class="value">{info.Role || "_____"}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="title">نام:</div>
                                                    <div class="value">{info.FirstName || "_____"}</div>
                                                </td>
                                                <td>
                                                    <div class="title">نام خانوادگی :</div>
                                                    <div class="value">{info.LastName || "_____"}</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="title">ایمیل :</div>
                                                    <div class="value">{info.Email || "_____"}</div>
                                                </td>
                                                <td>
                                                    <div class="title"> شماره تلفن :</div>
                                                    <div class="value">{info.PhoneNumber || "_____"}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  
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