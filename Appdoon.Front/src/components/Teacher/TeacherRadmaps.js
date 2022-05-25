import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import TeacherRoadmapBox from './TeacherRoadmapBox';

const TeacherRoadmaps = () => {

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
                                            <a href="/TeacherProfile" class=""><i class="mdi mdi-account-outline"></i>
                                                پروفایل
                                            </a>
                                        </li>
                                        
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherRoadmaps" class="active"><i class=""></i>
                                                 رودمپ های من
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/create_roadmap" class=""><i class=""></i>
                                            ساخت رودمپ
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherEditRoadmap" class=""><i class=""></i>
                                                ویرایش رودمپ
                                            </a>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <a href="/TeacherProfileEdit" class=""><i class=""></i>
                                                ویرایش اطلاعات
                                            </a>
                                        </li>
                               
                                    </ul>
                                </section>
                            </div>
                        </div>
                    
            <div class="col-lg-9 col-md-9 col-xs-14 pl">

            <div class = "heightB">
            <main class="heightB">
            <div class="heightB">
                    <div class="heightB">
                        <section class="heightB">

                        {roadmaps.length > 0 && (
                                <div class="heightB">
                                    {roadmaps.map((data, idx) => (
                                            
                                            <TeacherRoadmapBox data={data} key={idx} />
                                    ))}
                                </div>
                                )
                            }
                
                            {roadmaps.length == 0 && (
                                <div>
                                    
                                </div>)
                            }

                        </section>

                    </div>
                </div>
            </main>
            </div>

 </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
   
    );

}

export default TeacherRoadmaps;