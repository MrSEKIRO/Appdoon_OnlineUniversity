import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../../Modular_Css/EditProfile.css";
import useUpdate from '../Common/useUpdate';

const EditProfile = () => {

    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!cookies.Appdoon_Auth){
            navigate('/login')
        }
    },[cookies])

    const HandleMessage = (resmess,colormess,id = "result_message_edit_info") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }

    useEffect(() => {
        if(info.Email){
            document.getElementById("namefirst").value = info.FirstName;
            document.getElementById("namelast").value = info.LastName;
            document.getElementById("username").value = info.Username;
            document.getElementById("phone").value = info.PhoneNumber;
        }
    })

    const [sensetive, setSensetive] = useState(false);
    const [url, setUrl] = useState(process.env.REACT_APP_API + 'profile/');
    const {data : info} = useFetch(url+'Info',sensetive);

    const [urlput, setUrlPut] = useState(process.env.REACT_APP_API + 'profile/edit');

    const EditInfo = async(event) =>{
        event.preventDefault();
        
        let headers = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }

        let body = JSON.stringify({
            Username:event.target.username.value,
            FirstName:event.target.namefirst.value,
            LastName:event.target.namelast.value,
            PhoneNumber:event.target.phone.value
        });


        const [resmess, colormess] = await useUpdate(urlput,body,headers);
        HandleMessage(resmess,colormess);
    }
    
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
                                            <NavLink to="/UserFavoriteRoadmaps" class=""><i class=""></i>
                                                رودمپ‌های مورد علاقه من
                                            </NavLink>
                                        </li>
                                        <li class="profile-account-nav-item navigation-link-dashboard">
                                            <NavLink to="/EditProfile" class="active"><i class=""></i>
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
                                    <div class="profile-address">
                                        <div class="middle-container">
                                            <form onSubmit={EditInfo} action="#" class="form-checkout">
                                                <div class="form-checkout-row">
                                                    <label for="namefirst">نام </label>
                                                    <input dir='auto' type="text" name="namefirst" id="namefirst"
                                                        class="input-namefirst-checkout form-control"/>
                                                    <label for="namelast">نام خانوادگی </label>
                                                    <input dir='auto' type="text" name="namelast" id="namelast"
                                                        class="input-namelast-checkout form-control"/>
                                                    <label for="username">نام کاربری </label>
                                                    <input dir='auto' type="text" name="username" id="username"
                                                        class="input-email-checkout form-control"/>
                                                    <label for="phone">شماره تلفن</label>
                                                    <input dir='auto' type = "text" name="phone" id='phone'/>


                                                        
                                                    <div style={{width:"100%"}}>
                                                        
                                                        <p style={{width:"100%", fontSize : "14px", float:"right", marginTop:"-8px", marginBottom:"12px"}} id="result_message_edit_info"></p>
                                                        <button style={{marginTop:"-20px"}} class="btn-registrar" type='submit'> ثبت تغییرات </button>
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