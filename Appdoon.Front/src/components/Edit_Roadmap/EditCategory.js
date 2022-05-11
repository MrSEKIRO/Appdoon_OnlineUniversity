import {NavLink} from 'react-router-dom';
import React,{Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const EditCategory = () => {

    const {id} = useParams();
    const [category, setCategory] = useState(null);
    const url = process.env.REACT_APP_API + "category/"+id;
    const [error, setError] = useState(null);

    


    useEffect(() =>{
        
        fetch(url,{
            
            method : "Get",
            headers : {"Content-Type" : "application/json"}
            
        }).then(res => {
            
            if(!res.ok){
                throw Error('could not fetch!');
            }
            return res.json();
        })
        .then(data => {
            setCategory(data.Data);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
            }
        })
    },[url,category]);
    

    const handleUpdate = (event) => {
        event.preventDefault();
        
        
        fetch(url,{
            method:"Put",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
            body:JSON.stringify({
                Name:event.target.EditName.value,
                Link:event.target.EditLink.value,
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

    const handleDelete = () => {
        fetch(url,{
            method:"Delete",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
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
                                                <form onSubmit={handleUpdate} action="#" class="form-account text-right">



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


                                                <button variant="primary" onClick={() => handleDelete()} class="btn btn-primary btn-login">حذف دسته‌</button>


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
