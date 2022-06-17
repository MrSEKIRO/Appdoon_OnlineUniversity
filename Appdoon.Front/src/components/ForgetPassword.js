import React,{Component, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import useCreate from "./Common/useCreate";
import { useState } from "react";
import $ from 'jquery';


const ForgetPassword = () => {

    const [cookies, setCookie] = useCookies(['Appdoon_Auth']);
    const [sensetive, setSensetive] = useState(false);
    
    
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies.Appdoon_Auth){
            navigate('/profile')
        }
    },[cookies])

    const [urlpost, setUrlPost] = useState(process.env.REACT_APP_API + "authentication/forgetpassword");

    const HandleMessage = (resmess,colormess,id = "result_message_reset_password") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }

    const HandleSubmit = async(event) => {
        event.preventDefault();
        
        let headers = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }

        
        
        let body = JSON.stringify({
            ToEmail:event.target.EmailAccount.value
        });

        const [resmess, colormess] = await useCreate(urlpost,body,headers);
        HandleMessage(resmess,colormess);
    }


    return (
        !cookies.Appdoon_Auth &&
        
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <br />
                        <br />
                        <br />
                        <br />
                        <section class="page-account-box">
                            <div class="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                <div class="ds-userlogin">
                                    <a href="#" class="account-box-logo">Appdoon</a>
                                    <div class="account-box">
                                        <div class="Login-to-account mt-4">
                                            <div class="account-box-content">
                                                <h4 class="mb-2">فراموشی گذرواژه</h4>
                                                <p>گذرواژه خود را فراموش کرده اید؟ شماره موبایل یا ایمیل خود را وارد کنید.</p>
                                                <form onSubmit={HandleSubmit} action="#" class="form-account text-right">
                                                    <div class="form-account-title">
                                                        <label for="EmailAccount">ایمیل / شماره موبایل</label>
                                                        <input type="text" dir="auto" class="number-email-input" id="email-phone" name="EmailAccount"/>
                                                    </div>
                                                    <div class="form-row-account">
                                                        <p style={{fontSize : "14px", float:"right", marginTop:"8px", marginBottom:"-8px"}} id="result_message_reset_password"></p>
                                                        <button class="btn btn-primary btn-login">بازگردانی رمز عبور</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

        </div>

    );
}

export default ForgetPassword;