import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from "../../useFetch";
import { Col, Form } from "react-bootstrap";




const CreateRoadmap = () => {
    const {data : categories, isLogin, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/GetCategories');

    const [field, setField] = useState([]);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        let imagesrc = "1.jpg";
        const formData = new FormData();

        if(event.target.Photo.files.length){
            imagesrc = event.target.Photo.files[0].name;
            formData.append("myFile",event.target.Photo.files[0]);
        }

        formData.append("Title",event.target.Title.value);
        formData.append("Description",event.target.Description.value);
        formData.append("PhotoFileName",imagesrc);

        let i = 0;
        for (var option of event.target.Categories.options)
        {
            i++;
            if (option.selected) {
                formData.append("CategoriesId"+i,option.value);
            }
        }
        

        fetch(process.env.REACT_APP_API+'BuildRoadMap/CreateRoadMap',{
            method:"POST",
            body:formData
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

                                            
                                            
                                            <NavLink to="/create_roadmap" class="login-ds active">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>


                                            <NavLink to="/create_step" class="register-ds">
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
                                                        <input type="text" class="number-email-input" name="Title"/>
                                                    </div>

                                                    
                                                    <div class="form-account-title">
                                                        <label for="email-phone">توضیحات</label>
                                                        <input type="text" class="number-email-input" name="Description"/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="Photo">عکس</label>
                                                        <input type="File" name='Photo'/>
                                                    </div>

                                                    <div>
                                                        {categories.length > 0 && (
                                                            <Form.Label>My multiselect</Form.Label>,
                                                            <Form.Control name='Categories' as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                                                            {categories.map((data, idx) => (
                                                                <option value={data.Name}>
                                                                    {data.Name}
                                                                </option>
                                                            ))}
                                                            </Form.Control>

                

                                                            )
                                                        }
                                                        
                                                        {categories.length == 0 &&(
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
                                                    */
                                                    }


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


export default CreateRoadmap;
