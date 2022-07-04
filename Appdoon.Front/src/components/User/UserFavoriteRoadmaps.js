import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import RoadmapBox from '../Roadmap/RoadmapBox';
import UserRoadmapBox from './UserRoadmapBox';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserFavoriteRoadmaps = () => {

    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!cookies.Appdoon_Auth){
            navigate('/login')
        }
    },[cookies])

    const [sensetive, setSensetive] = useState(false);

    //User
    const [urlRoadmaps, setUrlRoadmaps] = useState(process.env.REACT_APP_API + 'profile/BookMarkedRoadMaps')
    const {data : roadmaps} = useFetch(urlRoadmaps,sensetive);

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
                                    
                                </section>
                                <section class="profile-box">
                                    <ul class="profile-account-navs">
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/Profile" class=""><i class="mdi mdi-account-outline"></i>
                                                پروفایل
                                            </NavLink>
                                        </li>
                                        
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/UserRoadmaps" class=""><i class=""></i>
                                                لیست رودمپ‌های من
                                            </NavLink>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/UserFavoriteRoadmaps" class="active"><i class="active"></i>
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
                        

            <div class="col-lg-9 col-md-9 col-xs-14 pl">

            <main class="heightB">
                <div class="heightB">
                    <div class="heightB">
                        <section class="heightB">

                        {roadmaps.length > 0 && (
                                <div class="heightB">
                                    {roadmaps.map((data, idx) => (
                                            
                                            <UserRoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps.length === 0 && (
                                <div>
                                    شما هیچ رودمپ مورد علاقه‌ای ندارید.
                                </div>)
                            }



                        </section>

                    </div>
                </div>
            </main>

 </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
   
    );

}

export default UserFavoriteRoadmaps;