import {NavLink} from 'react-router-dom';
import React,{Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useDelete from '../Common/useDelete';
import useFetch from '../Common/useFetch';
import useUpdate from '../Common/useUpdate';

const EditCategory = () => {

    const {id} = useParams();
    const [url, setUrl] = useState(process.env.REACT_APP_API + "category/"+id);
    const [sensetive, setSensetive] = useState(false);
    const {data : category, error} = useFetch(url,sensetive);
    
    const HandleMessage = (resmess,colormess,id = "result_message") => {
        document.getElementById(id).style.color = colormess;
        document.getElementById(id).innerHTML = resmess;
        setSensetive(!sensetive);
    }
    
    const HandleUpdate = async(event) => {
        event.preventDefault();
        const body = JSON.stringify({
            Name:event.target.EditName.value,
            Link:event.target.EditLink.value,
        });
        const [resmess, colormess] = await useUpdate(url,body);
        HandleMessage(resmess,colormess);
    }

    const HandleDelete = async() => {
        const [resmess, colormess] = await useDelete(url);
        HandleMessage(resmess,colormess);
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

                                            
                                            
                                            <NavLink to="/edit_roadmap" class="login-ds">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/edit_category" class="register-ds active">
                                                <span class="title">دسته‌</span>
                                                <span class="sub-title">دسته‌بندی رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/edit_step" class="register-ds">
                                                <span class="title">قدم‌</span>
                                                <span class="sub-title">مراحل رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/edit_child_step" class="register-ds">
                                                <span class="title">محتوا‌</span>
                                                <span class="sub-title">محتوا‌ قدم‌ها</span>
                                            </NavLink>

                                            <NavLink to="/edit_lesson" class="register-ds">
                                                <span class="title">مقاله</span>
                                                <span class="sub-title">مقاله درونی</span>
                                            </NavLink>



                                        </div>
                                        <div class="Login-to-account mt-4">
                                            <div class="account-box-content">
                                                <h4>ویرایش دسته</h4>
                                                <form onSubmit={HandleUpdate} action="#" class="form-account text-right">



                                                    {category &&
                                                    <div>
                                                        <div class="form-account-title">
                                                            <label for="Name">نام دسته</label>
                                                            <input value={category.Name} type="text" class="number-email-input" name="Name" readonly = "true"/>
                                                        </div>
                                                        

                                                        <div class="form-account-title">
                                                            <label for="EditName">نام جدید دسته</label>
                                                            <input placeholder={category.Name} type="text" class="number-email-input" name="EditName"/>
                                                        </div>

                                                        
                                                        <div class="form-account-title">
                                                            <label for="EditLink">لینک جدید</label>
                                                            <input placeholder={category.Link} type="text-area" class="number-email-input" name="EditLink"/>
                                                        </div>
                                                    </div>
                                                    }


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
                                                        <button variant="primary" type="submit" class="btn btn-primary btn-login">ویرایش دسته‌</button>
                                                    </div>

                                                </form>


                                                <button variant="primary" onClick={() => HandleDelete()} class="btn btn-primary btn-login">حذف دسته‌</button>


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


export default EditCategory;
