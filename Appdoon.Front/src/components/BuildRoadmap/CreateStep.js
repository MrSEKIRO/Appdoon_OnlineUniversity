import {NavLink} from 'react-router-dom';
import { useState } from "react";

const CreateStep = () => {

    
    const [photofilename, setPhotofilename] = useState("1.jpg");
    const [imagesrc, setImagesrc] = useState(process.env.REACT_APP_PHOTOPATH + photofilename);


    const handleSubmit = (event) => {
        

        event.preventDefault();
        
        fetch(process.env.REACT_APP_API+'BuildRoadMap/CreateRoadMap',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                Title:event.target.Email_Username.value,
                Description:event.target.Description.value,
                PhotoFileName:imagesrc,
                CategoriesId:null
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

    const handleFileSelected = (event) => {
        event.preventDefault();
        setPhotofilename(event.target.files[0].name);
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'BuildRoadMap/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            setImagesrc(process.env.REACT_APP_PHOTOPATH+result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-lg">
                        <section class="page-account-box">
                            <div class="col-lg-6 col-md-6 col-xs-12 mx-auto">
                                <div class="ds-userlogin">
                                    <h2 style={{textAlign : "center"}}>ساخت رودمپ</h2>
                                    <div class="account-box">
                                        <div class="account-box-headline">

                                            
                                            
                                        <NavLink to="/create_roadmap" class="login-ds">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>


                                            <NavLink to="/create_step" class="register-ds active">
                                                <span class="title">قدم‌</span>
                                                <span class="sub-title">مراحل رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_category" class="register-ds">
                                                <span class="title">دسته‌</span>
                                                <span class="sub-title">دسته‌بندی رودمپ</span>
                                            </NavLink>



                                        </div>
                                        <div class="Login-to-account mt-4">
                                            <div class="account-box-content">
                                                <h4>ورود به حساب کاربری</h4>
                                                <form onSubmit={handleSubmit} action="#" class="form-account text-right">





                                                    <div class="form-account-title">
                                                        <label for="email-phone">نام رودمپ</label>
                                                        <input type="text" class="number-email-input" name="Email_Username"/>
                                                    </div>

                                                    
                                                    <div class="form-account-title">
                                                        <label for="email-phone">توضیحات</label>
                                                        <input type="text-area" class="number-email-input" name="Description"/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="photo">عکس</label>
                                                        <input onChange={handleFileSelected} type="File"/>
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


export default CreateStep;
