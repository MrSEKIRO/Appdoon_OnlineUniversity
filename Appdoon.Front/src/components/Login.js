import React,{Component} from "react";
import {NavLink} from 'react-router-dom';


export class Login extends Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        

        event.preventDefault();
        
        fetch(process.env.REACT_APP_API+'login',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                Email:event.target.Email_Username.value,
                Username:event.target.Email_Username.value,
                Password:event.target.Password.value


            })
        })
        
        .then(res=>res.json())
        .then((result)=>{
            if(result.IsSuccess){
                document.getElementById("login_error").style.color = "green";
                document.getElementById("login_error").innerHTML = result.Message;
            }
            else{
                document.getElementById("login_error").style.color = "red";
                document.getElementById("login_error").innerHTML = result.Message;
            }
            
            
            
        },
        (error)=>{
            document.getElementById("login_error").style.color = "red";
            document.getElementById("login_error").innerHTML = "خطایی رخ داده است!";
        })
    }

    componentDidMount() {
        document.title = "ورود";
        
    }

    render(){
        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <section class="page-account-box">
                                <div class="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                    <div class="ds-userlogin">
                                        <a href="#" class="account-box-logo">digismart</a>
                                        <div class="account-box">
                                            <div class="account-box-headline">
                                                <NavLink to="/login" class="login-ds active">
                                                    <span class="title">ورود</span>
                                                    <span class="sub-title">به دیجی اسمارت</span>
                                                </NavLink>


                                                <NavLink to="/register" class="register-ds">
                                                    <span class="title">ثبت نام</span>
                                                    <span class="sub-title">در دیجی اسمارت</span>
                                                </NavLink>
                                            </div>
                                            <div class="Login-to-account mt-4">
                                                <div class="account-box-content">
                                                    <h4>ورود به حساب کاربری</h4>
                                                    <form onSubmit={this.handleSubmit} action="#" class="form-account text-right">





                                                        <div class="form-account-title">
                                                            <label for="email-phone">ایمیل / نام کاربری</label>
                                                            <input type="text" class="number-email-input" name="Email_Username"/>
                                                        </div>

                                                        
                                                        <div class="form-account-title">
                                                            <label for="password">رمز عبور</label>
                                                            <a href="#" class="account-link-password">رمز خود را فراموش کرده ام</a>
                                                            <input type="password" class="password-input" name="Password"/>
                                                        </div>


                                                        {/*
                                                        <div class="form-auth-row">
                                                            <label for="#" class="ui-checkbox mt-1">
                                                                <input type="checkbox" value="1" name="login" id="remember"/>
                                                                <span class="ui-checkbox-check"></span>
                                                            </label>
                                                            <label for="remember" class="remember-me mr-0">مرا به خاطر بسپار</label>
                                                        </div>
                                                        */}


                                                        <div style={{marginTop : "-20px", marginBottom : "-20px"}}>
                                                            <p style={{fontSize : "14px"}} id="login_error"></p>
                                                        </div>

                                                        <div class="form-row-account">
                                                            <button variant="primary" type="submit" class="btn btn-primary btn-login">ورود به دیجی اسمارت</button>
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

                <div class="progress-wrap">
                    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                    </svg>
                </div>

            </div>
        );
    }
}