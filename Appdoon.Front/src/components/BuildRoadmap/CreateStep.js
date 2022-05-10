import {NavLink} from 'react-router-dom';
import useFetch from '../../useFetch';
import { useState } from "react";

const CreateStep = () => {

    const {data : roadmaps, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/Index');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(process.env.REACT_APP_API+'BuildRoadMap/CreateStep',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                Title:event.target.Title.value,
                Description:event.target.Description.value,
                Link:event.target.Link.value,
                RoadMapId:event.target.Roadmap.options[event.target.Roadmap.selectedIndex].value,
            })
        })
        
        .then(res=>res.json())
        .then((result)=>{
            if(result.IsSuccess){
                document.getElementById("result_message").style.color = "green";
                document.getElementById("result_message").innerHTML = result.Message;
            }
            else{
                document.getElementById("result_message").style.color = "red";
                document.getElementById("result_message").innerHTML = result.Message;
            }
            
        },
        (error)=>{
            document.getElementById("result_message").style.color = "red";
            document.getElementById("result_message").innerHTML = "خطایی رخ داده است!";
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
                                    <a href="#" className="account-box-logo">Appdoon</a>
                                    <div class="account-box">
                                        <div class="account-box-headline">

                                            
                                            
                                            <NavLink to="/create_roadmap" class="login-ds">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_category" class="register-ds">
                                                <span class="title">دسته‌</span>
                                                <span class="sub-title">دسته‌بندی رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_step" class="register-ds active">
                                                <span class="title">قدم‌</span>
                                                <span class="sub-title">مراحل رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/create_child_step" class="register-ds">
                                                <span class="title">محتوا‌</span>
                                                <span class="sub-title">محتوا‌ قدم‌ها</span>
                                            </NavLink>
                                            <NavLink to="/create_lesson" class="register-ds">
                                                <span class="title">مقاله</span>
                                                <span class="sub-title">مقاله درونی</span>
                                            </NavLink>


                                        </div>
                                        <div class="Login-to-account mt-4">
                                            <div class="account-box-content">
                                                <h4>ساخت قدم</h4>
                                                <form onSubmit={handleSubmit} action="#" class="form-account text-right">





                                                    <div class="form-account-title">
                                                        <label for="email-phone">نام قدم</label>
                                                        <input type="text" class="number-email-input" name="Title"/>
                                                    </div>

                                                    
                                                    <div class="form-account-title">
                                                        <label for="email-phone">توضیحات</label>
                                                        <textarea class="number-email-input" name="Description"/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="email-phone">لینک</label>
                                                        <input type="text" class="number-email-input" name="Link"/>
                                                    </div>




                                                    <div class="form-account-title">
                                                        <label for="Roadmap">رودمپ‌</label>
                                                        {roadmaps.length > 0 && (
                                                            <select name = "Roadmap" class="form-select" aria-label="Default select example">
                                                                <option value="default">
                                                                    انتخاب کنید
                                                                </option>
                                                                {roadmaps.map((data, idx) => (
                                                                    <option value={data.Id}>
                                                                        {data.Title}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            )
                                                        }
                                                        
                                                        {roadmaps.length == 0 &&(
                                                                <div></div>
                                                            )
                                                        }
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
                                                        <p style={{fontSize : "14px"}} id="result_message"></p>
                                                    </div>

                                                    <div class="form-row-account">
                                                        <button variant="primary" type="submit" class="btn btn-primary btn-login">ساخت قدم</button>
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

            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
}


export default CreateStep;
