import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
//import{Button,Form} from 'react-bootstrap';

const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'register',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Email:event.target.Email.value,
                Username:event.target.Username.value,
                Password:event.target.Password.value


            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.IsSuccess){
                document.getElementById("register_error").style.color = "green";
                document.getElementById("register_error").innerHTML = result.Message;
            }
            else{
                document.getElementById("register_error").style.color = "red";
                document.getElementById("register_error").innerHTML = result.Message;
            }
            
            
        },
        (error)=>{
            document.getElementById("register_error").style.color = "red";
            document.getElementById("register_error").innerHTML = "خطایی رخ داده است!";
        })
    }



    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <section className="page-account-box">
                            <div className="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                <div className="ds-userlogin">
                                    <a href="#" className="account-box-logo">Appdoon</a>
                                    <div className="account-box">
                                        <div className="account-box-headline">
                                            <NavLink to="/login" class="login-ds">
                                                <span class="title">ورود</span>
                                                <span class="sub-title">به حساب کاربری</span>
                                            </NavLink>


                                            <NavLink to="/register" class="register-ds active">
                                                <span class="title">ثبت نام</span>
                                                <span class="sub-title">در سایت</span>
                                            </NavLink>
                                        </div>

                                        <div className="Login-to-account mt-4">
                                            <div className="account-box-content">
                                                <h4>ثبت نام در سایت</h4>
                                                <form onSubmit={handleSubmit} action="#" className="form-account text-right">







                                                    <div className="form-account-title">
                                                        <label for="email-phone">ایمیل</label>
                                                        <input type="text" className="number-email-input" name="Email"/>
                                                    </div>

                                                    <div className="form-account-title">
                                                        <label for="email-phone">نام کاربری</label>
                                                        <input type="text" className="number-email-input" name="Username"/>
                                                    </div>

                                                    <div className="form-account-title">
                                                        <label for="password">رمز عبور</label>
                                                        <input type="password" className="password-input" name="Password"/>
                                                    </div>


                                                    {/*

                                                    <div className="form-auth-row">
                                                        <label for="#" className="ui-checkbox mt-1">
                                                            <input type="checkbox" value="1" name="login" id="remember"/>
                                                            <span className="ui-checkbox-check"></span>
                                                        </label>
                                                        <label for="remember" className="remember-me mr-0"><a href="#">حریم خصوصی</a> و <a href="#">شرایط قوانین </a>استفاده از سرویس های سایت دیجی‌اسمارت را مطالعه نموده و با کلیه موارد آن موافقم.</label>
                                                    </div>

                                                    */}

                                                    <div style={{marginTop : "-20px", marginBottom : "-20px"}}>
                                                        <p style={{fontSize : "14px"}} id="register_error"></p>
                                                    </div>

                                                    <div className="form-row-account">
                                                        <button variant="primary" type="submit" className="btn btn-primary btn-register">ثبت نام</button>
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
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>



            <br/>
            <br/>
            <br/>
            <br/>
        </div>




    );
}

export default Register;

