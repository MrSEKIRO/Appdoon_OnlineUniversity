import {NavLink} from 'react-router-dom';
import { useState } from "react";
import useFetch from '../Common/useFetch';
import { Col, Form } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useEffect } from "react";


const EditRoadmap = () => {


    const {id} = useParams();

    const [data, setData] = useState([])
    
    const [newError, setNewError] = useState(null)

    const url = process.env.REACT_APP_API + 'RoadMaps/GetLesson';

    useEffect(() => {
        fetch(url,{
            
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify({
                LessonId:id
            })
            
        }).then(res => {
            
            //console.log(res);
            
            if(!res.ok){
                
                throw Error('could not fetch!');
            }
            
            return res.json();
        })
        .then(data => {
            
            //alert(data.Data.length);
            //console.log(data);
            //alert(data.Message);
            setData(data.Data);

            setNewError(null);
            //alert(data.Data.Steps[0].ChildSteps.length);
            
        }).then(() =>{
            
            //setIsPending(false);
            //console.log("New Blog added");
            //history.push(`/timeline/${id}`);
            
        })
        .catch(err => {
            
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setNewError(err.message);
            }
        })
    }, [url]);
















    const {data : categories, error} = useFetch(process.env.REACT_APP_API+'RoadMaps/GetCategories');

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
        

        fetch(process.env.REACT_APP_API+'BuildRoadMap/EditRoadMap',{
            method:"POST",
            body:formData
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

                                            
                                            
                                            <NavLink to="/edit_roadmap" class="login-ds active">
                                                <span class="title">رودمپ</span>
                                                <span class="sub-title">قالب رودمپ</span>
                                            </NavLink>

                                            <NavLink to="/edit_category" class="register-ds">
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
                                                <h4>ویرایش رودمپ</h4>
                                                <form onSubmit={handleSubmit} action="#" class="form-account text-right">





                                                    <div class="form-account-title">
                                                        <label for="Title">نام رودمپ</label>
                                                        <input type="text" class="number-email-input" name="Title"/>
                                                    </div>

                                                    
                                                    <div class="form-account-title">
                                                        <label for="Description">توضیحات</label>
                                                        <textarea class="number-email-input" name="Description"/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="Photo">تصویر رودمپ</label>
                                                        <input class="form-control" type="File" name='Photo'/>
                                                    </div>

                                                    <div class="form-account-title">
                                                        <label for="Categories">دسته‌بندی‌ها</label>
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
                                                        <p style={{fontSize : "14px"}} id="result_message"></p>
                                                    </div>

                                                    <div class="form-row-account">
                                                        <button variant="primary" type="submit" class="btn btn-primary btn-login">ویرایش رودمپ</button>
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


export default EditRoadmap;
